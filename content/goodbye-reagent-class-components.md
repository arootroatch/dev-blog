---
layout: blog
title: Goodbye, Reagent Class Components!
author: Alex Root-Roatch
description: Using `with-let` to avoid inner functions and class components
date: 2025-01-31T06:39:24-6:00
updated: 2025-01-31T06:39:24-6:00
thumbnail: /img/cljs.png
category: [ Clojure ] 
---

When I first started using Reagent, I was surprised to see the use of React class components. Whenever needing to hook
into the component lifecycle for things like add and removing event listeners, we were using `componentDidMount()` and
`componentWillUnmount()`. Hooks and function components have been a part of React since 2018, and the React developers
themselves have all but deprecated class components when they launched
the [new React documentation website](https://react.dev) in 2023. Documentation on how to use class components in React
is now under the "Legacy API" section of the website. Modern React is functional and immutable, yet when writing React
in the functional and immutable realm of ClojureScript, we are using Object-Oriented class components and mutating
atoms.

In my crusade to abolish class-components, I had started researching the possibility of calling React hooks like
`useEffect()` directly in my Reagent applications, which Reagent supports using `:f>` symbol when rendering components (
see [this link](https://github.com/reagent-project/reagent/blob/master/doc/ReactFeatures.md) for details). Then, deeper
down in the Reagent documentation, I found `with-let`. This Reagent looks like Clojure's `let`, with two main
differences:

1. The bindings are only evaluated once when the component mounts and not on subsequent re-renders, and
2. It provides us with a `finally` form at the bottom of the component to house any cleanup functions when the component
   unmounts.

This macro can be effectively used to achieve two things:

1. House component-level internal state without using inner functions
2. Access the component lifecycle without writing class components or the `useEffect()` hook.

Let's take a deeper look.

## Internal State, No Inner Function

It's very common in Reagent to use an inner function for rendering a component when dealing with internal state. To
borrow an example from Reagent's documentation:

```
(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div "Seconds Elapsed: " @seconds-elapsed])))
```

This creates the `seconds-elapsed` atom only when the component first mounts, and the code in the inner function run on
every re-render. Without the inner function, the atom would be re-initialized to `0` on every re-render, and the timer
wouldn't work! However, we can leverage `with-let` to only evaluate the binding when the component mounts and eliminate
the need for the inner function:

```
(defn timer-component [] 
  (r/with-let [seconds-elapsed (r/atom 0)]
    (js/setTimeout #(swap! seconds-elapsed inc) 1000)
    [:div "Seconds Elapsed: " @seconds-elapsed]))
```

## Accessing Component Lifecycle Without Classes

`with-let` also provides us with a `finally` form that runs when the component is no longer rendered. This is useful
when adding event listeners that need to be removed when the component no longer exists on the page. For instance, say
we have a button that renders a `div` container, and we want to close either when the button is clicked or when we
simply click outside the container. With classes, that looks like this:

```
(defn open-close-class-component []
  (let [open?   (r/atom false)
        handler (partial on-click open?)]
    (r/create-class
      {:component-did-mount    #(wjs/add-doc-listener "click" handler)
       :component-will-unmount #(wjs/remove-doc-listener "click" handler)
       :reagent-render
       (fn []
         [:<>
           [:button "Click Me"]
           (when @open?
             [:div "Look at me! I'm open!"])])})))
```

I don't know about you, but seeing this kind of Object-Oriented React in my ClojureScript makes me cringe. Instead, we
can do this:

```
(defn open-close-class-component []
  (r/with-let [open?   (r/atom false)
               handler (partial on-click open?)
               _       (wjs/add-doc-listener "click" handler)]
    [:<>
      [:button "Click Me"]
        (when @open?
          [:div "Look at me! I'm open!"])])
    (finally (wjs/remove-doc-listener "click" handler)))
```

This has internal state and adds and removes event listeners without internal functions or clunky class components. Now
that's clean!

## What About `componentDidMount()`?

Let's re-visit our timer example for a minute.

```
(defn timer-component [] 
  (r/with-let [seconds-elapsed (r/atom 0)]
    (js/setTimeout #(swap! seconds-elapsed inc) 1000)
    [:div "Seconds Elapsed: " @seconds-elapsed]))
```

For those used to thinking in terms of React class components, this might look strange. The side-effect-inducing
`js/setTimeout` appears to be being called from inside the render function, like this:

```
(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (r/create-class
      {:reagent-render
       (fn []
         (js/setTimeout #(swap! seconds-elapsed inc) 1000)
         [:div "Seconds Elapsed: " @seconds-elapsed])})))
         
; NOT what is actually happening! 
```

This, of course, is a huge violation of the best practice of render functions always being pure functions. Having side
effects inside the render function can make applications unpredictable and hard to debug.

However, that is *not* actually what is happening in the first example. In Reagent (and React function components, too),
what is returned from the function is what is rendered. Remember that ClojureScript has implicit returns, so whatever
the last form in the function is, that is what gets rendered. `js/setTimeout` is never returned from the function, so
it's not polluting the renderer. The class component equivalent would be this:

```
(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (r/create-class
      {:component-did-mount  (fn [] (js/setTimeout #(swap! seconds-elapsed inc) 1000))
       :component-did-update (fn [] (js/setTimeout #(swap! seconds-elapsed inc) 1000))
       :reagent-render       (fn [] [:div "Seconds Elapsed: " @seconds-elapsed])})))
```

As a rule of thumb, once your hiccup starts, there should be no side-effect-inducing code unless triggered by user
events like click handlers.

Notice that `js/setTimout` is called both in `:component-did-mount` and `:component-did-render`, but is only called once
in the example that doesn't use class components. That's because the body of the function that's before the return value
is evaluated everytime the component renders, so it functions as both `:component-did-mount` and
`:component-did-update`. We can move it into the `with-let` to make sure it only runs once, getting the same result as
only using `:component-did-mount`. If we want it to act like `:component-did-update` and run on all subsequent
re-renders but *not* on the initial render, a simple conditional check against the internal state suffices:

```
(defn timer-component [] 
  (r/with-let [seconds-elapsed (r/atom 0)
               inc-timer       (fn [] (js/setTimeout #(swap! seconds-elapsed inc) 1000))]
    (when (> @seconds-elapsed 0) (inc-timer))
    [:div "Seconds Elapsed: " @seconds-elapsed
     [:button {:on-click inc-timer} "Start Timer"]]))
```

Now the timer will not start when it first mounts, but it will start when the user clicks the button and then will
continue to run on each subsequent re-render until the component unmounts.

## Wrapping Up

To summarize:

- The let bindings in `with-let` act as `:component-did-mount`, only running when to component first renders.
- The `finally` form acts as `:component-will-unmount`, running when component is no longer rendered.
- The function body between the bindings and the `finally` acts as `:component-did-mount` and `:component-did-update`,
  running each time the component re-renders.
    - Use a conditional check against some internal state to stop it from running on initial mount but still run on each
      subsequent re-render.

Thanks to `with-let`, we no longer need to use class components in Reagent to get access to the component lifecycle, nor
do we need inner functions when dealing with internal state.

## BONUS: React Function Component Examples

For those more familiar with React function components rather than class components, or those simply curious about
function components, I want to show what these same examples would look like in React function components.

### Initial Mount and Subsequent Re-renders

Reagent example:

```
(defn timer-component [] 
  (r/with-let [seconds-elapsed (r/atom 0)]
    (js/setTimeout #(swap! seconds-elapsed inc) 1000)
    [:div "Seconds Elapsed: " @seconds-elapsed]))
```

JavaScript React example:

```
export default function timerComponent() {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
        setTimeout(setSecondsElapsed(secondsElapsed + 1), 1000);
    }, [secondsElapsed]) // <- dependency array tells React to run useEffect() everytime secondsElapsed changes

    return (
        <div>
            `Seconds Elapsed: ${secondsElapsed}`
        </div>
    )
}
```

### Initial Mount Only

Reagent example:

```
(defn timer-component [] 
  (r/with-let [seconds-elapsed (r/atom 0)
               _               (js/setTimeout #(swap! seconds-elapsed inc) 1000)]
    [:div "Seconds Elapsed: " @seconds-elapsed]))
```

JavaScript React example:

```
export default function timerComponent() {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
        setTimeout(setSecondsElapsed(secondsElapsed + 1), 1000);
    }, []) // <- empty dependency array tells React to run useEffect() only on initial mount

    return (
        <div>
            `Seconds Elapsed: ${secondsElapsed}`
        </div>
    )
}
```

### Subsequent Re-renders Only (Button Trigger)

Reagent example:

```
(defn timer-component [] 
  (r/with-let [seconds-elapsed (r/atom 0)
               inc-timer       (fn [] (js/setTimeout #(swap! seconds-elapsed inc) 1000))]
    (when (> @seconds-elapsed 0) (inc-timer))
    [:div "Seconds Elapsed: " @seconds-elapsed
     [:button {:on-click inc-timer} "Start Timer"]]))
```

JavaScript React example:

```
export default function timerComponent() {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    const incTimer = () => {
        setTimeout(setSecondsElapsed(secondsElapsed + 1), 1000);
    }

    useEffect(() => {
        if (secondsElapsed > 0) incTimer(); // conditional check prevents running on initial mount
    }, [secondsElapsed]) // <- dependency array tells React to run useEffect() everytime secondsElapsed changes

    return (
        <div>
            `Seconds Elapsed: ${secondsElapsed}`
            <button onClick={incTimer}>Start Timer</button>
        </div>
    )
}
```


---
layout: blog
title: Goodbye, Reagent Class Components!
author: Alex Root-Roatch
description: Using `with-let` to avoid inner functions and class components
date: 2025-01-31T06:39:24-6:00
updated: 2025-01-31T06:39:24-6:00
thumbnail: /img/cljs.png
category: [Clojure] 
---

When I first started using Reagent, I was surprised to see the use of React class components. Whenever needing to hook into the component lifecycle for things like add and removing event listeners, we were using `componentDidMount` and `componentWillUnmount`. Hooks and function components have been a part of React since 2018, and the React developers themselves have all but deprecated class components when they launched the [new React documentation website](https://react.dev) in 2023. Documentation on how to use class components in React is now under the "Legacy API" section of the website. Modern React is functional and immutable, yet when writing React in the functional and immutable realm of ClojureScript, we are using Object-Oriented class components and mutating atoms. 

In my crusade to abolish class-components, I had started researching the possibility of calling React hooks like `useEffect` directly in my Reagent applications, which Reagent supports using `:f>` symbol when rendering components. Then, deeper down in the Reagent documentation, I found `with-let`. This Reagent looks like Clojure's `let`, with two main differences:
1. The bindings are only evaluated once when the component mounts and not on subsequent re-renders, and 
2. It provides us with a `finally` form at the bottom of the component to house any cleanup functions when the component unmounts. 

This macro can be effectively used to achieve two things: 
1. House component-level internal state without using inner functions
2. Access the component lifecycle without writing class components or the `useEffect` hook. 

Let's take a deeper look. 

## Internal State, No Inner Function

It's very common in Reagent to use an inner function for rendering a component when dealing with internal state. To borrow an example from Reagent's documentation: 

```
(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div "Seconds Elapsed: " @seconds-elapsed])))
```

This creates the `seconds-elapsed` atom only when the component first mounts, and the code in the inner function run on every re-render. Without the inner function, the atom would be re-initialized to `0` on every re-render, and the timer wouldn't work! However, we can leverage `with-let` to only evaluate the binding when the component mounts and eliminate the need for the inner function: 

```
(defn timer-component [] 
  (r/with-let [seconds-elapsed (r/atom 0)]
    (js/setTimeout #(swap! seconds-elapsed inc) 1000)
    [:div "Seconds Elapsed: " @seconds-elapsed]))
```

## Accessing Component Lifecycle Without Classes

`with-let` also provides us with a `finally` form that runs when the component is no longer rendered. This is useful when adding event listeners that need to be removed when the component no longer exists on the page. For instance, say we have a button that renders a `div` container, and we want to close either when the button is clicked or when we simply click outside the container. With classes, that looks like this: 

```
(defn open-close-class-component []
  (let [open?   (r/atom false)
        handler (partial on-click open?)]
    (r/create-class
      {:component-did-mount    #(wjs/add-doc-listender "click" handler)
       :component-will-unmount #(wjs/remove-doc-listender "click" handler)
       :reagent-render
       (fn []
         [:<>
           [:button "Click Me"]
           (when @open?
             [:div "Look at me! I'm open!"])])})))
```

I don't know about you, but seeing this kind of Object-Oriented React in my ClojureScript makes me cringe. Instead, we can do this: 

```
(defn open-close-class-component []
  (r/with-let [open?   (r/atom false)
               handler (partial on-click open?)
               _       (wjs/add-doc-listender "click" handler)]
    [:<>
      [:button "Click Me"]
        (when @open?
          [:div "Look at me! I'm open!"])])
    (finally (wjs/remove-doc-listender "click" handler)))
```

This has internal state and adds and removes event listeners without internal functions or clunky class components. Now that's clean!

## Wrapping Up

To summarize:

- The let bindings in `with-let` act as `:component-did-mount`, only running when to component first renders.
- The `finally` form acts as `:component-will-unmount`, running when component is no longer rendered.
- The function body between the bindings and the `finally` acts a `:component-did-update`, running each time the component re-renders. 

Thanks to `with-let`, we no longer need to use class components in Reagent to get access to the component lifecycle, nor do we need inner functions when dealing with internal state.  



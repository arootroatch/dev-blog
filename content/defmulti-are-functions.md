---
layout: blog
title: Defmulti ARE Functions
author: Alex Root-Roatch
description: Defmulti aren't just messengers; they are fully capable functions that can process what to dispatch, too!
date: 2024-06-25T21:00:11-6:00
updated: 2024-06-25T21:00:11-6:00
thumbnail: /img/fork-road.jpeg
category: 
  - Clojure
---

## Unnecessary Conditionals

In my tic-tac-toe game, I was using a multimethod `take-turn` to dispatch the different AI levels based on a given level number, one through three. If no number was provided, the function for getting and playing a move from user input was dispatched. The only issue was, I was using a `dispatch-player` function that used a `cond` to decide how to call the multimethod for it dispatch properly. Take a look: 

```
(ns tic.tac.toe.main)

(defn- dispatch-player [first-ai-level second-ai-level board player mode]
  (cond
    (or (and (= player :o) (= mode 2))
        (and (= player :x) (= mode 3))
        (and (= player :x) (= mode 4))) (take-turn {:level first-ai-level :board board :player player :mode mode})
    (and (= player :o) (= mode 4)) (take-turn {:level second-ai-level :board board :player player :mode mode})
    :else (take-turn {:board board :player player :mode mode})))
    
(ns tic.tac.toe.player)  

(defmulti take-turn (fn [x] (:level x)))    
```

Here, the key `:level` was having its value set conditionally and the `defmulti` looks at the value of level in order to dispatch the right function. 

This just felt *wrong.* I hated looking at that `cond` sitting there taking up space in my main namespace, and using a `cond` to dispatch a multimethod seemed to defeat the whole purpose of using a multimethod.

## Defmulti Isn't Just a Messenger

I realized that the reason I had this gross conditional to begin with was because I was viewing the `defmulti` as if it were just a messenger, something that was merely handed a message and then delivered it, rather than as a fully capable function able of processing the data and formulating the message itself. The dispatching function doesn't have to simply look at one value and dispatch off that value; multimethods will dispatch off of whatever the return value from the dispatching function is. 

All that to say, that means I could tweak the `dispatch-player` function a little and move it to use as the dispatching function in `take-turn`. Take a peek:

```
(ns tic.tac.toe.player)

(defn- dispatch-player [{:keys [player mode first-ai-level second-ai-level]}]
  (cond
    (or (and (= player :o) (= mode 2))
        (and (= player :x) (or (= mode 3) (= mode 4)))) first-ai-level
    (and (= player :o) (=  mode 4)) second-ai-level))

(defmulti take-turn dispatch-player)
```

Now `take-turn` simply takes in a map of game data and determines if it should dispatch the level of the first player AI or the second player AI. If the `defmulti` doesn't get a one, two, or three from the dispatch function, it defaults to the function for getting and playing a move from user input. The conditional itself looks cleaner, but what's even better is that `main` is much cleaner and doesn't have any helper functions.



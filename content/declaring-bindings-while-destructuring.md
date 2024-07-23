---
layout: blog
title: Declaring Bindings While Destructuring
author: Alex Root-Roatch
description: Binding destructured values to variables inside function parameters is incredibly handy. 
date: 2024-07-16T20:23:01-6:00
updated: 2024-07-16T20:23:01-6:00
thumbnail: /img/clojure-banner.png
category: 
  - Clojure
---

## Coordinating Coordinates

In the Quil GUI of my tic-tac-toe app, I have a `mouse-over?` function to detect if the mouse is within the same range of coordinates as a given button on the screen. In order to do this, the function needs four parameter regarding the button in question: the button's X and Y coordinates, width, and height. I first created this function when getting hover effects working, so it was using `mouse-x` and `mouse-y` functions inside the function body to get the mouse position.

Once I started implementing Quil's `:handle-click` option, I discovered that it passes an object with the mouse's coordinates at the time it was clicked. As such, I wanted to update `mouse-over?` to accept these coordinates as arguments. 

There was just one small issue, though: `mouse-over?` already had an `x` and `y` parameters, so I couldn't simply destructure the keys from the map that `:handle-click` passes, like this:

```
(defn mouse-over? [x y w h {:keys [x y]}]
    fn-body)
```

I also didn't want to destructure inside the function body if I could avoid it, like this:

```
(defn mouse-over? [x y w h mouse-xy]
    (let [{mouse-x :x
           mouse-y :y} mouse-xy]
       fn-body))
```

With a little bit of playing around in the REPL, I discovered it was possible to declare new bindings while destructuring all inside of the function parameters, like this:

```
(defn mouse-over? [x y w h {mouse-x :x mouse-y :y}]
    fn-body)
```

Pretty cool, huh?


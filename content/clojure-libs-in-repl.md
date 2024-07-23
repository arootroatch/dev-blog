---
layout: blog
title: Using Clojure Libs in the REPL
author: Alex Root-Roatch
description: Clojure libs like `math` and `string` need to be imported to the REPL before they can be used.
date: 2024-05-25T09:28:31-6:00
updated: 2024-05-25T09:28:31-6:00
thumbnail: /img/clojure-banner.png
category:
  - Clojure
---

## Using the REPL to Help You Code

One of my favorite things about programming in Clojure so far has been having easy access to a Read, Eval, Print Loop (REPL) in my terminal. The ability to quickly type in a line of code to see what it returns is a big convenience over adding print statements to my code and running it to see the result. 

If you have the Clojure tools installed, you can start up a REPL in your terminal by typing `clj`. If the tools aren't installed, on macOS you can install them with `brew install clojure/tools/clojure`.

If you have Leiningen installed, you can start a REPL with `lein repl`.

## Not Everything Works at First

The REPL has access to the core Clojure library, but not all the other Clojure libraries. For example, if you want to be able to calculate a square root in the REPL, typing `(math/sqrt 3)` will return an error "No such namespace: math". 

To fix this, we need to require the math library in the REPL by entering `(require '[clojure.math :as math])`.

## Import Libraries in Source Files

Another solution is to make sure these libraries are being imported in your source code files. CLJ and Leiningen both will scan your source file to find any libraries that are being required and give the REPL access to those libraries.



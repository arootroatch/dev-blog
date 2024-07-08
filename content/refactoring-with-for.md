---
layout: blog
title: Refactoring with `for`
author: Alex Root-Roatch
description: This list comprehension is very handy for iterating through multiple values
date: 2024-07-07T21:39:32-6:00
updated: 2024-07-07T21:39:32-6:00
thumbnail: /img/clojure-banner.png
category: Clojure
---

## Double Map

In a previous blog post, I discussed [creative ways to use map](https://arootroatch-blog.vercel.app/clever-ways-to-use-map) when refactoring code. Today, when working on the Quil GUI for my tic-tac-toe, I found myself with a large block of code that I wished I could refactor in a similar way, but in order to do so would have required the ability to do nested `map` functions. 

The function in question was drawing the tic-tac-toe grid to the canvas using a `create-square` function that I had written. It takes four parameters: the X and Y coordinates of the square on the canvas, the size of the square, and the game board. Here's before refactoring:

```
(defn three-board [x y size board]
  (create-square x y size (nth board 0))
  (create-square (+ x size) y size (nth board 1))
  (create-square (+ x (* 2 size)) y size (nth board 2))
  (create-square x (+ y size) size (nth board 3))
  (create-square (+ x size) (+ y size) size (nth board 4))
  (create-square (+ x (* 2 size)) (+ y size) size (nth board 5))
  (create-square x (+ y (* size 2)) size (nth board 6))
  (create-square (+ x size) (+ y (* size 2)) size (nth board 7))
  (create-square (+ x (* 2 size)) (+ y (* size 2)) size (nth board 8)))
```
The X and Y values are increased by the same amounts, but at different times, while the index of the board is incremented by 1 each line. At closer inspection, the X values are increased first, creating each of the three columns of the first row. Then the X values are reset, the Y value is increased to the next row, and the X values are increased again in the same way as before. This pattern allows for a list comprehension:

```
(defn three-board [x y size board]
  (for [row [0 1 2]
        col [0 1 2]]
    (create-square (+ x (* col size)) (+ y (* row size)) size (nth board (+ (* row 3) col)))))
```
In this example, the code will start with the first value in `row`, which is 0, and then iterate through each value in `col` before moving on to the next value in `row`. With some clever math, it's possible to calculate the indices zero through eight at the same time.

This could also be thought of as being similar to nested `for` loops in languages like Java, Python, JavaScript, or C/C++. 

## Cartesian Products

The result of this list comprehension is referred to as a *Cartesian product*. This is the set of all ordered pairs that can be created from two sets, and it's the same thing as the set of coordinates in a grid.
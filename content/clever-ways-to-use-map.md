---
layout: blog
title: Clever Ways to Use `map`
author: Alex Root-Roatch
description: Unlocking more possibilities than simply iterating through each item in a collection
date: 2024-06-26T22:38:58-6:00
updated: 2024-06-26T22:38:58-6:00
thumbnail: /img/clojure-banner.png
category:
  - Clojure
---

## Changing Perspective

Sometimes as a developer, I learn a new way of doing something that opens a brand-new door in my brain an allows me to see possibilities that I could never see before. Earlier this week, I had such an experience regarding a way to use `map` that I had never considered before. 

Typically, I always thought about using `map` as a way of taking a collection and operating on each item in that collection using the callback function. For example, I could increment every number in a vector by 3 by doing something like `(map #(+ 3 %) coll)`. The door that was kicked open for me this week was this: *what about putting the collection inside the callback function?* 

## Accessing Specific Indices

Let's start by providing some background. While working on my tic-tac-toe, I had created a predicate function to use with `filter` to check if a corner had been played. If it had, the medium-difficulty AI would respond by playing the center square. The game board is stored as a vector of nine integers, 1-9, so I merely needed to grab indices 0, 2, 6, and 8 and check if they were *not* numbers, since moves are stored as keywords. The first thing I came up with was this: 

```clojure
(defn- played-corner? [board]
  (or (not (number? (nth board 0)))
      (not (number? (nth board 2)))
      (not (number? (nth board 6)))
      (not (number? (nth board 8)))))
```
I wasn't very happy with this function, as it is practically the opposite of DRY. Every line of code is identical except for the number. However, I couldn't think of another way to do it. If I mapped across the board, that would check every single index and not just these 4 specific indices. But Brandon and my mentor Jake posed a new idea: providing a vector of the indices and using `map` on *that*, with the board inside the callback function! The result was this: 

```clojure
(defn- played-corner? [board]
  (some #{:x :o} (map #(nth board %) [0 2 6 8])))
```

Now, the result of `map` will be a collection with the values of those specific indices, which are the four corners of the game board. Then, `some` will return an item from that resulting collection if any of the 4 elements is either an `:x` or an `:o`. 

## New Opportunities Everywhere

With this new way of thinking opened up for me now, I started seeing opportunities for this creative new use of `map` in other areas in my code as well, and not just for getting specific indices of a collection. For example, my function for dividing a 4x4 board into the different ways to get four in a row looked like this: 

```clojure
(defmethod ->paths 16 [board]
  "Rows top to bottom, columns left to right, diagonals l-r and r-l"
  (concat (partition 4 board)
          (list
            (take-nth 4 board)
            (take-nth 4 (drop 1 board))
            (take-nth 4 (drop 2 board))
            (take-nth 4 (drop 3 board))
            (take-nth 5 board)
            (take-nth 3 (drop-last (drop 3 board))))))
```

There are 4 lines of code that have `take-nth 4`, the only difference among them being the amount of elements being dropped from the front of the array before the take happens. Using the new `map` trick, those 4 lines became one line:

```clojure
(defmethod ->paths 16 [board]
  "Rows top to bottom, columns left to right, diagonals l-r and r-l"
  (concat (partition 4 board)
          (map #(take-nth 4 (drop % board))[0 1 2 3])
          (list (take-nth 5 board) (take-nth 3 (drop-last (drop 3 board))))))
```
This is perhaps even easier to follow. There is one line for getting all the rows, one line for getting the columns, and one line for the diagonals.  

I love moments like this. I love when one simple moment of learning how to see things from a different angle completely opens up my mind to new possibilities. It's one of those moments where I feel like I immediately leveled up in my coding journey and can go forth instantly writing better code than I was writing before. 


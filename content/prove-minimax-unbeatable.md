---
layout: blog
title: Prove minimax is unbeatable - and make it snappy!
author: Alex Root-Roatch
description: Using combinatorics and memoization to prove minimax never loses - without it taking all day
date: 2024-06-17T20:48:48-6:00
updated: 2024-06-17T20:48:48-6:00
thumbnail: /img/robot-computer.jpeg
category: 
  - Clojure
---

## Writing Code for My Code

Learning how to write tests has been a big learning curve of my apprenticeship, especially since TDD forces me to be able to write a test for something before writing a single line of code. Just when I felt like it was clicking, I was given a new challenge: prove, definitively, that my minimax algorithm for Tic-Tac-Toe was unbeatable. "Unbeatable," of course, means that there is no combination of moves that will result in the AI losing. The only way to truly show that that's true is to feed every possible combination of moves into the AI and show that it never lost. 

This was taking tests to a whole new level. In order to do this, not only did I have to write code that would automatically simulate the moves of a human player and the AI's moves throughout a game, I needed to have it play thousands of games back-to-back, repeatedly, until it the AI lost or until all combinations of moves had been exhausted. It felt like having to write a whole other program for my program!

So how did I do it? 
 
## Combinatorics, Filters, and Booleans

To start, I needed to figure out every possible combination of nine possible moves, and since order matters here, we're talking permutations. Nine permute nine is nine factorial (9!), or 362,880. Thankfully, there's a library called Clojure.math.combinatorics that can be imported that provides combinatorics functions, so it was a simple matter of adding the library to my `project.clj` dependencies and typing `(combo/permutations [1 2 3 4 5 6 7 8 9])`. 

There's no way we need all of those results though. For one, the first player will never play more than five moves, so I mapped across the results of the permutations and dropped the last four numbers from each. 

Next, I could easily figure out what our AI's first move is going to be for every one of the human's first moves, so I created a function to use as a filter predicate that would remove all of these possibilities. For example, if the human plays a corner, the AI will pick the center square, so I could throw away any collections that start with one, three, seven, or nine, and also contain a five. 

At this point, there's a high likelihood of duplicates. In fact, the first time I ran this, the first 20 games were the exact same five moves. To eliminate duplicates, I simply turned the resulting collection into a set. 

After all was said and done, the number of possible games was decreased from 362,880 to 7,650. That's ~98% smaller!

Then, I had a function called `unbeatable?` that initialized a binding `lost?` with a value of `false`, fed each collection of five moves into a game play loop, and updated the value of `lost?` with `true` and exited in the event that X won any of the games. If X ever won or if it went through every single combination without losing, it returned the value `(not lost?)`. The reason for the `not` operation is so if the AI never lost, in which case `lost?` would be `false`, the return value of `unbeatable?` would be `true`. 

## Please Stand By...

Great! Now with that all written, I could write a test and prove once and for all that my minimax was unbeatable! Eagerly, I wrote: 

```
(it "wins or ties every possible game"
    (should= true (unbeatable?)))
```

Then I hit enter and glued my eyes to the terminal. 

And I saw it running, at a speed of about two games per second. At that rate, it was going to take just over an hour to run the test! 

After seeking some advice to if it was normal for this to take so long, I was educated on the magic of...

## Memoization

The main thing slowing down my test, I suspected, was the amount of recursion the minimax algorithm was doing to determine it's first move every game, as there are a lot of possibilities for minimax to evaluate before it backtracks and plays the best move. That's where memoization comes in.

Memoization is essentially caching the results of a function in relation to the inputs given to that function. So say, for example, there were multiple games where the first move played against the AI was the top left corner. All the recursion that the algorithm does to calculate that the best move after that is the center square is then cached in memory. Then, the next time the function receives that input it doesn't need to run the calculation; it simply returns the cached result.

When I memoized `find-best-move`, the parent function that calls minimax, it dropped that over-an-hour-long test down to ~16 seconds. Further memoizing the `max-move` and `min-move` portions of minimax dropped the results down yet again to a speedy ~6.5 seconds!




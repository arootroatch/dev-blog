---
layout: blog
title: Scaling Up Tic-Tac-Toe
author: Alex Root-Roatch
description: Adding an option for a 4x4 board proved easier than I thought - but requires optimizing mini-max
date: 2024-06-22T10:53:27-6:00
updated: 2024-06-22T10:53:27-6:00
thumbnail: /img/ttt-minmax.png
category: Uncategorized
---

## Great - Now Make It Bigger

One of my stories for this week was to add a 4x4 option to my tic-tac-toe, which sounded intimidating at first. I was thinking I was going to need to update my scoring function, my mini-max's evaluate function, and the print board function. However, thanks to multimethods, it was surprisingly easy to add new features while keeping the code manageable.  

## Scoring and Evaluating the Board

Adding the ability to score and evaluate a 4x4 board sounded like one of the larger tasks involved for this story. Once I started looking at my code, though, I realized that both my `score-board` functions and `eval-board` functions were using my `->paths` function. The game board itself was stored as a vector of nine elements, so that `->paths` functions was taking that vector and turning it into a list of eight sub-lists, one for each way to get three in a row. Therefore, making this function able to also handle a 4x4 board would make both the score function and mini-max's evaluation function be able to handle the bigger board. 

I started off by converting the `->paths` function to a multimethod and making sure everything still worked before adding the new functionality. To do that, I created a `defmulti` called `->paths` that dispatched based on the count of the board. Since the `->paths` function only took one argument, which was the board, having the `defmulti` count the board vector and dispatch based on that meant I didn't need to change any code where `->paths` was being called. 

Then, I created a `defmulti` that dispatches off the value `9` and put all the code from the original `->paths` function there, and then I deleted the original `->paths` functions. After making sure all my tests still passed, I then added a `defmulti` that dispatched off a value of `16` and split the 16-element vector of a 4x4 board into the 10 possible ways to get four in a row. 

## Printing the Board

The process for being able to print the 4x4 board was almost identical. I converted the pre-existing `print-board` function to a multimethod that dispatches off a value of `9` and another one that dispatches off a value of `16`. Now the `print-board` function could handle 3x3 or 4x4 without needing to change any code that calls the function. 

## Mini-max Has a Lot More to Think About

And just like that, after updating `main` to ask the user to select what size board they want, my tic-tac-toe could handle 4x4. However, any moves toward the beginning of the game takes mini-max a *very* long time to calculate due to the exponential increase in the game tree. My next adventure will be learning how to implement *alpha-beta pruning* to limit the amount of branches in the game tree mini-max traverses before making a decision.
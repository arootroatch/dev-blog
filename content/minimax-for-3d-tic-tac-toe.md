---
layout: blog
title: Minimax for 3D Tic-Tac-Toe
author: Alex Root-Roatch
description: Getting minimax to not be unusably slow on a 3D board required a variety of tweaks
date: 2024-07-03T20:06:35-6:00
updated: 2024-07-03T20:06:35-6:00
thumbnail: /img/3d-ttt.webp
category: Algorithms
---

## 3D Tic-Tac-Toe

One of my tasks for this week was to implement a 3x3x3 tic-tac-toe board that minimax can still play on. In my [previous post](https://arootroatch-blog.vercel.app/optimizing-minimax) about implementing a 4x4 board, I talked about implementing alpha beta pruning, limiting the depth of the search, and using conditionals for moves that didn't require minimax in order to speed things up. With 27 possible moves to make now, the possibilities were so large that these optimizations were still not enough. It was taking over an hour for it to pick a move on it's first turn when playing as player 2 (O).

To remedy this, I did a combination of three things: add conditionals for winning and blocking, limit the amount of moves minimax was evaluating, and saving board states in transposition tables. 

## More Conditionals

I've mentioned how, for the 4x4 board, I implemented a conditional to play the first available move if the amount of available moves was above a certain number, because that's what the minimax algorithm was doing anyway but just taking longer to do. That same logic doesn't work with a 3D board, though, due to all the overlapping ways to win. However, it's still possible for there to be a winner after only five moves, just like on a 2D 3x3 board. Should that be the case, that's 23 moves minimax still needs to evaluate in order to choose that winning move. 

It's easy to check to see if the next move can be a winning move without using minimax, though. In fact, my "medium" difficulty AI was already doing this by checking all the possible winning paths and then filtering them down to ones that had two of a given token (X or O) and one number (an available move) left in them. By importing that function as a conditional check, I was able to make the computer instantly play a winning move if one was available without using minimax. 

Using this same function but checking for the opponent's token would let the computer know if the opponent was one move away from winning and would thus be able to block the opponent from winning instantly.

## Limiting the Scope of the Search

Early on in the game, it might not make sense to evaluate every possible move, but instead only evaluate the moves that are on winning paths that are still available for the computer, that is, they don't contain the opponent's token. In addition to ignoring paths that have the opponent's token in them, we can also focus in only on paths that already contain the computer's token. 

Taking it one step further, we can look to see if there are any move that could bring victory to both X or O. For example, if X has a token on square 1, one of X's available paths is [1 4 7], or the left column. If Y has a token on square three, one of Y's available paths is [3 5 7], or the top-right to bottom-left diagonal. Both of these paths have 7 in common, so playing a 7 for either player will get that player closer to winning while also making sure to take a possibility away from their opponent. 

I ended up using a combination of these approaches. If there were more than three overlapping moves, it evaluates the overlapping moves to find the best one. If there aren't that many overlapping moves, minimax will evaluate only the moves along paths that already have the computer's token on them. If for some reason there are none, it will evaluate only the moves along paths that have the opponent's token on them. Once the total available moves on the board reach a more manageable number, the algorithm evaluates all of them as per usual.

## Transposition Tables

A transposition table is essentially a stored board state and its resulting evaluation. This allows the computer to quickly look to see if the current board state is one that it's seen before, and if so, play the move that has already been evaluated as the best move in that situation. This is great because it only has to evaluate a certain board state once, and then it will instantly know what move to make after that without using minimax. 

While I was testing, I manually saved any board states that required minimax evaluation to a map where that board state was the key and the resulting move was the value. Then I made sure to invert the Xs and Os so that same board state would be evaluated the same way if the player roles were reversed. Then I added a line in my algorithm that checks if the table contains the current board state before launching into a minimax search. 

The downside to this approach, though, is that it has to be manually coded and that these scenarios aren't automatically saved to the database table. I would like to come back to this in the future and figure out how to implement some automated file persistence that will log every time minimax evaluates a move and save the resulting evaluation for future games. Doing so would make the game get faster and faster the more that it's played without ever needing to alter the code to add more board states to the database. 


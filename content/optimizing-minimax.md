---
layout: blog
title: Optimizing Minimax
author: Alex Root-Roatch
description: Making Tic-Tac-Toe 4x4 slowed minimax to a crawl. Here's how I sped it up.
date: 2024-06-25T08:04:44-6:00
updated: 2024-06-25T08:04:44-6:00
thumbnail: /img/ttt-minmax.png
category: 
  - Algorithms
---

## Holy Recursion, Batman!

The first time I let minimax pick the first move on the 4x4 tic-tac-toe board, it took so long to decide that I thought something was broken. I'm talking over 10 minutes to decided one move! How could going from 3x3 to 4x4 take such a big performance hit? 

There are nine squares on a 3x3 board, and since minimax plays as both player one and player two to explore every possible move that could be made, that's nine permutations of nine, which is the same as nine factorial, or 362,880. That's a lot, but our modern CPUs can handle it without the user feeling like the software performs poorly.  

While a 4x4 board doesn't sound like a big jump, that brings us up to 16 squares, which brings are possibilities up to 16 factorial, or 20,922,789,888,000. That's a *gigantic* jump! 

I was able to speed this up to deliver a snappy user experience again with three strategies: alpha-beta pruning, limiting the depth, and explicitly coding the decisions minimax would make for its first moves without actually calling minimax.

## Alpha-Beta Pruning

Alpha-beta pruning is an optimization for minimax that essentially short-circuits the search procedure if it's obvious that the current branch in the game tree is worse than one that's already been searched. For example, if we explore the branches of one move and get a win for the maximizing player, and then start exploring a branch for the next move and immediately get a win for the minimizing player, the algorithm won't explore any of the other branches for that move because it is apparent that the first move is better. Instead, it will exit early from that loop and move on the next available move, exiting early when possible, until it has considered each move. 

There are a few drawbacks to this technique. For one, if each move played is at least as good as or better than the previous move, the algorithm will still search the entire game tree with no optimization. On a 4x4 board, all moves at the beginning of the game have an inconsequential effect on the outcome of the game, with the game ending in a tie at the end of every game tree. Remember, minimax assumes that both players will play optimally. Secondly, the algorithm still needs to reach a terminal state in order to evaluate the outcome of a move, so even if it were to only examine one branch of the game tree, that's still an immense amount of options on an empty 4x4 board. 15 factorial, or 1,307,674,368,000, to be exact. 

On the 3x3 board, alpha-beta pruning was able to drop the time of some of tests by almost half, so there was an obvious performance gain, but only once the game was far enough in for some moves to be objectively better than others. It made the part of the game that wasn't really slow to begin with faster, but it didn't speed up the slowest parts.  

## Limiting the Depth

The next technique I tried was limiting the depth of the search. I was already tracking the depth of the search in order to adjust the evaluation for each terminal state (i.e. a faster win should get a better score than a slower one), so I simply added a conditional to minimax. Now, in addition to checking if the game was in a terminal state to stop recursion, it also checks that the depth is not greater than a specified limit. If there is no winner yet within that specified depth, it will evaluate as zero. 

The tricky part was picking what number to use for that depth. It needs to be deep enough to ensure a terminal state will be reached, otherwise all moves will be evaluated as zero and the algorithm will simply pick the first available move. Thanks to my tests for the 3x3 board, I quickly discovered that a limit of four kept all my tests passing, but anything lower than that broke my test for "chooses center square if first move is a corner". 

That limit of four on a 4x4 board made a huge performance improvement, but now the minimax seemed to pretty obviously just be picking the first available move since it wasn't enough depth to reach a terminal state. Was it possible that minimax, without the depth limit, was still simply picking the first available move? In order to make sure the depth limit wasn't changing the outcome of minimax's decisions, I wrote a series of tests to find minimax's response to all possible first moves in the game. No matter what the first move was, minimax always chose the first available square. Then, I wrote tests to include minimax's decision and find the third move of the game, then the fourth move, and no matter what, minimax always picked the first available square when there wasn't a depth limit. 

The test that surprised me the most was that minimax, without a depth and no matter whether it was X or O, choose the third square every time on this board:

<div>-O O -3 -X</div>
<div>-5 -6 -7 -8</div>
<div>-X 10 11 -X</div>
<div>13 14 15 16</div>

That didn't make sense to me. Why would it play an O on the third square when that path obviously won't lead to a win or even block X from winning? And why would it play an X on the third square when playing the eighth square would be one move away from a win? The only explanation is that, when both players play optimally, all available moves on this board result in a tie, so even though the third square seems like a very non-strategic move, the computer knows that it's not any worse than any other move, even moves that, to us, look like better moves. 

>NOTE: This one test, even with being down to only 11 moves to choose from, takes 17.24461 seconds to run without a depth limit. With a depth limit of four, it takes 2.25135. Both times include alpha-beta-pruning. 

## Minimax, We'll Take It from Here

Since I now knew that all minimax will do for the first few moves of the game is pick the first available move, I could simply write code to do just that without needing to do all the processing of minimax. However, I needed to be careful not to do this for too many turns, or I'd end up not using minimax when I should be. For example, in the above example we saw that, with 11 available moves on the board, minimax still picks the first available. However, if the X on the ninth square would have been on the eighth square, minimax surely would have blocked the win by playing the 16th square. But with only four moves played to the board instead of five, there's no clear winner in any scenario in order for any of the moves lead to a win for either player. Therefore, 12 available moves on the board is the sweet spot.  

Implementing this was easy. Since both on a 3x3 board and a 4x4 board minimax would choose the top left if the board was completely empty, I added a conditional check in my `find-best-move` function that would return 1 if the board was empty, regardless of board size. This way, the 3x3 board got a little boost in performance as well. Then I added a check for if the count of available move was >= 12 to simply return the first available move. This check won't effect the 3x3 game play at all, since on a 3x3 board it will always be false. If neither of those conditions are true, then I let minimax kick in, using alpha-beta pruning and a limited depth. 

## Proving It Works

Previously, I had written a test the played every possible combination of moves against minimax on a 3x3 board. I was happy to find that this test was still passing, proving that no functionality was affected for 3x3 and that it was still completely unbeatable. For 4x4, however, the total possible permutations of moves was simply too high to calculate in order to run this same test. However, minimax always picking the best move means that two minimaxes playing against either should always result in a tie. To that end, I wrote a test that played 1000 minimax vs minimax games on both size boards and indeed, it always ties. 

### Benchmarks

#### 4x4
- Without the conditional substitutions but keeping the depth limit and alpha-beta pruning, just one minimax vs minimax game takes 38.34811 seconds. 
- Adding in conditionals, 1000 minimax vs minimax games takes 3.79463 seconds. 

#### 3x3
- Without any optimizations, 1000 minimax vs minimax games take 2.10477 seconds. 
- With alpha-beta pruning, 1000 minimax vs minimax games complete in 1.79131 seconds. 
- Adding in the depth limit, these 1000 games take 0.61599 seconds. 
- Adding in conditionals, 1000 minimax vs minimax games take 0.41371 seconds. 


- Without conditionals or depth limits, 7650 games featuring unique combinations of moves against minimax complete in 4.29160 seconds. 
- With conditionals and depth limits, those 7650 games take 3.64228 seconds. 

## Conclusion

My biggest takeaway from this is how small performance increases on a small scale make a huge difference on a large scale. It didn't seem like any optimizations were necessary for 3x3, but then for 4x4 I needed alpha-beta pruning and a depth limit just to get one game to complete in a staggeringly long 38.34811 seconds. It wasn't until adding in conditionals that I really got it working quickly, and even then, the time it takes to complete 1000 minimax vs minimax games on a 4x4 board is roughly equal to the time it takes to complete *25,000* 3x3 minimax vs minimax games (with optimizations). 

Regarding playing the first available move on the 4x4 board: I actually quite enjoy how it gives the impression the computer is doing something illogical. It gives the user the impression at first that the AI isn't really that smart, only to then beat the user at every possible try. It reminds me of moments when really intelligent people can see simple solutions through apparent complexities. To us, it appears the choices the AI is making are stupid and thoughtless, when really the AI knows that it doesn't matter at all what move it plays until there are less than 12 available moves on the board.



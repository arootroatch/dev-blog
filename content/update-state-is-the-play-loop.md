---
layout: blog
title: update-state IS the Play Loop
author: Alex Root-Roatch
description: I was way overthinking how to integrate my tic-tac-toe AI into Quil
date: 2024-07-09T14:58:13-6:00
updated: 2024-07-09T14:58:13-6:00
thumbnail: /img/TTT-minmax.png
category: Clojure
---

## Triggering the AI

Yesterday I had gotten the GUI implementation up and running with human vs human games. This was pretty simple since Quil simply needed to continually draw the board to the screen, and the `handle-click` function updated the board and switched tokens if the user clicked on an available square. But when it came to getting the AI to play, I was stumped. What was going to trigger the AI to play its move? 

If I implemented a play loop similar to the terminal UI, that posed another problem &mdash; there was no way to make the loop stop and wait the user to click an available move when it was the user's turn.

Another thought that I had was that I could have the AI be called by the human taking their turn, playing the move to the board and then calling the AI. However, this felt messy, and it definitely violated Single Responsibility. Besides, how would that work if the AI goes first? Would I create a button for the user to press in order to trigger the AI?

## The Draw-Update Loop

Quil automatically loops between `draw-state` and `update-state` at the same interval as whatever the frame-rate is set to in order to create animations. In human vs human, it's merely sitting there redrawing the screen 30 times per second. Was it possible to have `update-state` trigger the AI function? What if minimax took half a second to respond; would it get called 15 times? 

In short, yes, it absolutely was possible and no, it didn't make minimax take 15 turns in a row. All I needed to do was add a state boolean to track if it was the human's turn or not, which I called `human?`. This was toggled to `false` after the human took their turn. In `update-state`, if `human?` was false while the game was `:in-progress`, it called the AI as the result of updating the board in state. For example:

```
(cond
  (and (= :in-progress game-state) 
       (not human?)) (assoc state :board (ai-turn state)))
```

After a few hours struggling, all I really needed was one conditional and a boolean. 

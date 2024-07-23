---
layout: blog
title: Strange Bugs in Quil
author: Alex Root-Roatch
description: Dealing with overlapping screens and persistent mouse clicks
date: 2024-07-08T22:12:17-6:00
updated: 2024-07-08T22:12:17-6:00
thumbnail: /img/ttt-minmax.png
category: 
  - Clojure
---

## Overlapping Screens

Today was filled with many Quil adventures and misadventures while developing a GUI for my tic-tac-toe application. One of those misadventures was a problem where Quil was not clearing the previous screen after switching to the next screen, causing them to stack. 

Thankfully this was an easy fix: I simply needed to reset the background of the canvas when changing screens. I organized my screens the same way that I would write React functional components, so all the code to draw each screen was contained in a function named after the screen, such as `board-selection-screen`. Therefore, adding `(q/background 0 0 0)` as the first line of every screen solved this problem.

## Persistent Mouse Input

Another strange issue today was an issue where mouse input would click multiple buttons. For example, the "Human vs Human" button on the mode selection screen is in the same position of the screen as the button to select a 3x3 board on the board selection screen, which is the screen that immediately follows that mode selection screen. The `q/mouse-pressed?` function would sometimes continue to register `true` after the screen updates, causing the 3x3 board to be selected after clicking the "Human vs Human" button. This happened so quickly it appeared as though the board selection screen was being skipped altogether. 

Michael Whatcott wrote a good explanation of this phenomenon and shared a creative solution in [this blog post](https://michaelwhatcott.com/when-the-going-gets-gui/). He implemented a custom click handling function to check if the input from `q/mouse-pressed?` was trustworthy. However, Quil gives us a simpler solution: `:mouse-clicked`.

## `:mouse-clicked`

I did not find the Quil documentation to be very good at explaining how to use this other than to add it to `defsketch` and that it is called whenever a mouse button is pressed and released. It's the "*and released*" part that's the important bit &mdash; `mouse-pressed?` merely detects when a mouse button has been pressed without waiting for the user to release it. `:mouse-clicked` waits for the click to complete before doing anything. 

But what does it actually do? It returns the current state of the sketch as a map as well as a map containing the mouse coordinates and which mouse button was clicked. It requires a function be assigned to it in `defsketch` to pass these two maps into and actually do something with. I chose to make this function a multimethod called `handle-click` that dispatched based on the `:current-screen`. Then for each screen, I check to see if the coordinates of the mouse when it was clicked overlap with any of the buttons on the screen and execute the desired code for that button. 

## `mouse-over?`

Checking if the coordinates of the mouse overlapped with one of the buttons was done with a helper function that I wrote called `mouse-over?`. This function takes the coordinates, width, and height of the button in question as well as the mouse coordinates. If the mouse's X value is greater than the left edge and less than the right edge, and the mouse's Y value is greater than the top edge and less than the bottom edge, the function returns `true`. This function was extremely useful and was used on every screen and every button in each of the tic-tac-toe grids, both for registering clicks and for changing the color of things when the mouse was hovering over them.



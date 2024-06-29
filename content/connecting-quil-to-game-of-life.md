---
layout: blog
title: Connecting Quil to Game of Life
author: Alex Root-Roatch
description: My first time creating a GUI  that doesn't use HTML and CSS
date: 2024-06-29T08:45:32-6:00
updated: 2024-06-29T08:45:32-6:00
thumbnail: /img/Game_of_life_glider_gun.svg
category: Clojure
---

## Centering a Square

After writing the backend logic for Conway's Game of Life, it was time to add a graphical frontend using Quil, which is a GUI wrapper built on Clojure and based on Processor for Java. Any frontend I had done up to this point was using HTML and CSS, either making static webpages or React applications, so this was definitely a learning curve. 

Since I needed to make a grid, I decided to start with one square. In Quil, the coordinates start in the top left corner, so [0 0] puts the square in the top left of the window. However, the coordinates in my game of life considered [0 0] to be the center, with negative values going left and up and positive values going right and down. To adjust for this, I calculated the center of the window (which I set to being a 800x800 square) and added that to the X and Y values for the cell. 

That got it *almost* centered, but there was one little snag: by default, Quil positions squares starting from their top left corner, so now the top left corner of the square was in the center of the window instead of the center of the square. An easy fix though: adding one line to our setup config, `(rect-mode :center)`, makes Quil position the square based on it's center instead.

## Coloring the Square

Next, I needed to be able to check if the square of the grid should be black or colored based on if it was alive or dead. Since the grid being passed in and returned from my `evolve` function is a set of only live cells, I simply needed to check if the cell in question existed in the set of live cells and set the color accordingly. 

## Adjusting for Cell Size

Each XY coordinate pair in the set incremented or decremented by one at a time, but I set the cell size to 50 pixels, so [-1 0] needed to be 50 pixels to the left. Therefore, each XY coordinate, in addition to adding half of the window size to it, also needed to be multiplied by the cell size. 

## Making the Full Grid

Now, with all the code from above in one nice `create-square` function, it was time to make the full grid. I imported the `get-neighbors-of` function from the back-end code to map across each live cell, get its neighbors, and concatenate it all into one set that included all live and dead cells. Then, I used `run!` to map across this full grid using the `create-square` function. 

## Making the Animation

Quil creates animation frames by using two functions: `draw-state` and `update-state`. Without `update-state`, it will simply draw a static image. The code for making the full grid was put in `draw-state` to create that initial animation frame. Since the `evolve` function from the backend code creates the next generation of the grid, all I needed to do is use that function in `update-state` for Quil to draw the next animation frame. 

And voilá! Now I have a GUI to display my code for Conway's Game of Life. 

![Game of Life Quil Animation](/img/game-of-life.gif)
 

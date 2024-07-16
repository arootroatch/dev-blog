---
layout: blog
title: Single Responsibility in Screen Functions
author: Alex Root-Roatch
description: Fixing a Single Responsibility violation in my Quil screen functions for my tic-tac-toe app
date: 2024-07-15T19:33:07-6:00
updated: 2024-07-15T19:33:07-6:00
thumbnail: /img/ttt-minmax.png
category: Clojure
---

## Screen-Drawing Functions

My tic-tac-toe app has a series of screens prompting the user to select different game options before reaching the actual play screen. I had made each screen into its own function inside its own namespace along with any other functions needed for that screen. This was an approach that I feel was very heavily influenced by background with React, as I was essentially treating each screen like a React functional component. 

In my Quil sketch state, I have a `:current-screen` key that the `draw-state` and `update-state` function reference for rendering the GUI. I was setting the value of this key to the function for each screen, such as `(board-selection-screen)`. This worked for rendering the screens, but it didn't actually set the value of `:current-screen` to `:board-selection`, because the function itself didn't have any return value; it only rendered things to the GUI. 

To remedy this, the quick fix was to simply add a return value to the end of each function that corresponded to which screen it drew, such as `:board-selection`. That way, the function rendered the screen and set the value of the `:current-screen` key in state. 

Hold up. Did you catch that? The word "and" when describing what the function was doing? That can only mean one thing: a violation of the Single Responsibility Principle.

## Consequences of Violating SRP

Sometimes violating a SOLID principle doesn't seem like it has much impact on an application. Sure, maybe I could make a certain module more Open/Closed, but it's not affecting the software if that's not a feature that needs to be extensible. This SRP violation, on the other hand, did make life harder for myself. 

For one, any module that needed the ability to update the value of `:current-screen` needed to import the whole draw-screen function from the corresponding module. For example, if the `play-screen` function needed to set `:current-screen` to `:mode-selection` because the user had decided to play the game again (which requires a reset to initial state), the module for `play-screen` now had a dependency on the module for `mode-selection-screen` simply to set the value `:mode-selection`. Not only is this superfluous, it occasionally caused cyclic dependency problems due to data not flowing in one direction to `main`.

Secondly, it made testing unnecessarily difficult. You see, if the Quil functions aren't stubbed out, a test that invokes them causes an error of "cannot read field 'g' because the return type of invoke is null". The act of simply testing if `:current-screen` was set to `:board-selection`, as a result, was convoluted with a lot of stubbing just to get the test working. 

## Fixing It with Multimethods

To remedy this, I had the click handlers set the value of `:current-screen` appropriately when the user selected their options, and then changed `update-state` to be a multimethod that dispatched off the value of `:current-screen`. Each screen selection function was then called in the appropriate `defmethod`, which returns the corresponding state. 

This not only made my tests much cleaner and cleaned up the data flow of the application, but it had the added benefit of abstracting `update-state` completely from `main`, creating a boundary for `main` to act as a plugin to the application, also known as the Dependency Inversion Principle. This, in turn, did away with a gross block of conditionals that determined which screen to update to. 

## Takeaways

If I ever find myself dealing with cyclic dependencies, superfluous importing, difficult testing, or large blocks of conditional checking, there's a very good chance that there's a better way to achieve my desired outcome. These symptoms should act as a signal that I should start looking for opportunities to refactor. 







---
layout: blog
title: Test All Possibilities
author: Alex Root-Roatch
description: In order to avoid bugs, it's imperative to write tests for all combinations.
date: 2024-08-03T17:11:59-6:00
updated: 2024-08-03T17:11:59-6:00
thumbnail: /img/robot-computer.jpeg
category: [ Clean Code Practices, Workflows ]
---

## Unpleasant Surprises

Test Driven Development is often talked about as a surefire way to avoid bugs, but that depends on the quality of the
tests that are written. Recently, I ran into multiple bugs in my own programming while demoing it &mdash; even though
all my tests were
passing &mdash; due to not being thorough enough in the tests that I had written.

## SQL Errors

One of the bugs I had was related to logging the winning state of a tic-tac-toe game to Postgres. My `score` function
set the terminal game state to three possible options:

- "X wins!"
- "O wins!'
- "It's a tie!"

When a game reaches a terminal state, the `game_state` column of the corresponding `id` in Postgres is updated
accordingly. I had written a test checking that it was properly logging "O wins!" to Postgres and thought that was
sufficient.

However, SQL only uses single quotes for strings instead of double quotes. That means that when a tie game happens and
this command runs:

```
UPDATE games SET game_state = 'It's a tie!' WHERE id = 10;
```

The apostrophe in "it's" causes SQL to think the string is over, causing a syntax error and preventing the database from
being updated. To fix this, I changed the `score` function to return "It is a tie!".

Simply writing tests for all possible values returning from the `score` function would have caught this bug in
development rather than finding it during a demo.

## From Terminal to GUI

Another bug that was discovered was related to starting a game in the terminal and the resuming it in the GUI. When the
game starts, it checks to see if the last game was incomplete and asks the user to resume. If the user chooses to resume
the game, all the game data is loaded from the database.

When resuming a game that was started in the GUI, the `current_screen` is set to `:play`. When resuming a game that was
started in the terminal though, there is no data in the `current_screen` column, because there's no screen to keep track
of in a terminal UI. This leads to the GUI crashing, simply showing a black screen due to not knowing what screen it
should be showing.

I had written a test to check that the game state was being updated to the state loaded in from the database, but the
test only used a game log from a GUI game. I hadn't thought about the inconsistencies between a terminal game log and a
GUI game log and that it could cause problems when crossing between user interfaces. The simple fix is to explicitly
set `current-screen` to `:play` when loading in the game state. Had I written a test for the GUI using a game log from a
terminal game, the problem would have been easily spotted and fixed before getting a black screen in the middle of a
demo.

## Incrementing the Game ID

The last surprise bug in TTT was caused by the "Play Again?" option at the end of a GUI game.

At the beginning of each game, the program calculates a new game ID by getting the last game ID from the database.
However, that setup step doesn't re-execute when clicking the "Play Again?" button. Instead, the program resets the game
state to an initial, pre-game state.

I had not thought about how the "Play Again?" function should also increment the game ID. This led to a duplicated game
IDs in the database. I only noticed this when querying all the game IDs a seeing the duplicates come back.

## Conclusion

TDD is only as good as the tests that are written. In order to avoid bugs, it's imperative to think about all the
details, use cases, and return values in an application and write tests to cover all of them. It's always possible for
all tests to be passing and still have bugs, because a test can't fail if it was never written. 

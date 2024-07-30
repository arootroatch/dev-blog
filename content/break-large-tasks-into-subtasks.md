---
layout: blog
title: Break Large Tasks into Subtasks
author: Alex Root-Roatch
description: When the big picture feels too big, sometimes I don't know where to start
date: 2024-07-29T20:47:05-6:00
updated: 2024-07-29T20:47:05-6:00
thumbnail: /img/overwhelm.jpg
category: Workflows
---

## Where Do I Even Begin?

Sometimes, a task can feel so large or so multi-faceted that I can't even get started. That was definitely the story for
me this week with connecting my tic-tac-toe to PostgreSQL. I needed to log all games, ask the user to resume their last
games if it is unfinished, and replay games by entering the game ID. This needed to work for both the terminal UI and
the GUI, and the previous feature of logging game to EDN files needed to remain an option as well.

To help it feel more manageable, I broke it down into sub-tasks:

- Install PostgreSQL and create `ttt` database
- Create table(s) in database
- Import JDBC as a Leiningen dependency
- TUI
    - Log games as they are played
    - Resume last game if abandoned
    - Replay games from SQL
- GUI
    - Log games as they are played
    - Resume last game if abandoned
    - Replay games from SQL
- Update `launch-user-interface` multimethod dispatch to account for the newly required terminal arguments
  to `lein run`.

While this may make it seem bigger at first (after all, one task is now 10 tasks), this allowed me to focus in on one
particular aspect of this story and ignore the other aspects until I get to them, preventing the analysis paralysis of
trying to figure out how to eat an elephant.

This wasn't the set-in-stone way that I went about it tackling this, either. After importing JDBC, I decided to focus
just on writing all the functions for the different database interactions I was going to need before focusing on
implementing anything in either user interface. The `launch-user-interface` dispatch function was tweaked while I worked
on adding the database functions to the user interfaces.

## Refactor After Writing Code

Another thing that kept giving me that writer's block feeling was trying to refactor too much as I was coding. When
needing to add the PostgreSQL functions to spots where there were already EDN functions, I kept trying to figure out how
I wanted to code it for it to be clean. Should I go back and refactor all those EDN functions to be part of a
multimethod? What are all the different ways I could pass down the arguments entered into the terminal to `lein run`? I
found myself sitting there, staring at my computer screen, "strategizing," and not any closer to getting it implemented.

Much like writing an essay or a story, code is much each to edit once it actually exists on the page. Perhaps that's one
reason why one of the rules of TDD is "write the smallest amount of code needed to pass the test" and *then* refactor.
Get it working. Who cares if I write a few case statements in helper functions to select between SQL and EDN? It's much
more enjoyable to refactor and tidy up code that already does the thing I want it to do, because it's the feeling of
taking something good and making it even better. Refactoring too soon can feel like heavy, overwhelming, preliminary
work that stops me from feeling like I've actually accomplished something.



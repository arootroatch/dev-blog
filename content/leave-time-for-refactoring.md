---
layout: blog
title: Leave Time for Refactoring!
author: Alex Root-Roatch
description: Implementing new features might not take very long, but what about making the code clean?
date: 2024-06-20T21:24:49-6:00
updated: 2024-06-20T21:24:49-6:00
thumbnail: /img/editing.png
category: 
  - Uncategorized
---

## More Tic-Tac-Toe Features

Today and yesterday I added different game modes to my tic-tac-toe in Clojure, allowing the user to choose from four different options: 
- Human vs Human (shared keyboard)
- Human vs Computer
- Computer vs Human
- Computer vs Computer

Any options featuring a computer player also provided the option to choose the skill level of the computer player: easy, medium, or unbeatable (mini-max). The Computer vs Computer option allows for choosing AI skill levels for each of two computer players, so you could have nine possible different combinations of Computer vs Computer games.

## Quick Progress

At first, I was intimidated by this story because it seemed like a lot to add. When I actually sat down and started writing the code, however, I realized the feature additions themselves really weren't too challenging. It felt great to get into a groove where I really felt like I knew what I was doing and had the project under control. I would code for an hour, get a feature working, take a break, code for another two hours, get another feature working, and take another break. Even weird little hiccups weren't bothering me but were instead fun little riddles to solve, like realizing my mini-max algorithm only knew how to be player two. 

Soon I started worrying that I had grossly overestimated this story. Then I started refactoring.

## Coding like a Writer

Writing code is very similar to writing stories, essays, or articles in that the first draft is almost never the final draft, and the larger the project, the more editing it usually takes. Sometimes the first draft is merely getting all of my thoughts on paper so that I could stand back and see how they needed to be shaped, like a potter getting the clay on the potter's wheel and then discovering what shape they want to mold it into. 

With coding, "Hey it works!" is not how to determine that a feature is done. Just like writing a novel, that code shouldn't ship unless it's been proofread and refactored for cleanliness, readability, performance, and adherence to design systems and principles like SOLID. Once I started refactoring my code, I quickly realized I was going to spend just as much time, if not more, refactoring the code as I had spent writing it. 

It wasn't that I had written too much code or even that I had written bad code, but just that it could be better. Conditionals could be replaced with multimethods in order to make the code more extensible and invert dependencies. Some files were starting to get a little long and could be separated out into multiple files and then grouped together as a package. Some lines of code inside longer functions could be extracted out into helper functions. All of these things make the code easier to understand, easier to maintain, and easier to extend.   

## TDD Is My New Best Friend

Of course, in all this refactoring, things broke along the way. For example, after moving code into new files and moving existing files into new packages, namespaces that depended on those files didn't work anymore without updating the `require` statements to point to the new locations. 

There was no fear of breaking things though, even though I was doing a significant refactor, because I had tests for everything. These tests told me immediately when I had broken something and when I had gotten it working again. If all my tests passed, I knew everything was working! If I ran the game and found and error, that simply highlighted a blind spot in my tests, and I immediately added to my tests in the appropriate location to catch that bug in the future.

## Wrapping Up

Just like I wouldn't plan to throw some words on a page, call it an essay, and hand it in to my professor without proofreading it first, saying a feature of my code is done simply because it works &mdash; without having refactored it &mdash; is equally irresponsible. It's important to account for the time it takes to ensure *quality* code, accounting for refactoring as part of the estimate. Finishing sooner than I thought really just means I have an opportunity to make sure my code is as good as it can be.


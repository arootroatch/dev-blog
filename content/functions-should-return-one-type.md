---
layout: blog
title: Functions Should Return One Type!
author: Alex Root-Roatch
description: Dynamically-type doesn't mean we shouldn't have good type discipline
date: 2024-08-30T20:18:13-6:00
updated: 2024-08-30T20:18:13-6:00
thumbnail: /img/clojure-banner.png
category: [ Clojure ]
---

## Dealing with Inconsistencies

A few weeks ago, while connecting my tic-tac-toe to a PostgreSQL database, I ran into a problem with how I had written my `score` function. You see, if the game was over, it would return one of three strings: "X wins!", "O wins!", or "It's a tie!". If the game was not over, it would return `:in-progress`, a keyword, meaning this function has two return types. 

PostgreSQL, on the other hand, is statically-typed. This didn't cause a problem when writing data into the database, but it did make it more complicated when reading data from the database, as anything from the "game_state" column was going to come back as a string. This meant I now needed to check the value in order to see if it needed to be parsed into a keyword for it to work with the rest of the application. 

Of course, my tests highlighted the issue before it became a bug, and it was only two lines of code to deal with the issue, but it's complexity that could have been avoided if I had written the function in a way that allowed me to rely on the return type. 

## Leveraging Dynamic Typing

There are a few instances where dynamic typing can be useful. For example, in a function that sums two numbers together, it's very convenient for that one small function with a single return to be able to handle ints, longs, floats, and doubles. 

## Main Takeaway

While Clojure's dynamic typing does not force us to one return type for a function, type consistency in return values is still good to be disciplined about to avoid unnecessary complexity. We should leverage dynamic typing very intentionally when it can be useful, and we should be careful not to abuse dynamic typing and let our codebase turn into a wild west of functions with unreliable return types. 


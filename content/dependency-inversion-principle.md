---
layout: blog
title: The Dependency Inversion Principle
author: Alex Root-Roatch
description: The fifth and final part of SOLID Design Principles
date: 2024-06-18T19:39:47-6:00
updated: 2024-06-18T19:39:47-6:00
thumbnail: /img/solid.png
category: 
  - Clean Code Practices
---

## What is the Dependency Inversion Principle?

The Dependency Inversion Principle (DIP) states that high-level policy should not depend on low-level detail; low-level detail should depend on high-level policy.

For example, take the relationship between my operating system and my keyboard. The operating system is the high-level policy, and what type of keyboard I'm using is low-level detail. My operating system couldn't care less what kind of keyboard I'm using. I can switch between my USB keyboard and my laptop keyboard, and even plug in different brands of keyboard, and my operating system will still receive its input. I may need to specify a different keyboard layout or install a driver in order for any special buttons on the keyboard to be recognized properly, but that is the dependency that the keyboard has on the driver, not the operating system on the keyboard.

In terms of code, we specifically want to avoid *compile-time dependencies*. A compile-time dependency happens when a name si defined in one module but appears in another, creating a dependency on the defining module. This causes a wave of recompilation as the compiler backtracks to recompile the defining modules that the edited module depends on.  

## Structured Design

Structured Design is a method of software development that was popular in the 1970s and 1980s. It breaks down complex systems into more manageable parts but identifying the main functions and gradually breaking them down. 

When this approach is used, the end result is high-level functions like `main` calling by name all the lower subroutines, and those to their lower subroutines, all the way down the tree. Every module has a compile-time dependency on the modules below them. This is what happens the dependencies follow the flow of control. In order to not have compile-time dependencies, we need our dependencies to *oppose* the flow of control. This is why the principle is called Dependency *Inversion*. 

## Real Code

Let's look at a tic-tac-toe example of compile-time dependency.

```
(defn- dispatch-player [level board player]
  (if (= player :x)
    (play-user-turn board player)
    (play-bot-turn level board player)))

(defn -main []
  (let [level (prompt-user-for-level)]
    (loop [board initial-board
           player player-sequence]
      (print-board board)
      (if (not= (score board) :in-progress)
        (println (score board))
        (recur (dispatch-player level board (first player)) (rest player))))))
```

Here, we see `-main` calling `play-user-turn` and `play-bot-turn` inside of `dispatch-player`. Both the bot and user turn functions are from their own namespaces. If I make any changes to `-main`, that will cause both of those other namespaces to be recompiled since `-main` has a dependency on them, even though neither of those namespaces were changed. If those namespaces have any compile-time dependencies on other modules, this one change to `-main` will force those to be recompiled, too! If we have no abstractions at all, our entire program will need to be recompiled.

## Establishing Healthy Boundaries

In order to avoid our entire program being recompiled, we need to make `-main` ignorant of this low-level detail it currently knows too much about. Ideally, the caller (`-main`) has no idea what it is calling. In Java, we might do this by implementing interfaces. This creates a boundary between `-main` and the rest of the application, allowing `-main` to act as a plug-in to our application. 

In Clojure, we could mimic Java using `defprotocols` and `defrecords`, like DHolness writes in his Medium article [Dependency Inversion with Clojure](https://medium.com/@dholnessii/dependency-inversion-with-clojure-8c7d92caa0d1#:~:text=Dependency%20Inversion%20Principle,-1.&text=High%20level%20modules%20should%20not,details%2C%20not%20details%20on%20abstractions.). However, a more idiomatic solution is to use multimethods. Instead of calling anything in the player-moves or bot-moves namespaces directly, we can implement a multimethod that `-main` will call that dispatches the proper function. `-main` has no idea what it is calling, but the multimethod makes sure the correct functions are invoked.  

## Reusable Frameworks

The DIP is also what allows reusable frameworks to be reusable. Take, for example, Next.js, one of the most popular full-stack frameworks for React. Next.js allows React developers to easily create multi-page applications by taking care of static and dynamic routing, static generation, and server-side rendering. In order for every to be able to use Next.js for their projects, Next.js can't have any specific knowledge of the sites that are being built with Next.js. If the framework were too specific, it wouldn't be reusable. 

Instead, the code that I write is written in a way that conforms with the structure that Next.js has laid out. All pages, for example, are in the `app` directory, which is how Next.js knows what the different routes in my application are. My blog site depends upon Next.js for implementing that routing, as well as server-side rendering my pages to be SEO compliant. Next.js doesn't know or care that what I'm making with it is a blog site. 


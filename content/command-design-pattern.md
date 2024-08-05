---
layout: blog
title: The Command Design Pattern
author: Alex Root-Roatch
description: A behavioral design pattern based on senders and receivers.
date: 2024-08-05T17:05:23-6:00
updated: 2024-08-05T17:05:23-6:00
thumbnail: /img/design-patterns.jpg
category: [ Clean Code Practices ]
---

## What is the Command Design Pattern?

The Command Design Pattern is a behavioral design pattern, which means that it's a way of partitioning the system into
separate classes based on the system's behaviors. It is centered on having a single interface called `Command` with a
single method called `execute()`. Classes are then made that implement the interface and use the inherited `execute()` method to carry out their own commands. It's essentially a behavior-driven way of implementing [interface segregation](https://arootroatch-blog.vercel.app/interface-segregation-principle).

## A Remote Control Fan

For example, let's say that we have a fan that can be turned on and off with a remote and also has an adjustable speed. The remote control is one device that can issue two commands: power on/off and adjust speed. Anytime we push a button on the remote, we are sending a command to be executed. That's where the interface called `Command` with the single method `excute()` comes in. 

Then we can make two classes, `TurnOnOff` and `AdjustSpeed`, that both implement the `execute()` method and call `fan.turnOnOff()` and `fan.adjustSpeed()`, respectively.     

![Command Pattern UML](/img/command-pattern.png)

If insert a `Device` interface between the classes and the fan, we can even extend the remote control to be able to turn on other devices that also have variable speed and power on/off behaviors. 

## Undo/Redo Capability

This structure decouples what the task is from who is doing it, and could even decouple the task from when it gets done. This allows for things like queues and logging. In addition, each class could also save information about each task being done, making it possible to implement undo and redo functionality. 

## What About Functional Programming? 

While it's true that this design pattern originated from object-oriented programming, it's still relevant for well-structured systems in functional programming as well. 

For example, my tic-tac-toe application has two database options: PostgreSQL and EDN file. To log each move to the database, I'm using a `log-move` multimethod, Clojure's way of implementing polymorphic dispatch. I simply call `log-move` and pass it the map of the game state, and the multimethod's dispatch function calls the appropriate logging functions for either EDN or Postgres based on the game state. My application's `main` doesn't know or care which function is being called. If I wanted to add another database type, I would simply need to add another `defmethod` to extend the `log-move` multimethod and implement that appropriate function. 

## Further Reading

For more in-depth code examples (in Java), I recommend [this Geeks for Geeks post](https://www.geeksforgeeks.org/command-pattern/).


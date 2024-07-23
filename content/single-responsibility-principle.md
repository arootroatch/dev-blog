---
layout: blog
title: The Single Responsibility Principle
author: Alex Root-Roatch
description: Make your software easy to maintain and understand by separating different responsibilities.
date: 2024-05-23T18:49:20-6:00
updated: 2024-05-23T18:49:20-6:00
thumbnail: /img/hand-up.jpeg
category: 
  - Clean Code Practices
---

## What is the Single Responsibility Principle?

The ability of software to tolerate and adapt to the changing needs of the user is what Uncle Bob calls the Primary Value of Software. Therefore, it's the most important thing we can do as developers to make sure that our software is easily changeable. That's where the Single Responsibility Principle comes in.

The Single Responsibility Principle states that a class, module, or function should have only one reason to change. A "reason to change" is a request from the user of the software to change functionality based on the changing needs of the user. Put more simply, one class should only answer to one type of user. 

## Terms to Know

### Actor
An *actor* is a user that fulfills a certain role. For example, a payroll system may be used by Accountants, Managers, and Database Administrators, and each of those roles will cause them to interact with the system differently. 

Actors are based on roles, not individuals. That's because in a small business, one person often wears many hats, and thus behave as multiple actors. But as the company grows, those hats are given to different people, and the software needs to be able to change as the business grows. 

### Responsibility

The *responsibility* of a module is the feature or service the actor requires from the module, and it's the reason the module would need to be changed. If the actor's needs change, then the module will need to change. We don't want a module to have multiple actors that would cause it to change. If the Database Admins ask for a change to how they save employee information to the database, that shouldn't affect the Operations Managers' ability to generate their reports.  

## Identify Actors

In order to structure our software in this way, we need to identify our actors. We can do this by asking "Who are the user that will request changes to the software?"

We've already identified three roles in our payroll system: Accountants, Database Admins, and Operations Managers. Let's say that what they require from the system is as follows:
- Accountants will need to calculate how people are paid
- Database Admins will need to save entries to the database and query the database. How this happens will depend on their database schema.
- Operations Managers will need to generate reports describing their employees and summarizing the hours they've worked.

## The Downfall of Multiple Responsibilities

If we were to put all of our functions into one class called "Employee," that would mean that if the Accountants needed an update to the system, it would affect the Operations Managers and Database Admins as well. Not only that, as the system grows in complexity over time, there will be: 
- More dependencies
- Increased fanout of the employee class, and
- Increased likelihood of merge conflicts when commiting to version control if you're working with other developers on the same module at the same time.

These side effects make the software more rigid and fragile as time goes on, which mean the primary value of the software is steadily decreasing.

## How to Separate Responsibilities

### Extract Classes

One way to fix this is to extract all the related functions into their own separate classes. That completely decouples the implementations of the functions and the actors of those functions. 

However, that may also make it harder for the developers to find all the functions that are related to employees. This may not be a problem on private teams with in-depth knowledge of the code, but would be problematic if the code is for a public API and needs to be easy for other developers to use. 

### Create a Facade Interface

We could massage this pain point by inserting a facade interface that combines all the classes back together, making them easy to find for the developers. That keeps the implementations of the functions separate, but now the actors are coupled again.

### Interface Segregation

What if we flip it, and have separate interfaces for each actor and a single class for the developers to find everything in? 

Now the actors are de-coupled, but the implementation is coupled again. 

## Finding Balance

All three approached have their trade-offs. It's our job as software engineers to balance these trade-offs with the needs of our system.

## But What About Functional Languages?

Surely this doesn't apply to functional languages like Clojure? How could it? Clojure doesn't have any classes to couple things together in!

In a functional language, there are still things we can do to make sure our code doesn't have multiple actors to answer to. We can make sure all of our functions are only doing one thing, helping them be more maintainable and re-usable. We can also make sure that un-related functions are in separate source code files to further isolate them from other unrelated features. 

Even though the Single Responsibility Principle was originally created with Object-Oriented Programming in mind, it is a mindset that we can carry into all our codebases to make sure it stays maintainable and retains a high primary value.
---
layout: blog
title: Getting Started with JUnit in IntelliJ
author: Alex Root-Roatch
description: Setting up a TDD Java environment without Gradle or Maven
date: 2024-07-11T22:23:06-6:00
updated: 2024-07-11T22:23:06-6:00
thumbnail: /img/java-banner.png
category: 
  - Java
---

## What's a Gradle?

Today was my first foray into Java and using JUnit for TDD. I decided the Coin Changer Kata would be a good exercise for getting used to JUnit and Java, as it's a rather simple exercise while still requiring a good amount of math operations like the modulus operator (%) and dealing with decimals, which can be tricky sometimes. 

The first step, though, was creating a new project with Java and JUnit. I've been spoiled so far with Speclj, which has a simple `lein new speclj` command that automatically creates a starter project for TDD in Clojure as long as the user has Leiningen installed on their machine. Similarly, in the React ecosystem, almost everything is done using `npm` commands. My first instinct, then, was to look for a terminal command for JUnit. 

That search was... unsuccessful. The [JUnit User Manual](https://junit.org/junit5/docs/current/user-guide/#overview-getting-started) mentioned a variety of build tools and package managers like Maven, Gradle, Ant, and Spring Boot, showing examples of how to add JUnit to the dependencies for each one. This left me with more questions than answers. What's Gradle? What's Maven? Do I need to install them on my machine before I can build a Java project with them? Which one should I pick?

## IntelliJ to the Rescue

Luckily, IntelliJ actually makes this really easy, and it has its own build tool, so I didn't even need to worry about using Maven or Gradle. Even luckier, JetBrains has a fantastically helpful [blog post](https://www.jetbrains.com/help/idea/junit.html#intellij) walking through the process of setting up JUnit specifically. 

With JUnit up and running, it was time to get coding!

## First Impressions

### JUnit

Compared to how readable and smooth-to-type Speclj is, JUnit definitely feels clunky. Having to annotate every test with @Test and create a function before every assertion seems like a lot of extra typing, but I think almost every language is going to feel like it has more typing compared to Clojure. 

One of the first things I searched for was an auto-runner for the tests, as that was another luxury in Speclj that I had become accustomed to. IntelliJ does have this feature as a button in the "Run" console, but I found it be more intrusive than helpful. I would be in the middle of typing a line of code when the auto-runner would attempt to re-compile, fail, and move my cursor while I was typing. Instead, I decided to stick with typing `Ctrl`+`Shift`+`R` everytime I wanted to run the tests. 

This keyboard-shortcut approach came with an enjoyable side effect, though: if my cursor was at the bottom or top of the containing class, all the tests would be run; however, if my cursor was next to one particular test, only that test would run. This was handy for debugging if I wanted to be able to focus on a particular test, like using `focus-it` in Speclj. 

### Java

Having done a good amount of TypeScript work with React (including developing this blog site), Java's static typing is not foreign to me, though it certainly feels verbose. Aside from having to wrap things in classes and declare visibility, the curly braces, infix notation, and other basic syntax feel very familiar. The types are quite different though; Java has six different primitive types for numbers while JavaScript simple has "Number" and "BigInt." 

One of the biggest curveballs was not being able to simply type a hashmap. For the Coin Changer Kata, I decided I wanted to return a map where the name of the coin was the key and the number of coins was the value. In both JavaScript and Clojure, I could easily do this by merely typing a pair of curly braces and filling it with my desired key-value pairs. In Java, however, I have to use a constructor function to create the empty hashmap and then fill the hashmap using the `put` method:

```
HashMap<String, Integer> coins = new HashMap<String, Integer>();
coins.put("pennies", 2);
```
From a low-level, Object-Oriented perspective, this makes sense. I'm implementing an instance of a hashmap from the `Map` interface and the calling methods provided by that interface in order to modify the data within the hashmap. Understanding doesn't make it feel any less clunky, though, but then again, maybe I've just been spoiled by how high-level Clojure is. 



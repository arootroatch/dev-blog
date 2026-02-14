---
layout: blog
title: Declaring Types for Function Parameters in Java
author: Alex Root-Roatch
description: Ever feel like having to declare types is stopping your functions from being reusable? Read on.
date: 2024-07-24T17:05:42-6:00
updated: 2024-07-24T17:05:42-6:00
thumbnail: /img/java-banner.png
category: Java
---

## Dynamically DRY

As part of the acceptance criteria for my implementations of an array list and a linked list in Java, I needed to measure the time taken to add 1000 elements at the beginning, middle, and end of each list. The results of those tests can be found [in my last post](https://arootroatch-blog.vercel.app/implementing-linked-lists-in-java). 

Naturally, I wrote a separate function inserting the 1000 items at each of the different positions. Then I had one function that called each of those functions, measured the time it took each to run, and printed the results. This function essentially had the same five line of code repeated for each function, the only difference being which function was being measured. 

Of course, I immediately set out to refactor this to achieve two things: 
1. Make the `measureTimeTaken` function much smaller and more DRY by passing in the function being measured as an argument to it, and 
2. Make the `add1000Elements` functions reusable for both array lists and linked lists. 

This kind of refactoring has become routine for me in Clojure and JavaScript. Since they're dynamically-typed languages, I can easily refactor function parameter like this without a second thought. But in the statically typed world of Java, this tripped me up. How do I pass a function with a `void` return type into another function as a parameter and call it inside the function body? If the parameter for the `add1000Elements` is declared as `ArrayList`, how could I use that function for the linked list?

## Functional Arguments

Let's start by cleaning up that `measureTimeTaken` function by passing the `add1000Elements` function as an argument. Java provides an interface called `Runnable`, that provides a `run()` method. Using this as the type when declaring the parameter and invoking the `run()` method in the function body makes it possible to pass in functions as arguments. Take a look:

```java
public static void measureTimeTaken(String message, Runnable function) {
    long startTime, endTime;
    double executionTime;
    startTime = System.nanoTime();
    function.run();
    endTime = System.nanoTime();
    executionTime = (double) (endTime - startTime) / 1000000;
    System.out.println(message + " takes " + executionTime + "ms");
}
```

## Be Less Specific

With that problem out of the way, it was time tackle the issue of making the `add1000Elements` functions usable for both array lists and linked lists. At first, I declared the parameter type as `MyArrayList`, which would not accept a type of `MyLinkedList` to be passed in. 

It seemed like Java's static typing was definitely getting in the way of being able to keep my code DRY, but then I remembered: both `MyArrayList` and `MyLinkedList` are implementations of the `MyList` interface! By using that as the type, I could now reuse those functions: 

```java
public static void add1000ToEnd(MyList<Integer> list) {
    for (int i = 0; i < 1000; i++) {
        list.add(i);
    }
}
```

With all these functions now being reusable, I moved them into their own class called `MeasureTimeTaken`.


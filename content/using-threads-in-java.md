---
layout: blog
title: Using Threads in Java
author: Alex Root-Roatch
description: Java threads allow for concurrent processing
date: 2024-09-04T22:16:59-6:00
updated: 2024-09-04T22:16:59-6:00
thumbnail: /img/java-banner.png
category: [Java]
---

## Intro to Threads

Multi-threading is a powerful tool that Java developers can use to perform multiple tasks at the same time. I like to think of threads like checkout lines at the grocery store. If there's only a single checkout line open, every has to wait in line and can't buy their groceries until everyone in front of them has completed their checkout. In a single-threaded application, every process is put in a queue and doesn't execute until the process before it finishes. 

When the grocery store sees how many customers are waiting in the checkout line, though, hopefully they open more checkout lines, allowing multiple customers to buy groceries simultaneously. In a multithreaded application, multiple processes can be executed concurrently. This is especially important in server architecture where it is necessary to be able to serve multiple clients simultaneously. Imagine a website that you could only visit if no one else was visiting it at that time!

There are four ways create a new thread and execute code in that thread: 
1. Extending the `Thread` class
2. Implementing the `Runnable` interface
3. Using lambda functions
4. Using a method reference

## Extending `Thread`

One way to create a new thread is to create a class that extends the built-in `Thread` class and override the `run` method. The `Thread` class itself implements the Java `Runnable` interface, so the `start()` method will call `run()`.

```java
public class Main extends Thread {
  public void run() {
    System.out.println("This code is running in a thread");
  }
}

Main thread = new Main();
thread.start();
```

## Implementing `Runnable`

Another way to create a thread is to implement the `Runnable` interface directly and passing an instance of the class into the `new Thread()` constructor, followed by calling `start()` on the thread.  

```java
public class Main implements Runnable {
  public void run() {
    System.out.println("This code is running in a thread");
  }
}

Main obj = new Main();
Thread thread = new Thread(obj);
thread.start();
```

This is slightly more verbose and still depends on the `Thread` class, but perhaps is more visually obvious that code is running in a separate thread and showing what is being passed to the thread. 

## Using Lambdas

A more succinct way to create a thread (and perhaps my favorite) is to use a lambda. 

```java
public void makeThread(){
    new Thread(() -> {
      System.out.println("This code is running in a thread");
    }).start();
}
```

Lambdas allow us to create functions right in the constructor or pass function calls into the thread constructor as arguments. It's essentially a "code as data" approach. This is very friendly to developers that are used to programming in a functional style or even in JavaScript where functions are first-class citizens. I also find it to be very readable; it's easy to see that a new thread is being created and what is happening in that thread. 

## Using Method References

Method references are like even more succinct lambda expressions. They allow us to refer to a method inside an instance of a class. If the method being called in the thread is part of the same class the thread is being created inside, the `this` keyword can be used.  

```java
private void print(){
    System.out.println("This code is running in a thread");
}

public void makeThread(){
    new Thread(this::print).start();
}
```

For more information on method references, see [this post from Baeldung](https://www.baeldung.com/java-method-references).

## Concurrency Considerations 

Remember that the code inside the thread is executing in a different thread than the rest of the code in the application. Any lines of code after starting the thread will be executed immediately after the thread is started; it will not wait for what is happening inside the thread to be done executing first. 

With concurrent processing, there's no way to know which order the code will execute. If the different threads are mutating the same variables, the value of that variable can become unpredictable. It's important to minimize the amount of data that is shared between threads for this reason, but if data must be shared, the `isAlive()` method can be used to wait for the thread to finish before using any variables that the thread mutates. 

## Conclusion

In this post we discussed four ways to implement multi-threading in Java: 
1. Extending the `Thread` class
2. Implementing the `Runnable` interface
3. Using lambda functions
4. Using a method reference

We also briefly discussed problems that could be caused by sharing variables across threads. Now it's time to go write some multithreaded applications!




---
layout: blog
title: Printing Lists in Java
author: Alex Root-Roatch
description: A look at what happens under the hood when printing ArrayLists and LinkedLists to standard out
date: 2024-08-06T17:49:57-6:00
updated: 2024-08-06T17:49:57-6:00
thumbnail: /img/java-banner.png
category: [Java]
---

## What the Hash Code?

This week, I've been working on implementing three different sorting algorithms: Merge Sort, Bubble Sort, and Quick Sort. In the spirit of learning the lower-level workings of Java, I'm implementing these algorithms to work with my custom implementations of an array list and a linked list. 

While figuring out why an algorithm wasn't working as expected, I reached for the trusty `System.out.print()` to see what was happening. I was surprised to see, instead of a nice print out of all the numbers in the array surrounded by square brackets, something like this:

```text
main.MyArrayList@80169cf
```

This is the package name, the class name followed by "@", and the [System.identityHashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#identityHashCode-java.lang.Object-) of the array list that I was trying to print. To put it in an overly-reductive nutshell, this is essentially the memory address of the array list that the JVM uses to locate the data in memory.

## The Quick Fix

In order to view the contents of the array, I wrote a quick function to print each element in the array to the console on a single line. 

```java
public static void printArray(MyList<Integer> arr) {
  for (int i = 0; i < arr.size(); i++)
    System.out.print(arr.get(i) + " ");
  System.out.println();
}
```

Instead of calling `System.out.print(arr)`, I could now do `printArray(arr)` in order to debug my algorithm. 

## The Real Fix

That, however, didn't answer the question I had: Why is it that putting a Java-implemented array list into `System.out.print()` yielded the expected result and mine didn't? 

A little digging into the documentation revealed that the print function, when given an Object as its input, first converts the Object using `String.valueOf()`. `String.valueOf()`, in turn, calls the `toString()` method of the Object provided in order to get the string representation of the Object. 

My implementation of my array list, however, didn't include a `toString()` method, so I added one: 

```java
public String toString() {
  if (size == 0) return "[ ]";
    
  String str = "[ ";
  for (Object o : array) {
    str = str.concat(o.toString().concat(" "));
  }
  str = str.concat("]");
  return str;
}
```

Now this works: 

```java
System.out.println(arr)

=> [ 1 2 3 4 5 6 7 8 9 ]
```

<iframe src="https://giphy.com/embed/YEL7FJP6ed008" width="480" height="355" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happy-fathers-day-fathersday-YEL7FJP6ed008">via GIPHY</a></p>

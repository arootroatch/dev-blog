---
layout: blog
title: Using Streams in Java
author: Alex Root-Roatch
description: Processing collections without for loops
date: 2024-08-17T10:47:47-6:00
updated: 2024-08-17T10:47:47-6:00
thumbnail: /img/java-banner.png
category: [Java]
---

## What's a Stream? 

One of the things that stuck out to me when I first started working in Java was lists didn't have built map, filter, or reduce methods. I found myself using for loops everywhere to process collections, wishing I could have written it in one line of code with a `map` or `reduce`. 

That's where streams come in. Introduced in Java 8, streams gives us a wrapper for collections that allow us to perform processing methods over the entire collection. It is not a data structure in itself, but more of a pipeline through which the data in the collection can flow in order to be operated on. 

To turn a list into a stream, we simply call the `stream()` method on it. To turn an array into a stream, we wrap it in `Arrays.stream`.

```java
myList.stream();

Arrays.stream(myArray);
```

Once the data is put into a stream, we then have access to two different categories of methods that can process data in the stream: intermediate methods and terminal methods. 

## Intermediate Methods

Intermediate methods are methods that return a stream rather than a collection and can be chained together. They are lazy operations, meaning that the data processing is not actually executed until the stream is terminated with a terminal method. This keeps it efficient while method chaining. 

Intermediate methods include: 
- map()
- filter()
- sorted()
- flatMap()
- distinct()
- peek()

## Terminal Methods

Terminal methods eagerly process the data in the stream with the given method rather than lazily evaluating it. They cannot be chained together, and the usage of a terminal method marks a stream as being consumed and no longer usable. It can be thought of as the point in which all the data has finished flowing through the pipeline. 

If intermediate methods are called before the terminal method, the terminal method is the point at which the laziness of the intermediate methods will be executed. 

Terminal methods include: 
- collect()
- forEach()
- reduce()
- count()
- findFirst()
- allMatch()
- anyMatch()

## Closing Points

It is important to note that streams operate on data in a collection without modifying the original collection. The result of the operation can be stored to a new variable, but the original collection will remain unchanged. 

By using streams in Java, we can keep our code much more concise and leverage the performance enhancement of lazy evaluation. 

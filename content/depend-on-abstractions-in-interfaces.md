---
layout: blog
title: Depend on Abstractions in Interfaces
author: Alex Root-Roatch
description: Java interop was hindered when an interface depended on a concrete class
date: 2024-08-26T20:49:31-6:00
updated: 2024-08-26T20:49:31-6:00
thumbnail: /img/abstract.jpeg
category: [Clean Code Practices, Java, Clojure]
---

## A Review of the Dependency Inversion Principle

The [Dependency Inversion Principle](https://arootroatch-blog.vercel.app/dependency-inversion-principle) states that entities in an application should depend on *abstractions*, not *concretions*. This is most often demonstrated with classes implementing interfaces or extending abstract classes. 

However, the datatypes used *inside* of those interfaces or abstract classes should not be overlooked. They should adhere to Dependency Inversion, too.

## Java Interop in Clojure

I discovered the importance of this recently when using a Java application that I had built as a dependency in a new Clojure application. I was using a `deftype` to implement an interface that from the Java library, and that interface had only one method in it. 

One of the parameters of that method was a Java `HashMap`. `HashMap` is a concrete implementation of the Java `Map` interface. I had put a concretion *inside* an abstraction! While working in Java, this wasn't a problem, as it was easy to make sure everything throughout the application was of type `HashMap`. 

This made things more challenging when trying to implement this method in Clojure, though. I needed to be able to write tests that passed arguments into this method. While it's not impossible to create an instance of a Java `HashMap` in Clojure, it's certainly not fun, and I shouldn't have to be forced to call Java methods all over the place when working in Clojure. 

Clojure maps are implementations of `java.util.Map`, so a quick update and re-deploy of my Java library using `Map` as the parameter type in the method solved all of my issues and allowed me to happily stay in Clojure while implementing a Java library.




---
layout: blog
title: Concrete Methods in Interfaces
author: Alex Root-Roatch
description: Interfaces can have more than abstract methods; `default` and `private` allow method bodies.
date: 2024-08-19T20:48:45-6:00
updated: 2024-08-19T20:48:45-6:00
thumbnail: /img/java-banner.png
category: [Java]
---

## Introduction

Today I've been working on refactoring a large chain of `if-else` statements to make it more [Open-Closed](https://arootroatch-blog.vercel.app/open-closed-principle). After breaking each `if` statement into its own class, I thought the [Command Pattern](https://arootroatch-blog.vercel.app/command-design-pattern) could work well for my situation. 

However, there were a few concrete methods that all of these classes used. I didn't want to have a utility class that all the other classes were importing, but I also didn't want to add them as abstract methods in the interface. This would have caused me to have to implement the same method body in every class, which would not have been very DRY. 

Thankfully, there are two keywords that allow us to write concrete methods inside of interfaces: `default` and `private`.

## Default Methods

A default method in an interface is a method that all the implementing classes will have access to. There is no need to implement or import the method before using it inside the class; it will automatically be inherited in the class when implementing the interface. For example: 

```java
public interface Vehicle {
    default void drive(){
        System.out.println("Driving");
    }
}

public class Car implements Vehicle(){
    public Car(){
        // set private fields
    }
}

Car car = new Car();
car.drive();
```

There's no `drive` method explicitly inside the class, but the class still has access to the method as if the class was extending a parent class rather than implementing an interface. 

It is possible to override the default method by implementing that method in the class and using the `@Override` annotation. This is useful if there is one class that requires slightly different behavior than what the default method provides. This is one way we can create polymorphic dispatch in Java. 

## Private Methods

Of course, it's important to keep our methods small and readable, which sometimes means breaking things out into helper functions. Thankfully, we can also mark methods as `private`. Private methods in interfaces are concrete methods that the default methods have access to. The implementing classes *do not have access* to private methods in an interface. 

## Conclusion

Default methods help provide methods that all the implementing classes will use, while private methods allow us to break down default methods into small, manageable helper functions. 

This allows interfaces to act similarly to parent classes, meaning that it is very important to adhere to [Liskov Substitution](https://arootroatch-blog.vercel.app/liskov-substitution-principle) when choosing what methods to include in the interface and which ones should be implemented in the interface.



---
layout: blog
title: Implementing Array Lists in Java
author: Alex Root-Roatch
description: Diving into the lower-level detail of how array lists work.
date: 2024-07-18T22:01:36-6:00
updated: 2024-07-18T22:01:36-6:00
thumbnail: /img/java-banner.png
category: 
  - Algorithms
  - Java
---

## Array vs Array List

This week, one of my stories includes implementing an Array List in Java, essentially recreating what is provided by `java.util.ArrayList`. This has been a great way to learn how a basic data structure really works under the hood, and the first time I've ever really deep-dived into the source code of a language that I'm using. 

As a Java newbie, the first question I had was, "What's the difference between an *array* and an *array list*?" As it turns out, *arrays* in Java have a fixed length, whereas array lists are dynamic, meaning developers can add and remove elements from an array list and the size of the list adjusts accordingly. 

When initializing an array, the developer immediately fills that array with the values needed, like `{25, 10, 5, 1}`, and changing that array requires physically editing the array where it was defined. An array list can be initialized with `new ArrayList()` and then the methods `add()` and `remove()` can be used to mutate the array list. 

## Capacity

With an array, the amount of memory allocated to the array is proportional to the amount of elements in the array, and this memory allocation cannot be changed without changing the definition of the array. With an array list, however, it can start off empty until it is filled using the `add()` method. That doesn't mean that the initial memory allocation of the array list is zero, though, because then it wouldn't really exist in the program. Not only that, as soon as anything was added to it, memory would need to be reallocated to make space. 

Instead, array lists start off with an initial capacity in their constructor. This capacity can be set by passing an integer to the `ArrayList()` method. If no argument is given, Java defaults to a capacity of 10. 

## Adding Elements

Adding elements to the next available block of memory in the array list is easy if the initial capacity for the array list hasn't been met. If that initial capacity *has* been met, though, more memory has to be allocated to the array list before any new elements can be added. Under the hood, this is actually done by creating a new Object with the needed capacity and copying the elements from the array list into the new Object, then returning the new Object to replace the old one. At that point, the array list is now ready for another element to be added.

## Adding Elements at a Specific Index

Adding elements at a specific position in the array list adds more layer of complexity. 

First of all, the index in question needs to be an index that already has a value. Even though an empty array list has 10 memory block allocated to it, an empty memory block does not equal an available index. Memory blocks in an array list need to be filled in sequential order.  

Secondly, the pre-existing values in the array list need to be bumped down (increasing their index by 1), in order to make room for the new item. This requires checking if our capacity has been reached in order to make sure there is room to move everything down by 1. If not, the capacity will need to be incremented, and then the elements will need to be copied one position down from where they were. At that point, the array list is ready for the new item to be added at the empty index. 

## Removing Elements

Removing elements in an array is similar to adding elements at a specific index, but in reverse. All the elements to the right of the removed element need to be shifted to the left by one (decreasing their index).

## Closing Thoughts

While array lists are fast for data retrieval due to being to access elements in specific memory locations by index, adding a removing elements from an array list could be a rather intensive process on large array lists, since all the values need to be shifted accordingly. Adding one element to index 10 of a 1,000 element array list means that 990 elements all need to be bumped down by 1. If 1,000 elements were to be added at this same position, not only would the procedure of bumping elements down and reallocating memory have to happen 1,000 times, the amount of elements needing to be bumped also goes up by one each time. By the time the 1,000th element is added, 1,990 elements needed to be shifted down by one. 


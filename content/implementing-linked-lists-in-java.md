---
layout: blog
title: Implementing Linked Lists in Java
author: Alex Root-Roatch
description: Learning how linked lists work and how they differ from arrays
date: 2024-07-22T18:48:10-6:00
updated: 2024-07-22T18:48:10-6:00
thumbnail: /img/java-banner.png
category: Java
---

## What Is a Linked List? 

Following up from last week's post about [implementing array lists in Java](https://arootroatch-blog.vercel.app/implementing-array-lists-in-java), today I tackled implementing *linked lists* in Java, essentially recreating the basic functionality of `java.util.LinkedList`. This was an overdue, well-needed learning curve for me, as I've been blissfully ignorant about linked lists up to this point. I primarily worked in JavaScript, which does not provide linked lists as a data structure.

Let's start off by defining a linked list. Unlike arrays, linked lists are not stored in contiguous blocks of memory, and therefore the data may be fragmented in different locations. As a result, each data entry of the list also needs data about what data entries come before and after it. Each of these data entries is referred to as a "node". A node consists of two (sometimes three) parts: 
1. The element being stored (such as an integer or string)
2. The address of the next node in the list
3. (Optional) The address of the previous node in the list

A linked list where each node points only to the subsequent node is called a *single-linked list*. A linked list where each node points to the subsequent node and previous node is called a *double-linked list*. 

Linked lists also have a *head* and a *tail*. In Java, these are private variables `first` and `last` that point to the address of the first and last element in the list. The node of the last element itself will point to `null` as it's subsequent node. If the list is double-linked, node of the head element will point to `null` as its previous node. 

It is also possible to create a circular list by setting the tail node's next pointer back to the head node rather than `null`. 

## Memory Allocation

Since linked lists are not stored in contiguous block of memory, there's no need to initialize them with a capacity or worrying about having to reallocate memory to add items if the capacity is reached. The new data entry will simply be stored in any available space in memory, and the pointers to the next and previous nodes are how its position in the list is managed. 

## Data Retrieval

As a result of this structure, accessing data in the list requires traversing through the list until the desired element is reached. To retrieve the element at index 10, the program must start at the first element and count its way to the tenth. This is slower than being able to access the data directly like in an array. 

With a double-linked list, this can be sped up using binary search. Simply divide the size of the array list by two, and if the desired index is greater than that number, start at the end of the list and work backward. 

## Adding Elements to the End 

Adding elements to the end of a linked list is straightforward: 
1. Create a new node with the element being stored
2. Set its next pointer to `null`, as it is the new tail
3. Update the next pointer of the previous node (which was the tail node) to point to this new node rather than `null`.
4. Update the private variable `last` to refer to this new node 
5. If the new node is also the first element in the list, the private variable `first` will need to be updated as well. 

## Adding Elements at a Specific Index

Adding elements at a given index is similar: 
1. Get the node that is currently occupying the desired index
2. Get the node that precedes the desired index
3. Create a new node with the element being stored
4. Set its next pointer to the node that was at the desired index
5. If double-linked, set its previous pointer to the preceding node
6. Update the next pointer of the preceding node to the new node
7. If double-linked, update the previous pointer of the subsequent node to the new node
8. Update `first` and/or `last` if necessary

## Removing Elements

Removing elements is very simple compared to removing elements from array, as it's just a matter of updating the links without needing to shift the position of the remaining elements. 
1. Get the node to be removed
2. Get its subsequent node
3. Get its previous node
4. Update the next pointer of the previous node to reference the subsequent node
5. If double-linked, update the previous pointer of the subsequent node to the previous node
6. Set the previous and next pointers of the node to be removed to `null`
7. Set the content of the node to be removed to `null`
8. Update `first` and/or `last` if necessary

## Performance

While retrieving data from linked lists is slower than arrays, adding and removing elements from a linked list is markedly faster. Let's talk numbers: 

### Array Metrics
- Adding 1000 elements to end takes 2.687382ms 
- Adding 1000 elements to middle (incrementing index) takes 4.853044ms
- Adding 1000 elements to middle (static index) takes 8.719762ms 
- Adding 1000 elements to beginning takes 2.244435ms

### Linked List Metrics
- Adding 1000 elements to end takes 0.421417ms 
- Adding 1000 elements to middle (incrementing index) takes 0.625574ms 
- Adding 1000 elements to middle (static index) takes 0.486917ms 
- Adding 1000 elements to beginning takes 0.504539ms


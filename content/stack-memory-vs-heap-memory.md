---
layout: blog
title: Stack Memory vs Heap Memory
author: Alex Root-Roatch
description: Exploring the two types of memory allocation in programming
date: 2024-07-05T08:35:42-6:00
updated: 2024-07-05T08:35:42-6:00
thumbnail: /img/stack-vs-heap.webp
category: Uncategorized
---

## Stack Allocation

Stack memory allocation is for temporary storage of data while the program is running and is stored in a last-in-first-out order. When a function is called, the variables used in that function are stored in the stack, and that memory space is immediately cleared when the scope of the function ends. This memory management is handled automatically by the compiler, meaning that programmers do not need to worry about having to manually manage the stack memory space. The amount of space reserved for the stack is fixed and is determined by the compiler. 

Data in the stack is allocated in contiguous blocks and can only be accessed by the thread that owns the data. This makes stack memory very fast for retrieving data when needed, as the data is stored in specific locations rather than being fragmented across the memory space. It also means that memory leaks are not a concern, as the function that contains the variables in question is the only part of the program that can access those variables, and the memory space is immediately freed when the function call completes.

The specificity of the location of data in the stack makes the stack the preferred method for storing data in an array.

## Heap Allocation

Heap memory is memory space available for the programmer to manually store data needed by the application. This memory space is typically much larger than the stack memory space, and the size of it is also adjustable by the programmer. This memory exists for the entire runtime of the application rather than in a specific function scope. There is no automatic memory management in the heap, so unused objects need to be either manually deleted by the programmer or removed by the garbage collector when they are no longer needed. 

In C and C++, there is no garbage collection and the programmer is responsible for managing memory in the heap. Improperly managing memory in the heap leads to memory leaks, which is when there is a lot of unneeded data taking up memory space. This can lead to the application slowing down or crashing entirely due to running out of memory. Java, however, has a garbage collector that constantly runs in the background and deletes these unused objects automatically. 

Data in the heap is visible to all threads of the application, such as runtime classes and objects declared in the global scope. It is allocated in any available space in memory rather than specific, contiguous blocks, which can lead to data fragmentation. This makes retrieving data from the heap much slower than retrieving data from the stack. For this reason, linked lists are the preferred data type for heap memory rather than arrays. 



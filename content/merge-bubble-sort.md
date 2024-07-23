---
layout: blog
title: Merge Sort and Bubble Sort
author: Alex Root-Roatch
description: Two basic sorting algorithms all developers should know
date: 2024-06-04T22:54:31-6:00
updated: 2024-06-04T22:54:31-6:00
thumbnail: /img/sorting.jpeg
category:
  - Algorithms
---

## Introduction

In this article, we will be exploring how two common sorting algorithms work: *bubble sort* and *merge sort*.

## Bubble Sort

One of the simplest sorting algorithms, bubble sort works by selecting an element, comparing it to its adjacent elements, and swapping the order if the element to it's right is less than the element itself. The algorithm repeats until it has sorted the entire data set. If we iterate through the dataset and no swaps occur, we know the dataset is sorted. For example: 

- Say we start with `[4 9 6 2 5]`
  - Index 0: 4 is less than nine, so the collection stays as it is and we move to the next index.
  - Index 1: 9 is greater than 6, so swap them. `[4 6 9 2 5]`
  - Index 2: 9 is greater than 2, so swap them. `[4 6 2 9 5]`
  - Index 3: 9 is greater than 5, so swap them. `[4 6 2 5 9]`
- Swaps occurred during that loop, so we start over
  - Index 0: 4 is less than 6. No swaps. 
  - Index 1: 6 is greater than 2. `[4 2 6 5 9]`
  - Index 2: 6 is greater than 5. `[4 2 5 6 9]`
  - Index 3: 6 is less than nine. No swaps. 
- Swaps ocurred! Start over again
  - Index 0: 4 is greater than 2. `[2 4 5 6 9]`

At this point, I think we can see where this is going. The loop will finish this pass through the collection, and then pass through from beginning to end one more time since there was a swap in that last pass. Once it goes through from beginning to end and realizes that the collection is sorted, it returns the sorted collection.

The time complexity of bubble sort is O(n^2), meaning that the amount of time this algorithm takes will grow exponentially in relationship to the size of the dataset being sorted. As such, it is not an ideal algorithm for large datasets, and even in small datasets, there are algorithms that are faster. 

## Merge Sort

Merge sort is one of the faster algorithms, with a time complexity of O(n log n) regardless of how out-of-order the collection is. This algorithm works by slicing arrays in half, sorting the halves, and merging them back together into one sorted array. For larger datasets, this is done recursively. For example: 

- Say we start with `[9 6 5 1 4 3 8 7]`
  - Divide that in half to get 
    - `[[9 6 5 1] [4 3 8 7]]`
  - Divide each of those in half to get
    - `[ [[9 6][5 1]] [[4 3][8 7]] ]`
  - Sort each couple: 
    - `[ [[6 9][1 5]] [[3 4][7 8]] ]`
  - Merge the sub-arrays: 
    - `[ [1 5 6 9] [3 4 7 8] ]`
  - Merge the remaining sub-arrays: 
    - `[1 3 4 5 6 7 8 9]`

This method of working with large datasets by dividing them into smaller dataset first is referred to as a "divide-and-conquer" approach. Just by looking at our example, it's easy to see how it is more efficient than bubble sort. It does, however, require more memory space than bubble sort while it stores the temporary sub-arrays until they are merged back together. 




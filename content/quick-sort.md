---
layout: blog
title: Quick Sort
author: Alex Root-Roatch
description: Like merge sort, but different.
date: 2024-08-14T22:57:25-6:00
updated: 2024-08-14T22:57:25-6:00
thumbnail: /img/sorting.jpeg
category: [Algorithms]
---

## Divide and Conquer

Quick sort is very similar to merge sort in that it uses a divide-and-conquer approach. However, they use this approach differently. Merge sort splits the list to be sorted in half until it reaches the smallest size without doing any sorting in the process, then sorts the sub-lists and merges them back together. Quick sort, on the other hand, chooses a pivot element in the list and splits the list based on if each element is greater than or less than the pivot value. 

Like merge sort, quick sort does this recursively. For example: 

- Say we start with `[9 6 5 1 4 3 8 7]`
  - Choosing `4` as our pivot, we sort each number based on if it is less than or greater than `4` to get 
    - `[1 3][4][9 6 5 8 7]`
  - `[1 3]` is already sorted, so we sort `[9 6 5 8 7]` with `5` as pivot to get
    - `[1 3][4][ ][5][9 6 8 7]`
  - Then sort `[9 6 8 7]` with `8` as pivot
    - `[1 3][4][ ][5][6 7][8][9]`
  - And concatenate it all back to one list
    - `[1 3 4 5 6 7 8 9]`

The time complexity of this approach is highly dependent on how the pivot is chosen. In the best case scenario, it performs as well as merge sort, with a time complexity of O(n log n). It has a worst case time complexity of O(n<sup>2</sup>).

The space complexity of quick sort is less than that of merge sort due to using less extra memory space for storing sub-arrays as they are being sorted and merged. Some implementations use no additional arrays and instead simply swap the indices of the elements based on if they are higher or lower than the pivot, making quick sort a blend between bubble sort and merge sort.  


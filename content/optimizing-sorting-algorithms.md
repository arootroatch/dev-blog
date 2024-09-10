---
layout: blog
title: Optimizing Sorting Algorithms
author: Alex Root-Roatch
description: Linked Lists may be slow to bubble sort, but that doesn't mean Array Lists are always better
date: 2024-09-09T20:14:27-6:00
updated: 2024-09-09T20:14:27-6:00
thumbnail: /img/java-banner.png
category: [ Java, Algorithms ]
---

After doing my own implementations of an [Array List](https://arootroatch-blog.vercel.app/implementing-array-lists-in-java) and a [Linked List](https://arootroatch-blog.vercel.app/implementing-linked-lists-in-java), I implemented bubble sort, quick sort, and merge sort algorithms that would work with both data structures. 

Originally, the time taken to sort 10,000 numbers was always in the triple digits (in milliseconds) for both merge sort and quick sort, sometimes taking as long as 500ms. After some changes to my sorting algorithms and some changes to the data structure implementations themselves, I was able to get both quick sort and merge sort for both data structures down to 20-30ms for sorting 10,000 numbers. 

## Linked Lists Have Advantages

One of the first things I did that helped speed things up was leveraging a linked list's ability to be partitioned more quickly than an array list. 

When I first implemented bubble sort, sorting an array list of 10,000 numbers took roughly 20 seconds, while sorting a linked list of only 2,000 items took the same amount of time due to the fact that linked lists are not indexed. From that experience, I erroneously assumed that array lists are always better for sorting and was converting linked lists to array lists before sorting them and then converting the back inside each sorting algorithm.

However, splitting an array list into two array lists involves copying each element from the beginning to the middle to a new array and then copying each element from the middle to the end to another new array. Splitting a linked list in two, on the other hand, is merely a matter of going to the middle element, setting it's next pointer to null, and if it's a double-linked list, setting the next element's previous pointer to null. There's no new memory that needs to be allocated, nothing is being copied, and the linked list is only traversed once to find the middle element.

This was a meaningful distinction in the [merge sort algorithm](https://arootroatch-blog.vercel.app/merge-bubble-sort), where the list is recursively split into two halves and then merged back together in the proper order. 

To implement this, I changed the underlying data structure implementations themselves to have their own implementation of a `partition()` method, which returned an array of two lists. This allowed me to use polymorphic dispatch inside the merge sort function instead of having to use type checking to determine how to partition the list. 

There's a similar performance gain when needing to join linked lists as well, since multiple linked lists can be "stitched together" by updating the tail of one list to hold a reference to the head of another.

## Growing Faster

Another optimization actually had nothing to do with the sorting algorithms themselves, but with my implementation of an array list. When the array reached capacity and more memory needed to be allocated, it was only allocating one more block of memory each time. This meant that, with a default starting capacity of 10, filling an array with 5,000 elements was reallocating memory 4,990 times!

To address this, I changed the array list implementation to increase capacity by 50% whenever the array list reached capacity. 

## Stay at the Front

At this point, the merge sort was sorting 10,000 elements in both lists around 20-30ms, with linked lists being slightly faster! [Quick sort](https://arootroatch-blog.vercel.app/quick-sort) was also sorting array lists of 10,000 elements in roughly 20ms. However, quick sort was still significantly slower with a linked list of 10,000 elements. 

To understand why, it's important to look at how quick sort and merge sort are different. Whereas merge sort simply splits the list in half and then sorts as it joins back together, quick sort picks a pivot element and then looks at each element in the list one by one, placing it in one list if it's less than the pivot and another list if it's greater than the pivot. Since linked lists aren't indexed, This means that the deeper into the linked list the algorithm gets, the longer it takes to reach the next element. 

Once an element has been placed into either the "greater than" or "less than" list, however, there's no need to keep it in the original list, and it actually uses more memory if we keep it in the list. By removing each item from the list each time, the algorithm is able to look at the first element each time rather than having to traverse the list each time. This one simple change dropped sorting the linked list down to the same ~20ms benchmark as sorting the array list!

## Conclusion

While linked lists are significantly slower to retrieve data from compared to array lists, they are much quicker and more space-efficient to partition and join than array lists. 

When re-allocating memory to increase the capacity of an array list, growing by only one block of memory at a time is a surefire way to slow things down. 

When it's necessary to traverse a linked list, removing each element from the list as it's used allows the algorithm to stay at the first element, significantly speeding things up and saving on memory, too. 



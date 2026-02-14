---
layout: blog
title: How HashMaps Work
author: Alex Root-Roatch
description: Diving into Java source code to learn to understand associative data structures
date: 2024-07-26T14:09:42-6:00
updated: 2024-07-26T14:09:42-6:00
thumbnail: /img/java-banner.png
category: [ Algorithms, Java ]
---

## What's a Hash Map?

A *hash map* is an associative datatype that stores key-value pairs. It is also called:

- A "dictionary" in Python
- An "associative array" in C++ and PHP,
- A "hash" in Ruby and Perl,
- A "map" in Clojure and
- An "object" in JavaScript (JavaScript also has "maps," but they are slightly different).

They are unordered, dynamically sized, and very fast for inserting, deleting, and retrieving data. This makes them ideal
for large datasets that may require frequent modification.

## Unordered

Hash maps are unordered, meaning that the order of elements in the collection cannot be guaranteed to maintain the
ordered in which they were added. For example, adding the number 0-9 to a HashMap in Java as key value pairs
of `{"0"=0}` comes back in numerical order regardless of the order the entries are inserted:

```java
void addNKeys(HashMap<String, Integer>map, int n){
    for (int i = 9; i >= 0; i--){
        map.put(Integer.toString(i), i);
    }
    System.out.println(map);
}
=> {0=0, 1=1, 2=2, 3=3, 4=4, 5=5, 6=6, 7=7, 8=8, 9=9}

void addNKeys(HashMap<String, Integer>map, int n){
    for (int i = 0; i < 10; i++){
        map.put(Integer.toString(i), i);
    }
    System.out.println(map);
}
=> {0=0, 1=1, 2=2, 3=3, 4=4, 5=5, 6=6, 7=7, 8=8, 9=9}
```

However, when inserting them using the spelled out names of the numbers as the keys, they come back in an unexpected
order:

```text
{nine=9, six=6, four=4, one=1, seven=7, ten=10, two=2, three=3, five=5, eight=8}
```

This is due to how keys are *hashed*, which is how a key is turned into an index in memory for fast retrieval. This is
an important aspect of how hash maps are stored.

## Storing Hash Maps

Hash maps are an interesting combination of arrays and linked lists. Looking at the Java source code, we see that each
key-value pair in the map is stored as a node:

```java
static class Node<K,V> implements Map.Entry<K,V> {
    final int hash;
    final K key;
    V value;
    Node<K,V> next;

    Node(int hash, K key, V value, Node<K,V> next) {
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = next;
    }
```

This bears a strong resemblance to linked lists:

```java
private static class Node<E> {
    E item;
    Node<E> next;
    Node<E> prev;

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
```

Rather than `this.item` in the linked list, there is `this.key` and `this.value`. There's also `this.next` but
no `this.prev`, meaning this forms a single-linked list as opposed to the double-linked list of `java.util.LinkedList`.
But what about `this.hash`?

Continuing to scroll down the source code reveals an array of key-value nodes:

```java
transient Node<K,V>[] table;
```

It's this array that is actually storing the map, and each index of the array is a linked list. This is
where `this.hash` comes in.

## Hashing

A hash function is a function that converts data (e.g. a string, integer, or keyword) of any size into a value of a
fixed size. Java's hash function outputs a 32-bit signed integer. In the context of hash maps, this hash function is
used to convert the key of the key-value pair into a 32-bit signed integer that is then used as the index of the array.

It is possible for two or more keys to potentially lead to the same 32-bit integer, causing an unwanted collision.
In an array, if an element is being added at an occupied index, all the pre-existing elements are shifted
down one index to make room for the new element. To avoid this, the new key-value node is added to the one that is
already there, creating a linked list at that index. All the elements in one linked list will share the same value as
their `this.hash`, so the `hash` field of each node can simply be thought of as the index in the array that the linked
list occupies.

This is often described as each linked list at each index in the array being like a "bin" or "bucket" that elements
are "dropped" into.

## Memory Allocation

When dealing with arrays, the allocation of contiguous block of memory is an important concern. In Java, Hash Maps are
initialized with a capacity of 16. Rather than waiting for this capacity to be reached before re-allocating more memory,
hash maps will re-allocate memory and re-hash based on their *load-factor*, which is the capacity at which this will
happen. In Java, the default load factor is 0.75, meaning that memory is re-allocated and keys are re-hashed when the
array reaches 75% capacity.

The combination of array, linked list, and allocating more memory when the array is only 75% full means that hash maps
have more memory overhead than arrays or linked lists by themselves. More complex implementation of maps --
like `java.util.SortedMap`, which maintains each elements position based on insertion order -- will have even more
memory overhead.

## Data Retrieval

To retrieve an item from the hash map, the key being searched is hashed to find its index in the array. If there is
more than one key-value pair node at that index, the linked list is traversed until the desired key-value pair is found.
Let's look at how retrieving data from maps compares to array lists and linked lists:

- Retrieving the middle item out of ten items:
    - HashMap -- 0.01643ms
    - Array -- 0.005994ms
    - Linked List -- 0.01964ms

In this case, hash maps and linked lists are close in performance, while arrays are a little more than twice as fast.
The story changes dramatically with large datasets, though:

- Retrieving the middle item out of 1,000,000 items
    - HashMap -- 0.014793ms
    - Array -- 0.007988ms
    - Linked List -- 4.633918ms

Traversing 500,000 nodes in a linked list took *significantly* longer, while the array barely saw a decrease in speed,
and the hash map was actually slightly faster!

## Conclusion

Hash maps are an array of linked list in which each node is a key-value pair. The index at which each item will be inserted
is determined by the hash function, which turns each key into a 32-bit signed integer representing the index. Keys that evaluate to the same
integer by the hash function are added to the linked list at that index. Because of this, each index can be thought of
as a "bucket" that holds multiple elements. The array by default has an initial capacity of 16 and is expanded and the
keys re-hashed when the array reach 75% capacity. This is known as the *load-factor*. 

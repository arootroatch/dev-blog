---
layout: blog
title: Diamonds, Printing, and Run!
author: Alex Root-Roatch
description: Solving the diamond kata led to some knew discoveries
date: 2024-06-14T22:12:51-6:00
updated: 2024-06-14T22:12:51-6:00
thumbnail: /img/clojure-banner.png
category: Clojure
---

## The Diamond Kata

The diamond kata is a fun coding challenge that involves creating a function that creates a diamond with letters up to the given letter. For example:

```
(print-diamond "D")

    A
   B B
  C   C
 D     D
  C   C
   B B
    A

```

There are two main parts to figure out: calculating the amount of leading spaces for each line, and figuring out the amount of spaces between each character to achieve the desired width. 

The first part is relatively easy: the amount of leading spaces to put the "A" in place is equal to the number of unique letters in the diamond, so that's four for the above example. The amount decreases by one per line until we get to the middle of the diamond.

The second part is a little trickier: the number of spaces between each letter is 1 for the B's, 3 for the C's, and 5 for the D's. For more letters, we would continue up the sequence of odd numbers. To do this programmatically, we can consider each line as an index, with the A's being line 0, the B's being line 1, and so on. This approach works well when using a vector to store all the letters of the alphabet, where index 0 is A. Then, take that number, subtract one, and add it to the original number. So for the C's being line 2, 2 + (2-1) = 3. For the D's, 3 + (3-1) = 5.

For actually printing the diamond, I started off wanting to use `println` for every line of the diamond. That might be okay for a small diamond, but if were to enter in "Z" as our argument, we would invoke `println` 51 times! With some quick experimenting in the REPL, though, I found out that `println` parses new line characters `\n` as line breaks instead of simply printing the character. For example:
```
(println " A\nB B\n A")
 A
B B
 A 
```
That's much friendlier than invoking `println` for every line of the diamond.

## Leveraging Side Effects with Run!

While I was still thinking about using `println` for every line, I had tried using `map` to iterate through a vector of strings, each string being a line of the diamond, and print it to the console. This did indeed still print every line to the console, but it made my tests fail because `map` returns the value of running its callback function on each element, and `println` doesn't have a return value. As a result, a vector of four strings returned `[nil nil nil nil]`.

This made me wonder if there was a version of `map` or `reduce` that didn't return anything. In JavaScript, there's `map` and `forEach`. `map` does the same thing as `map` in Clojure, but `forEach` has no return value and is good when all you're doing on each iteration is a side effect rather than an operation on the value itself. 

After posing this question to my mentor, he pointed out the `run!` function. Notice the exclamation? In Clojure, that is how we denote that a function has side effects. `run!` essentially runs `reduce` on the given collection purely for the sake of side effects, and changing my `map` call to `run!` fixed my failing tests!

However, this is not an approach I would recommend for this kata for the reasons stated in the above section.



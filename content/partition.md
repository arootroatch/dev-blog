---
layout: blog
title: Don't `recur`, `partition`!
author: Alex Root-Roatch
description: Clojure's `partition` function is another powerful one-liner where other languages would depend on loops or recursion.
date: 2024-05-30T20:28:17-6:00
updated: 2024-05-30T20:28:17-6:00
thumbnail: /img/clojure-banner.png
category: Clojure
---

## A One Thousand Digit Problem

While working on problem 8 of the Euler project, ["Largest Product in a Series"](https://projecteuler.net/problem=8), I found myself reaching for a recursive algorithm in order to separate a vector with 1000 items in it into sub-vectors of a given amount, one item at a time. Using 13 as an example of a given amount, the end result was to have a vector where index 0 contained all the items from first to 13th, then index 1 contained all the items from second to 14th, index 2 from third to 15th, and so on. 

The reason for this was to be able to multiply all the numbers of each group of 13 together and then sort the resulting sequence. From there I could find the largest product of the 13 consecutive numbers inside the provided 1000-digit number. But writing an entire recursive helper function in order to achieve this was another prime example of something I mentioned in [yesterday's post:](https://arootroatch-blog.vercel.app/avoid-nested-if-statements-with-cond) programming in Clojure while thinking in JavaScript. I was once again missing out on a more succinct, idiomatic solution: `partition`.

## Separate with Ease

The `partition` function is another example of one of those super cool Clojure one-liners that you almost can't believe is only one line of code. In a nutshell, it takes a collection and divides it up in to sub-collections of a given length. 

It takes required arguments and two optional arguments:
1. The desired length of each partition - required.
2. The step amount that determines what the first element of the next partition is - optional.
3. A pad collection to fill the empty space in the last partition if it's length is less than the first argument - optional
4. The collection being partitioned - required. 

## The Substitute to Recursion

Argument number 2 was the secret sauce for this problem. You see, without providing a `step` amount, `partition` automatically steps based on the length of the partition. For example: 

```
user=>(partition 4 (range 20))
((0 1 2 3) (4 5 6 7) (8 9 10 11) (12 13 14 15) (16 17 18 19))
```
That definitely wouldn't work for the Euler problem! But if we tell `partition` to only step one at a time:

```
user=>(partition 4 1 (range 6))
((0 1 2 3) (1 2 3 4) (2 3 4 5))
```

That's exactly what we need! And since we are stepping one at a time, we'll never have to worry about the last sub-sequence not having the full 4 items (or in the case of the Euler problem, 13). 

Another added bonus? The returned sequence is a lazy sequence, so the values aren't evaluated until they are called for use, and only the values called are evaluated. This is great for large sequences. For more about lazy sequences, see my post about them [here](https://arootroatch-blog.vercel.app/lazy-sequences-in-clojure).

And it's *way* better than this:

```
(defn ->subvecs-of-length [target coll]
  (if (= (count coll) target)
    [coll]
    (cons (take target coll)(->subvecs-of-length target (rest coll)))))
```

## The Callback Cousin

There's also `partition-by`, which takes a callback function the way `map` and `filter` do. This allows us to be even choosier about how things are partitioned. For example: 

```
user=> (partition-by odd? [1 1 1 2 2 3 3])
((1 1 1) (2 2) (3 3))

user=> (partition-by even? [1 1 1 2 2 3 3])
((1 1 1) (2 2) (3 3))
```

Clojure, you've done it again. 

![Shia Labeouf Clapping GIF](/img/gifs/shia-labeouf-clapping.gif)
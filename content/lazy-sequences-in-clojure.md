---
layout: blog
title: Lazy Sequences in Clojure
author: Alex Root-Roatch
description: Clojure lets us be lazy to help us be more productive.
date: 2024-05-21T00:37:36.242Z
updated: 2024-05-21T00:37:36.242Z
thumbnail: /img/sloth-computer.avif
category:
  - Clojure
---

## No Loops? No Problem

As we've talked about in previous articles, values in Clojure are immutable. When it comes to programmatically creating datasets, this might feel like an obstacle for those that are accustomed to incrementally populating an array as they iterate through a for loop. Consider creating an array of `nth` items in JavaScript: 

```
function createSeqArray(length) {
    let arr = []
    for (let i = 0; arr.length<length; i++){
        arr.push(i);
    }
    return arr;
}

createSeqArray(10) => [0,1,2,3,4,5,6,7,8,9]
```
But the way Clojure allows us to do these things is even easier. 

```
(range 10)
user=> [0 1 2 3 4 5 6 7 8 9]
```

This uses the function `range`, which generate an infinite sequence if no arguments are passed to it, but here is being to only give us the first ten values. If we gave it two arguments, the first would be the starting value (inclusive) and the second would be the ending value (exclusive).  

## Multiple Ways to Be Lazy

Clojure has multiple ways to generate and work with lazy sequences:
1. Functions that produce infinite sequence, like `range`, `iterate`, and `repeat`.
2. Functions that can process and return lazy sequences, like `map`, `filter`, `concat`, `take`, and `partition`.
3. Functions that allow us to create our own lazy sequences, like `lazy-seq` and `lazy-cat`.


## Infinity? That's a lot!!

At this point you might be thinking, "Hold on there, won't typing code that generates values infinitely crash our computer?" It's a logical question, but when working with lazy sequences, the answer generally is no &mdash; if you're not in a REPL. What makes them lazy is that they are not *immediately* evaluated; the values aren't available until we actually ask Clojure to do something with those values. For example: 

```
(take 10 (repeat 1))
user=> (1 1 1 1 1 1 1 1 1 1)
```
Here, `repeat` can potentially repeat the value `1` infinitely, but Clojure doesn't start evaluating the number of repeats right away. Instead, it waits until that function call `take 10` and then only gives us 10 values. 

It's like if someone asked a carpenter to make them "a bunch of end tables." Should that carpenter just start making more and more end tables until the client asks them stop? What if they never tell the carpenter to stop? And when do they want the tables to be done? No, the carpenter instead responds with "Okay, when you let me know how many you want, I'll be ready for you."

## The Consequences of Laziness

Remember when I said lazily-generating infinity was safe $mdash; if you're NOT in a REPL? You do NOT want to type something like `range` with no arguments or `repeat 1` directly into your REPL without wrapping it in a function like `take`. This is because a REPL forces immediately evaluation of your code and therefore kills laziness. Typing `range` with no ending argument directly into your REPL will cause your REPL to attempt to generate every single number from 0 to infinity until it crashes. If this does ever happen to you by accident and you're running your REPL in the terminal, you can type `ctrl + C` to kill the process before your computer freezes up. 

It is still possible to inadvertently cause stack overflow when you're not in your REPL though. In those scenarios we can coerce something back to being lazy until the next time we need it's output.

## Creating Laziness to Avoid Stack Overflow

Earlier today I was working on the Bowling Game Kata in Clojure and ran into a stack overflow when inputting a lazy sequence into a function. This was because I input `repeat 10` into the function and then did `drop 2` on that value, which generates a sequence that excludes the first two values and includes everything after that. This was Clojure's signal to start evaluating that lazy `repeat 10` that it had been sitting on. To avoid that, I wrapped the offending line of code in `lazy-seq` and then wrapped the parent function call in `take 10`. Basically, I told Clojure, "No, no, you just rest for now, and I'll let you know when I need those number from you, okay?"




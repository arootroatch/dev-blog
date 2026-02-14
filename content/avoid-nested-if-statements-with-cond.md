---
layout: blog
title: Avoid Nested `if` Statements with `cond`
author: Alex Root-Roatch
description: Clojure's `cond` provides a cleaner, more readable method for handling multiple conditional statements without nesting `if` statements.
date: 2024-05-29T19:51:46-6:00
updated: 2024-05-29T19:51:46-6:00
thumbnail: /img/clojure-banner.png
category:
  - Clojure
---

## A JavaScript State of Mind

In my journey learning Clojure, I often find myself thinking in terms of how I would write something in JavaScript and then trying to translate that into Clojure. While that approach might work decently well for Python or Java (or other syntactically-similar languages), Clojure has many unique ways of solving problems that are often more elegant. Often that means that, when I realize myself "translating," there's a more idiomatic solution that I should be looking for. 

A good example of this is nested `if` statements. Consider this function for returning a boolean if a number is prime:

```clojure
(defn prime? [number]
  (if (= 1 number)
    false
    (if (= 2 number)
      true
      (let [sqrt (Math/sqrt number)
            divisors (range 2 (inc sqrt))
            remainders (map #(rem number %1) divisors)
            zeroes (filter zero? remainders)]
        (empty? zeroes)))))
```

These nested if statements are the result of thinking in terms of a JavaScript `if...else if...else` construction. It works, but it's not very pretty. While JavaScript has those curly braces creating visual separation and each `else if` block wouldn't be a deeper indentation, Clojure's brevity makes this style of approach confusing and cluttered. 

It's the coding version of translating something literally from English to Spanish. Sure, "Es todo lo mismo a mí" may mean "It's all the same to me," and you might even be understood well enough, but it'll be broadcasting to your interlocutor that you're still learning Spanish. "Me da igual" is the idiomatic phrase you're looking for. 

## Speaking in Clojure

A more elegant solution that's more idiomatic to Clojure is to use `cond`. This is a function that can take multiple conditionals rather than nesting `if` statements, and it can make use of the `:else` keyword for when none of the conditions are true. 

Let's take a look at cleaning up our `prime?` function:

```clojure
(defn prime? [number]
  (cond (= 1 number) false
        (= 2 number) true
        :else (let [sqrt (Math/sqrt number)
                    divisors (range 2 (inc sqrt))
                    remainders (map #(rem number %1) divisors)
                    zeroes (filter zero? remainders)]
                (empty? zeroes))))
```

That is *much* easier to understand. 

## `case` vs `cond`

Using `cond` is very similar to `case`:

```clojure
(defn prime? [number]
  (case number
        1 false
        2 true
        (let [sqrt (Math/sqrt number)
              divisors (range 2 (inc sqrt))
              remainders (map #(rem number %1) divisors)
              zeroes (filter zero? remainders)]
            (empty? zeroes))))
```

It might actually be considered more readable. The main difference between `cond` and `case` is that `cond` evaluates each expression in order, just like chained `else if`s or `switch` statements in JavaScript, while `case` performs a constant-time dispatch, jumping directly to the code that needs to be executed, or the default defined at the end of the `case` if no cases match. That means that for larger functions with many expressions, `case` will be a much more performant option.


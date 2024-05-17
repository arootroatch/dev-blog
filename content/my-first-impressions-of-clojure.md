---
layout: blog
title: My First Impressions of Clojure
author: Alex Root-Roatch
description: My first look into a fully functional language began with confusion and ended with excitement
date: 2024-05-14T05:43:53.889Z
updated: 2024-05-14T05:43:53.889Z
thumbnail: /img/clojure-banner.png
category: Clojure
---

## Holy Parentheses

At first glance, Clojure seems to have more parentheses than it could possibly need. This is mainly due to the fact the Clojure is a completely functional language, and the way functions are called is by wrapping it in parentheses. *Everything* is a function in Clojure, so *everything* is wrapped in parentheses. Even defining a global variable is a function call in which you pass in the variable name and the value you want to bind to that variable. For example:


```
(def my-name "Alex")
```


Here the keyword `def` is being used to define the global variable `my-name` and bind the value of the string "Alex". `def` is the function call and `my-name` and "Alex" are the two arguments being passed to the function, and since we're invoking the function at that time, it's all wrapped in parentheses. 

## Goodbye Syntax

At second glance, however, Clojure has a striking *lack* of syntax. Unlike JavaScript, blocks of code aren't surrounded by curly braces, ends of lines aren't marked with semicolons, and commas aren't anywhere to be found in maps or vectors (the equivalent of JavaScript's objects and arrays, respectively). If statements in Clojure are so simple it almost makes the JavaScript ternary operator look verbose: 

```
(if ready? "I'm ready!" "I'm almost ready!")
```

Here, the if statement evaluates the boolean variable `ready?`. If it returns true, the string "I'm ready!" is returned, else "I'm almost ready!" is returned. In JavaScript, the equivalent using the ternary operator (the most succinct method) would look like this: 

```
ready ? "I'm ready" : "I'm almost ready!"
```

Anything more complex than this, and JavaScript adds curly braces, extra lines, and the `else` keyword: 

```
if (numOfApples > 4) {
  "Let's make a pie!"
} else {
  "We need more apples..."
}
```

But it stays short and sweet in Clojure: 

```
(if (> num-of-apples 4) "Let's make a pie!" "We need more apples...")
```

You may be noticing that in that last Clojure example, it seems like I put the greater-than sign in the wrong spot. That brings me to the next topic: 

## Prefix Notation

Clojure uses "prefix notation," meaning all the mathematical symbols go *before* the values, not between them. It doesn't make sense at first, but remember when I said everything in Clojure is a function? These symbols aren't "operators" like they are in JavaScript; they're functions, and the values involved are the arguments to the function. The symbols go first because we are calling the function and then passing in the arguments. 

While this may seem strange at first, I actually think it makes a lot of sense because it keeps you thinking in terms of functions and return values. `(* 5 4)` is a function that `returns` `20`. In JavaScript, `5 * 4` also `returns` `20`, so even in JavaScript it *is* a function, but you can write a million mathematical expressions in JavaScript without ever consciously thing about it that way. `5 * 4` just *is* `20`; it's easy to not realize that it's the return value of a function. Prefix notation keeps the way I interpret the code consistent, "functions, arguments, return value."

## Immutability

All values in Clojure are immutable, meaning they **cannot be changed**. This is a concept that React developers will be familiar with due to the immutable way that React handles state. Updating a state variable in React requires using the setter function, which behind the scenes actually creates a new value rather than overwriting the old value and returns that new value. In JavaScript, however, you can still use the `let` keyword to define mutable variables, whereas in Clojure there is no such option. Basically, think of all variables and collections as `const`. 

This didn't really trip me up much until I started doing some 4Clojure algorithm exercises. In some array-sorting scenarios in JavaScript, I had found it useful to be able to declare an empty array and then push elements into that empty array as I looped over the original array.  For example, in getting all the even numbers from an array: 

```
function getEven(arr){
  let evenNums = [];
  arr.forEach((num)=>(
    if ((num % 2) = 0){
      evenNums.push(num);
    }
  ))
  return evenNums;
}
```

This approach is not an option in Clojure. Not only that, primitive for loops like `for(let i=0; i<arr.length; i++)` aren't an option in Clojure either since they depend upon the mutability of the variable `i`. Instead, we need to reach for things like `filter`, `map`, or `reduce`. In scenarios where those aren't enough, recursion must be used. I know, I know, "recursion" is a scary word for, meant for only the bravest devs. Thankfully, Clojure has a lot of really cool built-in functions that quickly make our developer lives easier, like `even?` and `odd?`: 

```
(fn [arr] (filter even? arr))
```

But wait! Doesn't JavaScript also have `filter`, `map`, and `reduce` methods? Yes it does! And those are often more performant and more readable than using primitive `for` loops. One really cool side effect I've found to learning the Clojure approach to programming is that, when I go back to writing JavaScript, my JavaScript code is better because I'm naturally reaching for these other array methods rather than using loops and mutable temporary arrays. 

## Closing Thoughts

When I first looked at Clojure, I was overwhelmed. It seemed so different from other programming languages I had used before like JavaScript, Python, bash, or VBA, and I was worried it was going to be difficult to pick up. However, as I dive deeper and continue learning the language, I keep finding gem after gem of how easy things are in Clojure and how succinct it is as a language. Something I might have written 10 lines of code to perform in JavaScript can often be done in one very readable and approachable line of Clojure. Built-in functions like `interleave` and `intersection` are extremely useful and make coding in Clojure more about what you're building than what code you're typing. All in all, I'm excited to keep learning about what other goodies Clojure has in store, and I can't wait to actually get to building things with it!
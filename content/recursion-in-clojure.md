---
layout: blog
title: Recursion in Clojure (and ways to avoid it!)
author: Alex Root-Roatch
description: Immutability means no JavaScript-style `for` loops, and so we must venture bravely into the coding world's "House of Stairs."
date: 2024-05-15T01:29:43.709Z
updated: 2024-05-15T01:29:43.709Z
thumbnail: /img/house-of-stairs.jpeg
category: 
  - Clojure
---

## Recursion?! I'm already lost.

In [my last blog post](https://arootroatch-blog.vercel.app/my-first-impressions-of-clojure), I mentioned that Clojure's immutability meant that primitive `for` loops like in JavaScript aren't an option, since they depend upon the mutability of the index variable and any arrays that you may be incrementally filling on each iteration. This means that we need to face the confusing world of *recursion*. 

So what is recursion? The shortest way to explain it is that it is **when a function calls itself**. If we aren't careful, it's very easy to end up with an infinite recursive loop of the function calling itself repeatedly with nothing to stop it. It's basically the coding equivalent to pointing a video camera at the screen that's showing its video feed, resulting in the screen displaying the same picture inside itself repeatedly. Or, for you action movie fans, like the [hall of mirrors scene](https://www.youtube.com/watch?v=7-TZCEyok_o) in "John Wick: Chapter 2." That's why it's important to have a condition that, when met, exits the function before another recursive call is executed. This is called the *base case*. 

## Recursive Countdown

So, what's this all look like and why would we use it? Consider this JavaScript example: 

```javascript
function countDownToOne(count) {
    console.log(count);

    if(count > 1) {
        count = count - 1;

        countDownToOne(count);

    } else {
        return;
    };
};

countDownToOne(5);

```

Here, we see a function that will print the value of `count` to the console, decrement the value of `count` by 1 and then call itself until expression `if(count > 1)` returns `false`, at which case the function stops. The result is every number from the initial value of `count` down to 1 being printed to the console. If the *base case* of `(count > 1)` wasn't present, the recursive call would continue into negative infinity - until your computer runs out of memory, resulting in a *stack overflow*. Wait, isn't that the name of a popular code review site? Hm, must be a coincidence...

## Factorial Overflow

While that may seem understandable enough, it gets a little trickier to understand when the recursive call happens inside of one of the function's operations. Consider this JavaScript example of calculating factorials:

```javascript
function factorial(n){
  if(n <= 1){
    return n;
  } else {
   return n * factorial(n-1);
  }
}
```

And the same example written in Clojure:

```clojure
(defn factorial [n]
  (if (<= n 1)
    n
    (* n (factorial (dec n)))))
```

So how exactly does that work? Let's start from the *base case* and work our way up. 

1. If a 1 or lower is the input of the function, the function returns `1`. 
2. If a 2 is the input, the function will `return` 2 multiplied by the return value of `factorial(1)`, which, we established, is 1. `2 * 1 = 2`
3. If the input is 3, the function will `return` 3 multiplied by the return value of `factorial(2)`. This we have `3 * 2 = 6`.
4. If the input is 4, the function will `return` 4 multiplied by the return value of `factorial(3)`, giving us `4 * 6 = 24`.

As you can see, for whatever number we input to the function, we will have the same amount of function calls with each of their `return` values bubbling up to the level where the function was originally called. This is fine for small instances where we know the number of recursive calls is unlikely to reach stack overflow memory limitations, but if we input too large of a number, we quickly run into errors or run the risk of freezing up our IDE or browser window. Luckily, Clojure has a solution for that. 

## Tail Call Optimization

To avoid stack overflow, we can take advantage of something called *tail call optimization*. Simply put, it's a way that the compiler can make a function call without it taking up any additional stack space. In Clojure, we can do that with `loop` and `recur`. Let's refactor our factorial function: 

```clojure
(defn factorial [n]
  (loop [n n
         acc 1]
    (if (<= n 1)
      acc
      (recur (dec n) (* n acc)))))
```

Here we are using the `loop` function in Clojure to declare two variable bindings, `n` and `acc`, and act as a target for the `recur` function, telling the program where to jump back to on each recursion. The values passed to `recur` are updated values for `n` and `acc` so that we aren't passing the same values in on each recursion. 

Let's break down what's happening, using an input of 4: 

1. `loop` declares two variables, `n` and `acc`. `n` gets a binding of `4`, our input value, and `acc` is initialized with a value of 1, our *base case*. 
2. 4 is not less than or equal to 1, so `recur` is called and passed updated values for our two variables. `n` is decremented from 4 to 3, and `acc` is updated from 1 to `4 * 1`, which is 4.
3. 3 doesn't meet our *base case*, so `recur` is called again with `n` now with a value of 2 and `acc` with the value of `4 * 3`, which is 12.
4. 2 doesn't meet our *base case*, so `recur` is called again with `n` now with a value of 1 and `acc` with the value of `12 * 2`, which is 24.
5. 1 does meet our *base case*, so the function returns the current value of `acc`, which is 24, and the function stops. 

## A non-recursive option

But surely, with all of Clojure's magic, there's a way to do this without recursion? Why yes, yes there is. Actually, there's multiple ways to do it. Here's the first approach that comes to my mind: 

```clojure
(defn factorial [n]
  (apply * (range 1 (inc n))))
```

This uses the `range` function to create a vector of the values from 1 to the value passed into the function. When given two arguments, `range` takes the first argument as the start value and the second argument as the end value. *However*, that end value is *exclusive*, meaning the vector returned will only include the numbers less than the number passed to the function. That's why the second argument to `range` is `inc n`: now if a 5 is the input, 6 will be the ending argument to `range`, and the resulting vector will be `[1 2 3 4 5]`. 

Now, if we try to pass that vector directly to the multiplication function, like so: `(* [1 2 3 4 5 ])`, it won't work because the function is only seeing one argument when it needs at least 2. That's where `apply` comes in, essentially turning it into `(* 1 2 3 4 5)`.

## Conclusion

Recursion can be disorienting, and understanding it might feel like battling your way through a hall of mirrors sometimes. Hopefully, this article has helped you make sense of how recursion works, how to implement in Clojure, and how to use *tail call optimization* to avoid *stack overflow*. And if you're still confused, you could always try using Clojure's many built-in higher-order functions and macros to devise a non-recursive solution.





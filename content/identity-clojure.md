---
layout: blog
title: Using Identity in Clojure
author: Alex Root-Roatch
description: Clojure's `identity` function is useful when we want to pass a single value but have to pass a function.
date: 2024-05-31T17:45:50-6:00
updated: 2024-05-31T17:45:50-6:00
thumbnail: /img/hotpotato.webp
category: 
  - Clojure
---

## Callback Blocked

Sometimes, I want to be able to pass in a single value to a function that requires a callback function. Just earlier today, for example, I was demonstrating the Open-Closed Principle using `defmulti` and `defmethod` (more on those [here](https://arootroatch-blog.vercel.app/runtime-polymorphism)). I wanted to dispatch each `defmethod` based on the keyword that was passed into the multimethod. `defmulti`, though, doesn't accept a single value like keywords, strings, or integers; it requires a callback function. 

Enter: the `identity` function.

## Hot Potato

I like to think of `identity` as the "hot potato" function, because it simply returns whatever argument it receives. It's the same as writing `(fn [x] x)`. So when used as a callback function to functions like `map`, `filter`, or `defmulti`, it simply takes in the value that you give it and spits it right back out to `map`, `filter`, or `defmulti`. 

For example: 

```clojure
(defmulti coffee-bot identity)
(defmethod coffee-bot :V60 [_] "Here’s your pour over!")
(defmethod coffee-bot :Nespresso [_] "Here’s your Nespresso!")

(coffee-bot :V60) => "Here's your pour over!"
```

As far as we're concerned when calling the function, it takes our keyword just the same as if `defmulti` didn't require a callback. 

To tie that in with [yesterday's post](https://arootroatch-blog.vercel.app/partition), this works great if you want to sort a collection into sub-collections of the same item:

```clojure
user=> (partition-by identity (sort "abcdaabccc"))
((\a \a \a) (\b \b) (\c \c \c \c) (\d))
```



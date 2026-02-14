---
layout: blog
title: Two functions in one with `group-by`
author: Alex Root-Roatch
description: Getting the result of a function and it's opposite at one time
date: 2024-11-04T21:24:58-6:00
updated: 2024-11-04T21:24:58-6:00
thumbnail: /img/clojure-banner.png
category: [ Clojure ]
---

## Filter and Remove

Recently in Aesop we've needed to be able to filter stories by whether they are linked to Jira issues or not. My initial
instinct for scenarios like this is to reach for `filter` and `remove` &mdash; the latter of which take the same
predicate function as `filter` and returns the opposite result.

Clojure being full of cool tricks though, there's a way to accomplish this with in one fell swoop instead of iterating
through the collection twice: `group-by`. This function takes a function and returns a map of the elements in a given
sequence grouped by common return values. For example, the predicate function that I would normally pass into `filter`
returns a boolean. When putting this same function into `group-by`, the result is a map with two keys, `true`
and `false`, the value of each being a sequence of the elements that yielded each result.

```clojure
(group-by even? [1 2 3 4 5 6 7 8 9])

=> {true  [2 4 6 8]
    false [1 3 5 7 9]}
```

## Not Just Predicates

Pretty much any function can be used with `group-by`, though, not just predicates. For example, if we wanted to sort a
collection of words by their length:

```clojure
(group-by count ["the" "quick" "brown" "fox" "jumps" "over" "the" "lazy" "dog"])

=> {3 ["the" "fox" "the" "dog"]
    4 ["over" "lazy"]
    5 ["quick" "brown" "jumps"]}
```

## Sets as Functions

And of course, since code is all just data in functional programming, sets can be used as functions as well to test
membership:

```clojure
(group-by set ["meat" "mat" "team" "mate" "eat" "tea"])

=> {#{\a \e \m \t} ["meat" "team" "mate"],
    #{\a \m \t}    ["mat"], 
    #{\a \e \t}    ["eat" "tea"]}
```

## Conclusion

This definitely seems like one of those functions that can be used in a lot of different ways, especially when it comes to using custom functions inside it. This is what I like to call a "Swiss Army knife" function: it's good to have in your pocket because you never know when it might come in handy, and you just might find yourself using it for something you wouldn't have thought of until that moment.

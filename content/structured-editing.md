---
layout: blog
title: Cursive's Structured Editing
author: Alex Root-Roatch
description: The Cursive plug-in provides a lot of useful features to help type Clojure code faster and easier
date: 2024-06-12T20:14:46-6:00
updated: 2024-06-12T20:14:46-6:00
thumbnail: /img/clojure-banner.png
category: Workflows
---

## What is Cursive? 

Cursive is an IntelliJ extension written in Clojure specifically for writing Clojure and ClojureScript code. It provides a lot of tooling to make writing Clojure easier, like a REPL sidebar, quick navigation, code completion, structural editing, code formatting, and a debugger. Due to Clojure running on the JVM and having Java interop, IntelliJ and Cursive is a very popular choice among Clojure developers due to IntelliJ's reputation as one of the best IDEs for Java and Kotlin. 

In this article I will be focusing specifically on all the cool features that Cursive's structural editing provides when writing Clojure code, and more specifically the keyboard shortcuts that I find especially useful: Slurping, Barfing, and Threading. Structural editing in general is intended to make it easier to deal with all the parentheses we end up having in Clojure projects.  

## Slurping

Slurping takes code that is adjacent it to code that's inside parentheses, curly braces, square brackets, or double quotes, and pulls it into that form. This can be done both forwards and backwards. Consider this line of code: 

```
(println) (score board)
```

Oops! The `(score board)` function is supposed to be inside of `println.` If we put the cursor on `println`, slurp forwards will pull `(score board)` inside of `println`'s parentheses for us. 

If our cursor is over `(score board)` and we slurp backwards, it will pull `(println)` inside of `(score board)`. Not that we would want to do that in this scenario.

## Barfing

Yes, it's actually called barfing, because slurping wasn't amusing enough already. This does the opposite of slurping, and it also can be done forwards or backwards. Let's use the last example of slurping backwards and pulling `(println)` inside of `(score board)` by accident.

```
((println) score board)
```

Barfing backwards will push `(println)` back out of the parentheses of `(score board)`. 

Barfing forwards will push the word "board" out of the parentheses.

## Slurp and Barf on Your Keyboard

These functions can be found under Edit>Structural Editing, but real developers use keyboard shortcuts, right? 

To slurp forwards, press `Cmd`+`Shift`+`K`. To slurp backwards, press `Ctrl`+`Cmd`+`J`.

To barf forwards, press `Cmd`+`Shift`+`J`. To barf backwards, press `Ctrl`+`Cmd`+`K`.

These might seem weird at first, but they are actually really intuitive once you realize that barf forwards and slurp forwards are the inverse of each other, as well as slurp backwards and barf backwards. 

For example, if accidentally slurp forwards one too many times using `Cmd`+`Shift`+`K`, I can simply keep my fingers on `Cmd`+`Shift` and hit `J` to undo it. If I accidentally barf backwards with `Ctrl`+`Cmd`+`K`, I can undo it by keeping my fingers on `Ctrl`+`Cmd` and hit `J`. 

It does seem strange, though, that they trade letters for backwards instead of only switching from using `Shift` to `Ctrl`. It would be friendlier for me if slurp was always `K` and barf was always `J`, that way it's just a choice between `Shift` for forwards and `Ctrl` for backwards. I may end up customizing that keybinding to make it that way. 
 
## Thread and Unthread Form
 
The last nifty keyboard trick that Cursive gives us is threading and unthreading nested code. Take a look at this code for solving problem eight of the Euler project: 

```
(defn euler-8 [n]
  (->> thousand-digit-number
       (create-vector-of-digits)
       (partition n 1)
       (map #(reduce * %))
       (sort <)
       (last)))
```
Unthread form will revert our threading back to a normal nested structure on layer of parentheses at a time, starting with the outer. So the first time, it will wrap our entire form around `(last)`, then wrap it all around `(sort)` but keep last on the outside, until we have: 

```
(defn euler-8 [n]
  (last (sort < (map #(reduce * %) (partition n 1 (create-vector-of-digits thousand-digit-number))))))
```
Now let's reverse that. If we put our cursor over `thousand-digit-number` and choose thread form, it will ask us if we want to thread last or thread first, and then thread `thousand-digit-number` into `(create-vector-of-digits)`. The next time we hit thread form, it will move `partition` into the thread, then `map`, until we end up back where we started. This is super handy if you find yourself with deeply nested code that you would like to refactor with the threading macros without having to retype anything.

The keyboard shortcut for threading is `Ctrl`+`Option`+`,` and unthreading is `Ctrl`+`Option`+`.`.


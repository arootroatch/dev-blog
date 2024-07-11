---
layout: blog
title: Launching Quil from the Command Line
author: Alex Root-Roatch
description: Making `lein run gui` launch Quil while retaining the previous `lein run` command for the terminal UI
date: 2024-07-04T11:45:31-6:00
updated: 2024-07-10T11:45:31-6:00
thumbnail: /img/clojure-banner.png
category: Clojure
---

> UPDATE: The third section of this post, "Leveraging Multi-Arity", states that running `lein run` without arguments no longer works after adding `&args` to `main`. This is because this syntax is incorrect. To be variadic, there should be a space after the ampersand: `& args`. This allows for both `lein run` and `lein run gui` to work properly without needing multi-arity.
> 
> Also, there's a better way to launch Quil than using `load-file`, as discussed in [this post](https://arootroatch-blog.vercel.app/better-way-to-launch-quil).

## Programmatically Launching Quil

This week I'm adding a GUI to my tic-tac-toe application. It needs to launch as a result of a terminal command and not as the result of a prompt from inside the terminal version of the game. All previous terminal functionality needs to stay intact. 

Since every time I've launched Quil it's been by evaluating the Quil file from inside my IDE, the first thing I set out to do is figure out how to launch Quil from inside the code. Since Quil automatically launches when the file is evaluated, this was relatively easy using `load-file`. By calling `load-file` and passing in the filepath of the Quil file as a string starting from the `src` directory, I was able to get Quil to launch from the code.

## Adding Arguments to Main

Next was figuring out how to do this as the result of a terminal command without first launching the terminal-based version of the game. Since `lein run` calls `-main`, it's possible to pass arguments to `-main` by passing them as arguments to `lein run`.

To get this working, I first needed to make `-main` take an argument, otherwise passing an argument to `lein run` would result in an "incorrect arity" error. To allow for a variety of argument counts to be passed in, I added a variadic parameter `[&args]`. Now if I type `lein run gui`, the value of `&args` will be the string `"gui"`. This now means I can add this to `-main`:

```
(let [gui (if (= "gui" &args) 
            (do (load-file [filepath as string]) true) 
            false)] [fn body])
```

Now the variable `gui` will be set to `true` if I type `lein run gui` and Quil we be launched in the process.

## Leveraging Multi-Arity

Now that `-main` requires arguments, I can't simply type `lein run` to run the terminal-based version of the game anymore. I could simply make it so the user has to type in something like "terminal" after `lein run` to specify that they want the terminal version of the game, but that's changing previous functionality in order to implement new functionality. 

Instead, I used multi-arity to allow `-main` to not require arguments. If called without arguments, it sets `gui` to false and doesn't launch Quil. Problem solved! 



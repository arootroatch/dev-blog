---
layout: blog
title: Compiling ClojureScript for Production
author: Alex Root-Roatch
description: Care for a game of tic-tac-toe?
date: 2024-09-11T01:57:22-6:00
updated: 2024-09-11T01:57:22-6:00
thumbnail: /img/cljs.png
category: [Clojure]
---


Today I finished up making a ClojureScript/React version of my tic-tac-toe, with a good handful of issues to troubleshoot along the way. 

## Reagent Atoms Re-render, Regular Atoms Don't

My first issue dealt with a test not working properly. I was testing to make sure that the proper token was being displayed in the button's inner text when it was clicked, and even though it was working properly in the browser, the component did not seem to be re-rendering when running the test. 

With some help from my mentor Jake, we figured out that it was because the atom that I was passing in was not a Reagent atom, so changes to the atom were not going to trigger a re-render. 

## ClojureScript Can't Refer All

Another issue that I ran into was when trying to pull in my AI functions. As soon as I required the namespaces, I was met with a "Cannot create ISeq from keyword" exception. The exception, of course, simply said the error was on the first line in the first column, so that wasn't very helpful. 

Through a very tedious process of commenting out the entire file and incrementally un-commenting lines of code to find the line that was the culprit, I discovered that ClojureScript is apparently incompatible with `:refer :all` in require statements, as it will always search for a vector after the `:refer` keyword. This led to a good chunk of my time being spent refactoring multiple files and their associated test files. 

Moving forward, I will always use `:as sut` ("system under test") for the file being tested, `:refer [should it describe context etc...]` for Speclj functions, and appropriately names aliases for any other files that need to be pulled in to avoid this issue in the future. 

## `useEffect` Issues

Trying to figure out how to implement things I would normally do in React in ClojureScript with Reagent has been tricky. For example, I ran into the issue where, after playing a move, the UI waits for the AI to finish picking its move before re-rendering. 

In React, the `useEffect` hook is used to run code after a component has rendered, so I decided to put the AI move function inside of `useEffect` in the board component. My thinking was that this would cause the board component to re-render, displaying the user's move, and then trigger the AI move and re-render again after the AI chooses its move. 

I didn't get the desired outcome with this, and I'm still not quite sure why.

## Compiling for Production

Finally it was time to create a production build and deploy. First, I needed to add production settings to my configuration in `resources/config/cljs.edn`: 

```
 :production    {:cache-analysis false
                 :optimizations  :advanced
                 :output-dir     "out"
                 :output-to      "out/tic_tac_toe_dev.js"
                 :pretty-print   false
                 :sources        ["src/cljc" "src/cljs"]
                 :specs          false
                 :verbose        false
                 }
```

I chose to have my production build go to an `out` folder instead of the `resources/public` folder that the development build goes to. 

Then by reading the [Scaffold README](https://github.com/cleancoders/c3kit-scaffold) I found that the production build command is `C3_ENV=production clj -M:test:cljs`.

But wait! Another error! For some reason (seemingly related to p5.js), my Quil dependency for the desktop GUI app was causing a "duplicate extern input" error with ClojureScript, even though nothing in my `.cljs` or `.cljc` directories use Quil. In order for the production build to work, I needed to comment out the Quil dependency in my `deps.edn` first. 

## Care for a Game?

<iframe src="/ttt/index.html" id="ttt-iframe"></iframe>


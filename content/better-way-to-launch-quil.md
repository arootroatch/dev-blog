---
layout: blog
title: A Better Way to Launch Quil
author: Alex Root-Roatch
description:
  "TL;DR: wrap `defsketch` in a function. Once again, I overlooked the simplest solution."
date: 2024-07-10T18:41:23-6:00
updated: 2024-07-10T18:41:23-6:00
thumbnail: /img/clojure-banner.png
category: 
  - Clojure
---

## `defsketch` Is the One Who Knocks

In a [previous post](https://arootroatch-blog.vercel.app/launching-quil-commmand-line), I talked about my use of `load-file` to programmatically launch Quil. I mentioned how Quil launches automatically when the file is evaluated, which is why I chose to use `load-file`. However, what I didn't mention was the reason *why* Quil was launched when the file was evaluated, and that is because `defsketch` is the macro that launches Quil. So if I wanted to be able to call Quil just like I would call any function, I simply needed to wrap `defsketch` in a function. That would stop Quil from launching everytime the file is evaluated and would make it so Quil only launched when the function containing `defsketch` is called.

## Easier Testing

A positive side effect of doing this is that Quil no longer automatically launches when I run my tests. Previously, I would have to comment out `defsketch` to make sure Quil didn't launch when running tests. Why I didn't think to simply wrap `defsketch` in a function at that point rather than commenting it out, I don't know. 



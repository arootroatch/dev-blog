---
layout: blog
title: Choosing Good Names
author: Alex Root-Roatch
description: You shouldn't feel like you need to crack a code to read your code.
date: 2024-05-28T15:55:23-6:00
updated: 2024-05-28T15:55:23-6:00
thumbnail: /img/cryptex.jpg
category: 
  - Clean Code Practices
---

## The Hardest Part of Coding

Phil Karlton once joked that "There are only two hard things in Computer Science: cache invalidation and naming things."

Naming? How hard can that be? Just call the first variable `a` and go in alphabetical order from there, right? 

While that may seem okay if you're the only developer on a project (after all, *you* know what all the code does), it would be very confusing to any other developer that wants to make sense of your code. Not only that, it would be very confusing to you after you step away from the project for a few months and then decide to jump back in and make some changes. As you're swimming through a sea of meaningless variable names, you'll realize that past you was very inconsiderate of future you. 

As Martin Fowler once said, "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

## Comments Aren't the Answer

Well all those bad names are an easy fix, right? We'll just add comments explaining what each variable is!

Wrong! As "Uncle Bob" Martin says in *Clean Code*, comments are to "compensate for our failure to express ourself [sic] in code." Writing comments all over our code in order to explain what it does is just advertising to whoever reads it that we didn't name things in a meaningful way to begin with. 

Not only that, it's not practical to put that comment explaining what `a` is everywhere it's used. If you put the comment where the variable is first declared, you still have to remember that that's what the variable is later down the file when the variable is used. 

What about when the code changes? Now we have to go update all the comments, too. We've created double work for ourselves.

As long as we can name things, why not give them names that *mean* something, names that express the intent of the variables, functions, and classes in the file? If the variable is what the ice cream shop's flavor of the week is, let's call it `flavor-of-the-week`!

To quote "Uncle Bob" again, "If a name requires a comment, then the name does not reveal its intent."

## Code Should Read Like Well-Written Prose

If we want our code to be as easily understandable as possible, we can name things in a way that make our code read like a story that describes exactly what the program does. We do this by using the proper parts of speech for the different parts of our code.

- Function names should be verbs or verb phrases. After all, these are the parts of our code that *do* things. For example, `get-name` or `post-payment`.
- Variable and class names should be nouns or noun phrases, like `Customer` or `balance-due`.
- Booleans and functions that return booleans should read like predicates, like `is-ready?`

## Name Length Depends on Scope

Since naming things is all about providing the proper clarity in our code, context is important. As such, there are different guidelines for naming things based on their scope. 

- Variable name lengths are *directly proportional* to the scope of the variable. 
  - In a short function where the variable is private to that function, it's easy to see the context of that variable and what it's for. Short names, sometimes even a single letter like `n` instead of `number`, may be sufficient and more readable than something that's unnecessarily descriptive.
- Function and class name lengths are *inversely proportional* to the scope of the function or class.
  - In a public function that's used all over the code base, we want the name to be convenient to type and convenient to remember, but not so short that the name isn't meaningful. The name should still convey the intent of the function.
  - In private functions, we aren't as concerned with it being easy to type of easy to remember since that's the only location in which the function is used. In that case, it's okay to make the function name longer and more descriptive to ensure the reader understands what the function is doing.

## Beneficial Side Effects

Making sure that our names are meaningful forces us to really understand the code we are writing, and that might help us realize when we need to refactor. For example, we might name our function in a way the describes exactly what it does only to discover that it does way more than one thing and needs to be refactored into multiple functions.

## Final Tips
- Don't use words that are also data types unless they actually are that data type. If `accounts-list` is a vector or a hash-map, then it's not a list and shouldn't be called one. Instead, just call it `accounts` or something similar.
- Avoid noise words like "data" or "info." All of our datatypes hopefully store data, and data is info. Using these words in names serves no purpose.
- Pick one word per concept. Don't use `fetch` and `get` interchangeably. Different words should be used to mean different things.

If we choose meaningful names that have the appropriate parts of speech, our code will explain itself. Other developers will be able to read our code like a story that narrates what the application does. This makes our code much easier understand, and code that is understandable is more maintainable. Also, when we understand our code deeply enough to give everything a meaningful name, we structure our code better. 


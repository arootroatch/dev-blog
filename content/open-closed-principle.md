---
layout: blog
title: The Open-Closed Principle
author: Alex Root-Roatch
description: When it comes to structuring our code, there's something to be learned from the outlets in our homes.
date: 2024-06-03T20:47:54-6:00
updated: 2024-06-03T20:47:54-6:00
thumbnail: /img/open-closed-post/power-strips.webp
category: 
  - Clean Code Practices
---

## What Is the Open-Closed Principle?

The Open-Closed Principle state that a module, class, or function should be *open* for extension but *closed* for modification. "Open for extension" means that we can change or add to the behavior of our module, class, or function easily. "Closed for modification" means that we aren't going in and changing the pre-existing source code in order to make these feature changes. 

Think of it like an outlet in your house. If you want to be able to plug more than just two things in, you can use a tri-tap or a power strip. This is much more convenient and safer than opening up the outlet and changing the wiring.

## The Jetsons' Coffee Maker

As an example, let's say we have a Jetsons-style robot that brews our coffee for us. It knows how to brew coffee using the Mr. Coffee machine, the V60, and the Chemex. These methods are stored in the `class` "CoffeeBot." But what if I buy a Nespresso and want to add that functionality to the coffee bot as well?

<img src="/img/open-closed-post/coffee-bot-class.png" alt="Coffee Bot Class" class="small-img" />

With our current code structure, I would have to go into the CoffeeBot Class and add a method for using the Nespresso machine. That's changing the pre-existing source code of the class. The goal is for adding new features to only require adding new code, not changing old code. 

To make the coffee bot extensible, we can implement an interface for brew technique, and add new brew techniques in their own classes that use that interface.

![Brew Technique Interface](/img/open-closed-post/brew-interface.jpeg)


## The Crystal Ball Problem

It’s important to note that it is very difficult to implement the OCP on every part of your application, and it’s often not practical to do so. We can only write abstractions that protect from future changes if we know what those changes are going to be. There are two different approaches to the crystal ball problem: Big Design Up Front and Agile Design.

## Solution 1: Big Design Up Front

Big Design Up Front (BDUF) involves trying to anticipate everything the client could possibly want to add in the future and creating all the interfaces for those potential features ahead of time, but that often leads to overcomplicated designs with a bunch of abstractions that aren’t necessary.

Going back to the electrical outlet example, it would be like putting a power strip on every outlet in your house just because one day you might need the extra plugins. You'd end up with a lot of unused power strips cluttering up every wall and corner!

## Solution 2: Agile Design

Typically, what’s most likely to change in the future is what has already changed in the past. So when you run out of outlets in one spot in your house, you insert a 6 outlet power strip, so you can plug in what you need and have room for more plugs down the road. 

That’s where Agile Design comes in. We want to get a simple iteration to you client as fast as possible in order to receive feedback as fast as possible, that way we can discover what kind of changes are likely. Then with each iteration we open our system up to those types of extensions while closing those modules for future modifications. 

## But What About Functional Programming? 

While originally created with Object-Oriented languages in mind, this design principle is still applicable and highly valuable in functional programming.

Say we have a coffee-bot function that, when called, returns “Here’s your coffee!”

```clojure
user=> (coffee-bot)
"Here's your coffee!"
```

But what if we want to be able to pass in different brew techniques? For example: 

```clojure
user=> (coffee-bot "V60")
"Here's your V60 pour over!"
```

We could get it working with a case statement like this:

```clojure
(defn coffee-bot [brew-method]
    (case brew-method
        "V60" "Here's your pourover!"
        "Here's your coffee!"))
```

...but now if we wanted to add Nespresso or Chemex we’d have to go back into the source code for this function and add lines to the case statement, and that violates the Open-Closed Principle. 

Instead, we can use a [multi-method](https://arootroatch-blog.vercel.app/runtime-polymorphism#h2-2). 

```clojure
(defmulti coffee-bot identity)
(defmethod coffee-bot :V60 [_] "Here's your pour over!")
(defmethod coffee-bot :Nespresso [_] "Here's your Nespresso!")
(defmethod coffee-bot :Mr-Coffee [_] "Here's your drip coffee!")
```

Now if we want to add more brewing techniques, we simply add a new `defmethod` for the new brewing method and there’s no need to change any of the previous code. 

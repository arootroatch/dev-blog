---
layout: blog
title: Delaying Evalution in Clojure
author: Alex Root-Roatch
description: Making sure functions aren't called until they are needed
date: 2024-10-21T21:06:39-6:00
updated: 2024-10-21T21:06:39-6:00
thumbnail: /img/clojure-banner.png
category: [Clojure]
---

## Wait! Not Yet!

Recently I've been dealing with a lot of database calls and API calls. Sometimes, I want to be able to put a database call or an API call in a let binding so that I can work with its response in the function body. This can lead to problems, since this will cause the data request to execute before it's needed. For example: 

```clojure
(defn sync! [epic-story]
  (let [link       (by-epic epic-story)
        jira-issue (delay (epic->jira epic-story))]
    (if story
      (jira/edit-issue! @jira-issue)
      (new-issue! epic-story))))
```

This function takes in story data from Epic, reformats it for Jira, and makes a post request to Jira to update a Jira issue accordingly. The first let binding, `link`, takes in the Epic story and searches the database to see if it's already linked to a Jira issue. The second let binding converts the Epic story to a Jira issue. The `epic->jira` function in this let binding also performs API calls and database queries, but a quick look into the `if` statement reveals that the result of this function, saved in the symbol `jira-issue`, is only used if there's a database entity for the Epic story. Without wrapping this in `delay`, it would execute those database calls and API calls only to discover none of them were necessary. 

Instead, wrapping it in `delay` means that the code won't be executed until it is dereferenced with an "at" sign, like using an atom. Not only will that be the first time the code is executed, it will also be the only time it's executed. If this function were to deref `jira-issue` again, it would use the same data that it already evaluated, retrieved from cache. 

## An OOP Design Pattern

The fact that delays are only ever evaluated once is reminiscent of a Gang of Four design pattern: the Singleton. The Singleton pattern is useful in Object-Oriented languages when it's necessary to limit a class to only one single instance, either by only providing static methods that refer to the single instance or by making the constructor of the class private, making it impossible to create new instances. 

While the main benefit of using the `delay` function in the above example was to make sure certain code didn't run until it was actually needed, the single-evaluation nature of `delay` means that it could also be useful in scenarios where we simply don't want the code to re-evaluate whenever it's used, much like limiting the creation of new instances in Java. 


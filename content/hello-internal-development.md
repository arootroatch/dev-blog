---
layout: blog
title: "Hello, Internal Development!"
author: Alex Root-Roatch
description: Four months into being an apprentice, I get to work on real products!
date: 2024-09-11T20:19:19-6:00
updated: 2024-09-11T20:19:19-6:00
thumbnail: /img/code-banner.jpg
category: [Uncategorized]
---

## A Crazy Four Months

Today I've completed phase three of my apprenticeship at Clean Coders, and it's been a crazy four months. Before getting the apprenticeship opportunity, I had to build an unbeatable tic-tac-toe game, which I built in vanilla JavaScript. Now I've built 4 more implementations of the game: terminal, desktop GUI, a completely server-side rendered web version, and a React version. All of them were written in Clojure, with the React version being written in ClojureScript. 

In my vanilla JavaScript version, the user always played first and the AI player was always unbeatable. In all of my Clojure implementations, the AI player has three levels of difficulty, and the user could choose who went first or even do a human vs human game or two AIs against each other. In all but the React version, the game is connected to a PostgreSQL database as well as logging games locally as EDN files. 

In addition, I've also completed a large back-end project in Java and learned how to compile it into a JAR file. I have used Clojure to interop with both Java and JavaScript, and it's honestly so cool to be able to use Clojure for both powerful backend programming and building complex React front ends. 

All of these projects were of course done using TDD, which is a huge learning curve in itself, especially since writing tests at all was new to me when I started. Being able to refactor without being afraid of breaking something is an absolute game changer, and it was really cool to write tests for a React GUI that could click all the buttons for me and ensure everything was working properly without having to manually test in the browser. 

## Phase 4: Internal Development

Now I'm officially on Internal Development, which deals with maintaining the Clean Coders website, our project management software Epic, and story estimating platform Poker. I'm very excited to be working on software that's in production and being used by the team and our clients. It is intimidating, though, as these code bases are very large and the other apprentices that were on internal dev have moved on to the position of Craftsman. 

Currently, there's a lot of pressure from some of our clients that use Jira for Jira and Epic to sync with each other, which was a story that was started by the others that will now be for me to finish. These next few days will be full of familiarizing myself with the Epic codebase and learning Datomic, which is the Clojure database used in these codebases. 

I *was* able to fix something on the Clean Coders website today. The dropdown on the video library page to select a specific category was too small to display the labels, which I was able to fix, commit, and push to production. It felt good to accomplish something on my first day of internal development. 
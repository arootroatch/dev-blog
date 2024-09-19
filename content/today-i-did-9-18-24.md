---
layout: blog
title: "Today I Did: 9-18-24"
author: Alex Root-Roatch
description: Infrastructure and making buttons
date: 2024-09-18T20:53:37-6:00
updated: 2024-09-18T20:53:37-6:00
thumbnail: /img/code-banner.jpg
category: [Uncategorized]
---

## More AWS Infrastructure

To start off today, I finished setting up our repo that automates managing our AWS infrastructure to be able to work for both the sandbox account and the production account. This was a little nerve racking because if I broke anything it would affect people's ability to manage our servers for software currently in production. Of course, if that happened, we could use git to revert the changes. Luckily, the updates I made to the video dropdown on the Clean Coders video library still needed to be pushed to production, so my mentor Jake helped me push those updates to production after pulling my changes to the infrastructure repo, and everything still worked as intended. 

## Making Some Buttons

In the afternoon, I added buttons in Epic to toggle between the project view and the reports view. As part of a design change to Epic, I discovered there were 30 tests that were failing due to elements being removed from the page. It was tempting to delete all the tests referencing the removed elements, but with some closer reading of the code, it appeared that doing so would lead to some features of the page not being tested. Figuring out what tests to keep and how to refactor these tests will give me something to do tomorrow morning. 




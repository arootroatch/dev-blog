---
layout: blog
title: Testing Database Functions
author: Alex Root-Roatch
description: Tests shouldn't assume what's in a database. Each test should populate and delete the test data each time.
date: 2024-08-29T21:18:26-6:00
updated: 2024-08-29T21:18:26-6:00
thumbnail: /img/TDD.webp
category: [ Uncategorized ]
---

## Failing Tests?! But I Didn't Change Any Code!

Earlier this week, I was working on an app that pulled in my Clojure tic-tac-toe as a library. For part of this project, I wanted to grab all the game IDs from the database if the game matched certain criteria. In order to test that the right data was getting filtered out, I added a handful of extra entries to the test database (a separate database from the one the app uses at runtime) that were all games that should be filtered out. 

Then, when going to the original tic-tac-toe repo and re-running the tests, almost all of my database tests that use that same test database failed! This was because the tests were reading data from the database assuming that the data was never going to change. 

For any tests that were writing to the database, I had stubbed out the actual function that wrote to the database after making sure it worked as a way of trying to ensure the database wouldn't be changed. This meant that not only were my tests fragile and dependent on circumstances outside their control, they also weren't actually testing that they were writing to the database anymore either!

To solve this, I created a file in my `spec` directory of test data. Then I refactored all of my tests to first clear any and all data in the database to make sure that the tests are starting with an empty test. Then each test first populates that database with the data it needs, runs the test, and then clears the database before proceeding to the next test. 

---
layout: blog
title: Connecting Clojure to PostgreSQL
author: Alex Root-Roatch
description: Getting my tic-tac-toe set up with a real database this time
date: 2024-07-29T19:41:47-6:00
updated: 2024-07-29T19:41:47-6:00
thumbnail: /img/psql-banner.png
category: [ SQL, Clojure ]
---

## Installing PostgreSQL

This week, I've been working on setting up a locally hosted PostgreSQL database for my tic-tac-toe application. To
start, I needed to install postgres on my machine, which I installed using homebrew:

```
brew install postgresql
```

Then to get it running, I used:

```
brew services start postgresql
```

This adds postgres to the services that run whenever my computer is turned on. To start postgres without it always
running in the background afterward, use:

```
brew services run postgresql
```

Then I created one database called `ttt` and another called `ttt-test`, which has all the same columns so that I have
mock database for testing. This was done with:

```
createdb ttt
```

Then to interact with the new database:

```
psql ttt
```

## Importing next.jdbc

The next step was getting my application to be able to connect to the database and issue SQL commands and queries from
inside of Clojure. For this I used [next.jdbc](https://github.com/seancorfield/next-jdbc). Adding it to my Leiningen
dependencies was all I needed to do, although I did run into a hiccup due to running Clojure 1.8. Next.jdbc requires
Clojure 1.10 or later, so a quick upgrade of my Clojure version in my project.clj got me up and running.

## Watch Out for Type Errors

With SQL being statically typed, I ran into a few issues inserting rows to the database. For example, if the game is not in "Computer vs Computer" mode, the `:second-ai-level` key would have a value of `nil` in the `game-state` map. Since this column in the database is typed as an integer, this led to a syntax error when trying to add it to the database. To prevent this, I needed to put extra checks in place in the function that formats the SQL command to ensure that any nil values that would be posted to integer columns were changed to zeros.


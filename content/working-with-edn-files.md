---
layout: blog
title: Working with EDN Files
author: Alex Root-Roatch
description: Using Clojure's version of JSON as a basic database for logging tic-tac-toe games
date: 2024-07-15T21:20:37-6:00
updated: 2024-07-15T21:20:37-6:00
thumbnail: /img/clojure-banner.png
category: 
  - Clojure
---

## The Basic Functions

### Slurp

To read an EDN file into memory, `slurp` reads the contents of a file and returns the contents as a string. To parse this back to usable Clojure, there's `clojure.edn/read-string`. However, this will only return the first object in the string, so if the file contains multiple maps or vectors rather than being nested in one large vector, only the first map will be returned. To get around this, I found creating a string version of a vector out of the contents of `slurp` to be handy, like this: 

```clojure
(defn read-edn-file [path]
  (clojure.edn/read-string (str \[ (slurp path) \])))
```

### Spit

To write data to an EDN file, use `spit`. The first argument is the filepath being written to, the second argument is the data being written, and there are `:append` and `:encoding` options as well. When not using `:append`, the file will be created if it doesn't exist or overwritten if it does. With `:append true`, the data will be added to the end of the pre-existing file. 

### Delete-file

Files can be deleted from the repository using `clojure.java.io/delete-file`. 

## Saving Games to EDN Files

One of my stories for this week is to add file persistence to tic-tac-toe in a way that stores all the moves of the game and allows a player to resume the game if they exited before completing it. I wanted the log file to have the following structure, one map for each game:

```clojure
{:game-id 4
 :game-state :in-progress
 :ui :gui
 :mode 2
 :board [1 2 3 4 5 6 7 8 9]
 :first-ai-level 3
 :second-ai-level nil
 :player :o
 :human? false
 :moves [[subvecs of gameboards]]}
```

This posed a few challenges. How would I write each individual move to the vector with key `:moves` without having to overwrite the entire map every time? Was it possible to overwrite one specific map inside the file without having to overwrite the entire file? 

## Saving On Exit

At first, I thought maybe there was a way I could have the program save to the EDN file only upon exiting, so the file would only be written to once and I could simply use `:append`. Meanwhile, I could save the individual moves in an atom that I could later deref to build the EDN data. Finding away to trigger a function as a result of exiting the application proved to be unsuccessful though. 

Even if there was a way to save upon exit, it still left me with the conundrum of games that were left unfinished. How would I overwrite the map of the incomplete game once the game was completed without having to overwrite the entire file?

## Saving In-Progress Games to Temp Files

Instead, I decided to create a subdirectory for in-progress game logs and use `spit` to create a new file for each game. The top of the file is a map of the game state, like the one above without the `:moves` key-value pair. Each move is then be written to the file when it was made using `:append true`. Then, if the game is completed, the file is read into memory and the data is formatted into one map as shown above. That data is then written to the one log file of all the completed games using `:append true`, and the game-specific file is then deleted from the repository to keep things clean. Here's the code for the re-format, append, and delete:

```clojure
(defn format-in-progress-data [path]
  (let [data (read-edn-file path)
        moves (rest data)
        state (first data)]
    (assoc state :moves moves)))

(defn log-completed-game [temp-file log-file]
  (let [data (format-in-progress-data temp-file)]
    (spit log-file data :append true)
    (clojure.java.io/delete-file temp-file)))
```

This makes sure that I'm never having to overwrite an entire file at once, which provides safety since I'm not altering existing data, as well as prevents performance problems once the file gets particularly large.
---
layout: blog
title: Conditionally Building Maps
author: Alex Root-Roatch
description: Leveraging Clojure's conditional threading macro to avoid empty key-value pairs
date: 2024-10-16T21:48:50-6:00
updated: 2024-10-16T21:48:50-6:00
thumbnail: /img/clojure-banner.png
category: [ Clojure ]
---

## Building Maps with Threading Macros

One of my favorite uses for threading macros lately has been being able to build maps in readable stages. This can be
especially useful in nested maps, since `assoc-in` doesn't work with multiple key-value pairs at once in the same way
that `assoc` does, and ways to do it in one line of code can be hard to follow.

```clojure
(-> issue
    (assoc-in [:fields :created] created-time)
    (assoc-in [:fields :updated] updated-time))
```

This takes in a map called `issue` that has a key of `:fields`, which is another map. Inside `:fields`, we are added a
key `:created` with the time the issue was created and a key `:updated` with the time of the issue's most recent update.

## Conditionally Threading

There may be times when we only want to add key-value pairs to the map under certain circumstances, such as if the value
provided is not nil. This way, rather than a certain key having a nil value, the map simply does not contain that key.

This has been helpful in the Epic and Jira integration, since Epic will update whatever fields are included in the POST
request to its endpoint. Including a nil key-value pair could result in deleting the contents of a fields in an Epic
story when it shouldn't have been updated at all.

Syntactically, the conditional threading macro looks almost identical to `cond`:

```clojure
(cond-> {}
        summary     (assoc :summary summary)
        description (assoc :description description)
        issuetype   (assoc :issuetype issuetype))
```

There's also a conditional threaded-last with `cond->>`.

## Short Circuit with `some->`

If you have a scenario where you don't want subsequent lines of code to run once one line evaluates to false,
the `some->` and `some->>` threading forms are very useful. To borrow an example from the Clojure docs:

```clojure
user=> (some->> {:y 3 :x 5}
                (:y)
                (- 2))
-1

user=> (some->> {:y 3 :x 5}
                (:z)
                (- 2))
nil
```

With a typical threaded macro, the last example would throw a Null Pointer Exception since `:z` does not exist in the map. But with `some->>`, the function simple returns nil and doesn't proceed to the subtraction function.   

## Conclusion

The threading macros are very useful for constructing maps in stages, and `cond->`, `cond->>`, `some->`, and `some->>` give us even more control over how we can build data structures. These macros aren't restricted to manipulating maps or vectors, though. They can also be used when threading multiple functions one after another and do conditional checks along the way. 





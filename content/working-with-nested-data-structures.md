---
layout: blog
title: Working with Nested Data Structures
author: Alex Root-Roatch
description: Funtions  like `assoc` and `dissoc` are great for single-level maps, but what about nested data?
date: 2024-10-13T15:36:04-6:00
updated: 2024-10-13T15:36:04-6:00
thumbnail: /img/clojure-banner.png
category: [Clojure]
---

## Dealing with Nesting

Working with nested data can be tedious and challenging, especially if the goal is to add or update data deep inside a nested structure instead of simply retrieving the data. Luckily, Clojure provides us with `get-in`, `assoc-in`, and `update-in` to make this easier. 

## `get-in`

This Clojure function allows us to easily access data in a nested structure in a readable way. We simply provide a vector of the keys in a map or indices in a vector that we want to access. For example: 

```
(def developers {:data [{:first-name "Alex"
                         :skills ["Clojure" "React"]}
                        {:first-name "Bob"
                         :skills ["SQL" "Datomic"]}]})
         
(get-in developers [:data 1 :skills 0])
=> "SQL"
```

## `assoc-in`

This function allows us to add values to a map or vector that is nested rather than at the top level. For example: 

```
(assoc-in developers [:data 0 :last-name] "Root")
=> {:data [{:first-name "Alex"
            :last-name "Root"
            :skills ["Clojure" "React"]}
           {:first-name "Bob"
            :skills ["SQL" "Datomic"]}]}
            
(assoc-in developers [:data 0 :skills 2] "SQL")
=> {:data [{:first-name "Alex"
            :skills ["Clojure" "React" "SQL"]}
           {:first-name "Bob"
            :skills ["SQL" "Datomic"]}]}
```

This works for inserting entire data structures as well: 

```
(assoc-in developers [:data 2] {:first-name "Jane"
                                :skills ["Graphic Design" "Java"]})
=> {:data [{:first-name "Alex"
            :skills ["Clojure" "React"]}
           {:first-name "Bob"
            :skills ["SQL" "Datomic"]}
           {:first-name "Jane"
            :skills ["Graphic Design" "Java"]]}
```

Be careful when inserting into a vector though, as inserting at a pre-existing index will overwrite the data that is already there. 

## `update-in`

This function works like `assoc-in` but allows us to specify exactly what function is performed at the specified place in the data instead of just `assoc`. For example: 

```
(update-in developers [:data 0 :skills 0] str "Script")
=> {:data [{:first-name "Alex"
            :skills ["ClojureScript" "React"]}
           {:first-name "Bob"
            :skills ["SQL" "Datomic"]}]}
```

The selected value, "Clojure," is passed as the first argument to the provided function, `str`, followed by a second argument "Script" to make "ClojureScript".

This is especially useful for removing items, since there is no `dissoc-in` function: 

```
(update-in developers [:data 0] dissoc :skills)
=> {:data [{:first-name "Alex"}
           {:first-name "Bob"
            :skills ["SQL" "Datomic"]}]}
```

## Conclusion

Dealing with nested data can be annoying, but with Clojure's `get-in`, `assoc-in`, and `update-in` functions, we can easily achieve what we need to with those deeply nested values. 



---
layout: blog
title: Reader Conditionals in Clojure Commons
author: Alex Root-Roatch
description: Defining different behavior based on if the invoking function is Clojure or ClojureScript
date: 2024-10-15T21:57:38-6:00
updated: 2024-10-15T21:57:38-6:00
thumbnail: /img/clojure-banner.png
category: [ Clojure ]
---

## Clojure Commons

One of the coolest things about Clojure is the ability to operate as both a powerful backend language on the JVM and to
compile down to JavaScript on the frontend for building websites and React applications. This allows us as developers to
use one programming language across the entire stack without the limitations imposed by running Node.js as the backend
language.

This is made even easier with Clojure Commons, which are files that end in a `.cljc` extension. These files can be used
by namespaces on the backend or the frontend, allowing for more reusable code structure when functions may be needed for
both. For example, the minimax functions are needed in the CLJ namespaces of my Tic-Tac-Toe dekktop app, but are also
required in the CLJS namespaces for the React version of the app.

Sometimes, though, you may need to tweak the behavior of a function slightly when it runs in ClojureScript, perhaps to
add React keys to elements in a sequence. This is where reader conditionals come in handy. There are two types: standard
and splicing

## Standard Reader Conditionals

Standard reader conditionals behave like a `cond` block, using the keywords `:clj` or `:cljs` followed by the code to be
executed. The syntax is a bit simpler though; it simply consists of a pound sign and a question mark `#?` followed by
parenthesis.

```clojure
(defn with-keys [coll]
  #?(:clj  coll
     :cljs (util/with-react-keys coll)))
```

This example will simply return the collection if it is running on the backend or add React keys to every element in the
collection if it's running in the browser. The `util` namespace that `with-react-keys` comes from is also conditionally
required using a reader conditional to avoid trying to require a CLJS namespace in CLJ, which would cause a compiler
error.

The keyword `:default` can also be provided as a fallback should the function be used in an environment that is neither
CLJ nor CLJCS.

Another good use case for standard reader conditionals is when interop is needed. When running in CLJ, Clojure interops
with Java, but ClojureScript interops with JavaScript.

## Splicing Reader Conditionals

Splicing conditionals are used for splicing a list into their containing form. Their syntax simply adds an at sign `@`
after the question mark `?`.

```clojure
(defn build-list []
      (list #?@(:clj  [5 6 7 8]
                :cljs [1 2 3 4])))

; CLJ equivalent
(defn build-list []
      (list 5 6 7 8))

;CLJS equivalent
(defn build-list []
      (list 1 2 3 4))
```

Notice that the individual numbers in the list are passed as separate arguments rather than the list itself. This is the
important difference between splicing conditionals and standard conditionals. A standard conditional would result in
this:

```clojure
(defn build-list []
      (list #?(:clj  [5 6 7 8]
               :cljs [1 2 3 4])))

; CLJ equivalent
(defn build-list []
      (list [5 6 7 8]))

;CLJS equivalent
(defn build-list []
      (list [1 2 3 4]))
```

## Conclusion

Clojure Commons makes reusing code between the frontend and backend a breeze. Reader conditionals allow us to fine tune our CLJC functions and namespaces even more to account for the idiosyncrasies between the JVM environment and the browser. For most cases, the standard reader conditional is sufficient, but in some cases where multiple values may need to be passed in at once, splicing conditionals will prove very useful.  


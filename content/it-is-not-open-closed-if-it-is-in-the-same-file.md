---
layout: blog
title: It's Not Open-Closed If It's in the Same File
author: Alex Root-Roatch
description: "TL;DR: Don't use multimethods if all of the defmethods are in the same file"
date: 2024-10-30T18:36:40-6:00
updated: 2024-10-30T18:36:40-6:00
thumbnail: /img/clojure-banner.png
category: [Clojure, Clean Code Practices]
---

## Multimethod Misdirection

Recently, I had a conversation with Micah Martin about the use of multimethods in a single file. I had encountered a situation where I knew the code was going to need to be extensible, and therefore had implemented a multimethod right away. The amount of code that I had written didn't seem like enough to warrant a separate namespace for the defmethods, though. Micah informed me that using multimethods in this way was effectively no different from using a case statement. 

Confused at first, I pointed out that when the time came to add more configurations to system, I would need to go back into the case statement to do so, and therefore it was not Open-Closed. I was under the misguided impression that my code was conforming to the Open-Closed Principle because I would merely be adding new defmethods rather than changing pre-existing functions. This is misguided because going in to a file and changing code in that file is merely a larger-scale version of changing code inside a function. The end result in either scenario is that the entire namespace file needs to be recompiled and redeployed. Alternatively, if each defmethod was it's own namespace and adding a new defmethod would simply be adding a new file, then the code would be extensible, as no pre-existing namespaces would be changed to introduce new code.

## Clojure Needs SOLID Discipline

This is a great example of how Clojure's flexibility can be problematic and allow developers to do things that may not make the most sense. In Java, creating the `defmulti` would have forced me to create a separate file for the interface, and the classes that implement that interface would be their own separate files. The language encourages certain design structures on the developer. In Clojure, however, I could have everything in one single file without feeling the language was discouraging me from doing so. As developers, we need to be well-versed in SOLID Principles and Design Structures and make sure that we are bringing those disciplines into the Clojure that we write, because the flexibility that Clojure affords us can easily lead us down a path of spaghetti code with tangled dependencies, rigid structure, and long compile times for even the smallest changes or additions.  


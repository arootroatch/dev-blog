---
layout: blog
title: Implementing Java Interfaces with Deftype
author: Alex Root-Roatch
description: Clojure's `deftype` macro allows for easy interop with Java interfaces
date: 2024-08-29T20:28:30-6:00
updated: 2024-08-29T20:28:30-6:00
thumbnail: /img/clojure-banner.png
category: [ Clojure ]
---

## Let's Get Some Java

One of my recent projects was to write a Clojure app using a Java app that I wrote as a library. This Java app follows the [Command Pattern](https://arootroatch-blog.vercel.app/command-design-pattern), which allows easy extension by implementing the `Command` interface without any need to modify any code inside the `.jar` file. 

As Clojure runs on the JVM, it natively supports calling Java methods inside our Clojure applications. However, being a functional language, Clojure does not have classes, so we can't create a class that implements a Java interface. That's where `deftype` comes in. 

## Show the Code!

The implementation of an interface in Java looks something like this: 

```java
public interface Command {
  void execute();
}


public class MyClass implements Comand {
  public MyClass() {
  }

  public void execute() {
    // method body
  }
}
```

Implementing this in Clojure looks something like this: 

```clojure
(ns my-app
    (:import MyJavaApp.Comand))
    
(deftype MyDeftype []
  Command
  (execute []
    ;method body
    ))    
```

Instead of an explicit constructor method, the parameters that would be fed to a constructor simply go in `[]` next to the name of the `deftype`. Instead of `implements Command`, we simply type `Command` on the second line to specify the interface or `defprotocol` being implemented. 

If the execute method takes arguments, we will need to use `this` to implement them so Clojure knows those symbols are coming from the interface being implemented. For example: 

```clojure
(deftype MyDeftype []
  Command
  (execute [this param1 param2]
    ;method body
    ))    
```

## Instantiating and Calling Methods

In Java, we create an instance of a class with: 

```java
MyClass coolClass = new MyClass();
```

In Clojure, we can either use a constructor of the factory method that Clojure creates under to hood: 

```clojure
;Constructor:
(def coolDeftype (MyDeftype.))

;Factory function
(def coolDeftype (->MyDeftype))
```

Then to call the `execute` method, we use an interesting blend of Clojure and Java syntax:

```clojure
(.execute coolDeftype [params])
```

## Conclusion

`Deftypes` give us an easy way to implement simple Java interfaces inside of Clojure. This allows us to bring in Java libraries and extend them in our Clojure app, after which we can write our entire app in Clojure. 


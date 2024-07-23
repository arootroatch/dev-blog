---
layout: blog
title: Runtime Polymorphism
author: Alex Root-Roatch
description: Multi-arity and multimethods are two unique ways Clojure let's us change what a function does based on its input.
date: 2024-05-15T22:57:31.452Z
updated: 2024-05-15T22:57:31.452Z
thumbnail: /img/fork-road.jpeg
category: 
  - Clojure
---

## Multi-Arity Gives You Plenty of Arguments

"Arity" refers to the number of arguments a function takes. It is the noun form of the suffix "-ary" in the terms "unary," "binary," and "ternary," used to describe functions that take one, two, or three arguments, respectively. In Clojure, we can compose functions that can have completely different function bodies based on the number of arguments passed in, meaning one function can simultaneously be unary, binary, ternary, or even octary (eight functions). This is referred to as *multi-arity*. Here's what it looks like:  

```
(defn say-hello
  ([] "Howdy, y'all!")
  ([name] (str "Howdy, " name "!"))
  ([name1 name2] (str "Howdy, " name1 " and " name2 "!"))
  ([name1 name2 name3] (str "Howdy, " name1 ", " name2 ", and " name3 "!")))
  

user=> (say-hello)
"Howdy, y'all!"

user=> (say-hello "Alex")
"Howdy, Alex!"

user=> (say-hello "Alex" "Jim")
"Howdy, Alex and Jim!"

user=> (say-hello "Alex" "Jim" "Andy")
"Howdy, Alex, Jim, and Andy!"
```

As you can see, if `say-hello` is called without arguments, the function returns a greeting for a whole group of people. The function can also greet one, two, or three people by name depending on how many names are input as arguments. It is very important to note the extra pair of parentheses hugging each function body to separate them from each other. With only a single function body, we can type parameters and return values without surrounding them in parentheses, but with multiple function bodies they must each be wrapped in parentheses. This is probably due to how Clojure has no explicit `return` statement and instead automatically returns the last form that was evaluated. With multiple function bodies, Clojure needs to know that we want it to stop after "Howdy, y'all" and not try to evaluate the other three lines of code following. 

It's also important to note that if we want one of our function bodies to be *variadic*, meaning it can take an unspecified number of arguments, the other function bodies cannot have parameters than the *variadic* function body. So if we want our function to accept two or more names instead of topping out at three, we would need to refactor to this: 

```
(defn say-hello
  ([] "Howdy, y'all!")
  ([name] (str "Howdy, " name "!"))
  ([a & more] (str "Howdy, " (apply str (interpose ", " (cons a more)))"!")))
```

Pretty cool, right? But what if we want a function to do something different based on different values of the same amount of arguments? That's where *multimethods* come into play. 

## Multimethods Give You Individuality

Multimethods allow us to have a function that takes a set number of arguments but returns a different output based on the value of the arguments. It does this in two parts: 
1. `defmulti` defines the multimethod and a dispatch function that will grab the value of the argument and then call the corresponding `defmethod`. 
2. `defmethod` takes the dispatched value and uses it in the function body to return our final output value. 

Let's take a looks at these examples adapted from the Clojure Koans: 

```
(defmulti diet (fn [x] (:eater x)))
(defmethod diet :herbivore [a] (apply str (:name a) " eats veggies." ))
(defmethod diet :carnivore [a] (apply str (:name a) " eats animals." ))
(defmethod diet :default [a] (apply str "I don't know what " (:name a) " eats." ))

(diet {:species "deer" :name "Bambi" :age 1 :eater :herbivore})
user=> "Bambi eats veggies."

(diet {:species "rabbit" :name "Thumper" :age 1 :eater :herbivore})
user=> "Thumper eats veggies."

(diet {:species "lion" :name "Simba" :age 1 :eater :carnivore})
user=> "Simba eats animals."

(diet {:name "Rich Hickey"})
user=> "I don't know what Rich Hickey eats."
```

Here we see a multimethod being defined called `diet`. When we pass in a map with information about an animal on it, the `defmulti` gets the type of diet, `:herbivore` or `:carnivore`, from the `key` of `:eater`. It then dispatches the proper `defmethod`&mdash;`:herbivore`, `:carnivore`, or `:default`&mdash;which gets the value of `:name` from the same map and creates the appropriate string describing the animals diet. If no `:eater` value is found in the given map, the `:default` method is dispatched. 

## Better than a Case

But wait... why would do that when we could just use a case statement? Isn't that the same thing? Take a look: 

```
(defn diet [x]
  (let [diet (:eater x)
        name (:name x)]
  (case diet
    :herbivore (str name " eats veggies.")
    :carnivore (str name " eats animals.")
    (str "I don't know what " name " eats."))))

```

Does this code return the same result? Yes, and `case` even does a constant-time dispatch as well, like the multimethod does. This means that it doesn't go through each line sequentially until it finds the one that satisfies the condition; it can just jump to it. This is a huge performance improvement over `cond`, `condp`, or a chain of `if else` statements when you get to dealing with many different conditions. However, one huge drawback is that, should we need to add functionality to this, we would need to go back into this function and manually change the function itself for it to be able to handle another condition. This violates the Open-closed Principal, which states that "entities should be open for extension but closed for modification." We don't want to go in and start changing functions and run the risk of introducing bugs into the system just to add a feature. With multimethods, we can simply create a new `defmethod` that uses the `diet` `defmulti`, and voilà! We have new functionality without editing the original function at all. 

## Conclusion

Multi-arity and multimethods are two forms are runtime polymorphism that make Clojure a very powerful, flexible, and maintainable language. Multi-arity makes one function go farther with being able to have multiple function bodies based on the number of arguments provided. Multimethods give us `case`-like functionality but in a way that adheres to the Open-closed Principal, allowing us to add functionality easily without changing pre-existing code and potentially creating bugs. 
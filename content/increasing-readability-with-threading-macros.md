---
layout: blog
title: Increasing Readability with Threading Macros
author: Alex Root-Roatch
description: Ever feel like you're crawling out of hole trying to make sense of deeply nested code? Clojure's threading macros can help.
date: 2024-05-17T00:17:49.057Z
updated: 2024-05-17T00:17:49.057Z
thumbnail: /img/crawl-out-of-hole.jpeg
category: Clojure
---

## Someone Get Me a Ladder!

We've all been there: we're reading through some code and come across multiple nested function calls. Taking a deep breath, we grab our ladder and traverse down to the deepest level of parentheses. Slowly, we work our way back up to top-most function call, mentally logging the return values of each function to figure out what the end result of our nested mess will be. Take this for example:

```
(defn deeply-nest [coll] 
    (get-in 
        (update-in 
            (assoc 
                (assoc 
                    (assoc coll :a 1) 
                    :b 2) 
                :c {:d 4 :e 5}) 
            [:c :e] inc) 
        [:c :e]))

(deeply-nest {})

user=> 6
```

What in the world?! I've indented each line to try to improve readability, an even after that we *still* can't tell what's happening here or why passing in an empty vector somehow returns `6`. Let's use the threading macro `->` to see if that helps. 

## Threaded-first

```
 (-> {}
        (assoc :a 1)
        (assoc :b 2)
        (assoc :c {:d 4
                   :e 5})
        (update-in [:c :e] inc)
        (get-in [:c :e])))
```

Okay, that looks a little more reasonable. Now we can at least read what's going on in the order in which the operations occur: 

1. An empty map is input to `(assoc :a 1)`. That returns `{:a 1}`.
2. That return value is passed to `(assoc :b 2)`, which returns `{:a 1 :b 2}`.
3. That is then passed to `(assoc :c {:d 4 :e 5})`, which returns `{:a 1 :b 2 :c {:d 4 :e 5}}`.
4. Then, the key `:e` inside key `:c` is incremented, resulting in `{:a 1 :b 2 :c {:d 4 :e 6}}`. Ahhhh, we see a six now.
5. Then, `get-in` is called to get the value of `:e` inside of `:c`, which is `6`. 
 
You may have noticed that each of those function calls looked like they're missing an argument, that argument being the empty map being passed in after the name of the function and before the key-value pairs being added. That's because the *thread-first* function, called with `->`, automatically inserts the initial argument `{}` as the first argument of the first function in the sequence, and inputs the return value of each function as the first argument in each subsequent function call. 

> NOTE: This is a demonstrative example and is NOT an example of good, clean code. This level of nesting is often a good code smell that your function is doing more than one thing and thus breaking the Single Responsibility Principal. Plus, the name of the function `deeply-nested` is a terrible name because it doesn't describe what the function is doing at all. It should be a verb phrase, something like <br/>
> `setMapValuesAndIncrementLastKeyAndGetLastKeyValue`. <br/>
> That immediately shows us that the function does too many things at once. Not only that, it's both setting values and getting a value, which violates Command Query Separation. Oh, and the three different `(assoc` calls could have been done in one `assoc`, as it can take multiple key-value pairs.

## Threaded-last

But what about functions where the collection needs to be the last argument? That's where we can use *thread-last*, called with `->>`.

```
(->> [1 2 3]
     (map inc))
     
use=> [2 3 4]
```

## Specialized Variations

For more flexibility in different situations, Clojure also provides `some->`, `some->>`, `as->`, and `cond->`. Exploring those functions, however, is enough material for another article, so we won't be going into those today. If you'd like to read up on those, head over to (clojure.org)[https://clojure.org/guides/threading_macros]. 

## Closing Thoughts

Threading macros provide us with a great way of making nested code more readable and keep us from feeling like we're climbing out of a parenthetical hole. Beware, however: too many layers of nesting might mean that your function is doing too many things at once and needs to be refactored. 

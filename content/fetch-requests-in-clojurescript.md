---
layout: blog
title: Fetch Requests in ClojureScript
author: Alex Root-Roatch
description: Dealing with asynchronous logic in ClojureScript
date: 2024-10-23T23:29:14-6:00
updated: 2024-10-23T23:29:14-6:00
thumbnail: /img/cljs.png
category: [ Clojure ]
---

## Asynchronous Channels

Making a GET request for data in Clojure is pretty simple with the `clj-http` library. Simply call `http/get` and pass
in the URL. The value returned from the function is the response of the get request, and it can be easily saved in a
global `def` or a let binding to be used later in the code.

Get requests in ClojureScript are a little trickier. Since ClojureScript compiles to JavaScript, we are dealing with
JavaScript's async/await structure. Get requests using `cljs-http` have a little more going on:

```clojure
(defn get-data []
  (go (let [response (<! (http/get "https://api.github.com/users"))]
           (prn (:status response)))))
```

Notice that everything wrapped in a `go` block. This is because we don't want the asynchronous act of fetching data to completely block the once thread that JavaScript has. Since we can't delegate to another thread, wrapping something in a `go` block makes sure that the operation inside is paused if necessary rather than making everything wait for the async call to complete. This is similar to using the `async` keyword in JavaScript. 

Then we have the `<!` function, which is the asynchronous "take" function. This is how we actually read data from the asynchronous channel and only works when used inside a `go` block. 

## Using the Response Data

Great! So now we're getting data back from an API, and we should just be able to return that `response` variable in the `let` to use the data, right? 

Unfortunately not. Trying to return the data and print it resulted in `#object[cljs.core.async.impl.channels.ManyToManyChannel]`, a string representation of the channel object, but not the actual data. The data can only be read inside the `go` block. To make the data accessible elsewhere, I created an atom outside the `get-data` function, and then I stored the response data to the atom inside the `go` block using `reset!`. 

## Further Reading

For a closer look at the `core.async` library, see [this article](https://clojure.org/guides/async_walkthrough).

For more information on the `cljs-http` library, see [the GitHub repo](https://github.com/r0man/cljs-http).




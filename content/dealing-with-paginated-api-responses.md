---
layout: blog
title: Dealing with Paginated API Responses
author: Alex Root-Roatch
description: How a miguided approach caused an afternoon of re-engineering
date: 2024-10-29T22:17:10-6:00
updated: 2024-10-29T22:17:10-6:00
thumbnail: /img/code-banner.jpg
category: [Clojure]
---

## 504 Request Timeout

Today while deploying the Aesop frontend to production, we were met with a critical error: when loading a large project with a lot of stories, the request to fetch the Jira issues timed out before we got any Jira issues at all. This was a very unpleasant surprise, as it made the frontend completely unusable for projects beyond a certain size. 

So what happened? The culprit was how we had decided to handle paginated API responses. The Jira API for getting the issues in a project only returns 50 issues at one time, meaning that we needed to see how many total issues were in a project and make repeated GET requests until all the issues had been retrieved. We had decided to have the backend handle recursively fetching the data and then passing it all up to the front end at once. This was mainly because the request had to go through the backend rather than directly to Jira from the frontend due to authentication required to use the Jira API. 

While this approach worked swimmingly in our sandboxes, we hadn't thought about how long it might take when project sizes grow into four-digit numbers. The Jira project we were trying to load had roughly 2200 issues, resulting in a total of roughly 44 GET requests. After the frontend waited about 60 seconds for a response, it timed out and sent a status `504` before the backend got the chance to send the data. 

## Recursively Fetching in ClojureScript

To fix this, we decided to handle the recursion on the frontend, saving the issues 50 at a time to a Reagent atom. This prevented the timeout issue and provided the added benefit of Jira issues rendering to the page as soon as they were received, giving the user a fast initial load time for the most recent issues while the older issues were being fetched. This meant we needed to change the backend API route to only make one GET request to Jira per every GET request from the frontend.

The change on the frontend proved a bit trickier. When fetching data in ClojureScript, the data received can only be accessed inside the `go` block where the async take `<!` occurs (see [this previous post](https://arootroatch-blog.vercel.app/fetch-requests-in-clojurescript) for more detail). This data can be saved to an atom to make it accessible to the rest of the application, but there's a catch: there's no guarantee of exactly when that data will be available. This means something like this won't work: 

```clojure
(ajax/get! "api/fetch-issues" {} #(reset! number-of-issues (:total %)))

(while (> @number-of-isses (count @jira-issues)) 
       (ajax/get! "api/fetch-issues" {} #(reset! jira-issues (:total %))))
```

Here, `ajax/get!` is a helpful function that builds the actual get request, executes it, and uses the provided handler function inside the `go` block to handle the response. The reason this doesn't work is because the `while` will be evaluated immediately after the `ajax/get!` is invoked, without waiting for it to receive a response and update the `number-of-issues` atom. This means that the conditional check inside the `while` fails, and there is nothing to trigger the needed follow-up GET requests after the atom has updated. 

To deal with this, we needed to create a more sophisticated handler function, since the handler function is called inside the `go` block and has access to the response data. This handler function gets the first 50 issues and saves them to an atom while also getting the total number of issues from the response. It then calculates how many GET requests are necessary by dividing the total by 50 and decrementing by one (since one GET request has already been made), and then triggers a function that will recursively make the appropriate number of GET requests, decrementing the number of needed GET requests each time as well as changing the starting index of the requested issues in the URL. 

## Closing Thoughts

There are some scenarios where I feel the tools we are using in ClojureScript are keeping us bound to the limitations of older JavaScript. It's an ironic, conflicting feeling to be writing in such an elegant language that by pretty much all standards is a better developer experience and simultaneously feel constrained to the limitations of an even worse version of JavaScript. Having written a decent amount of Vanilla JavaScript as well as React, I wanted to be able to simply add an `await` keyword before any code that I wanted to run only after the GET request had completed, or use the `fetch()` Promise and simply drop a `.then()` afterward to check result and make another fetch if necessary. 

'm sure there must be CLJS libraries out there to be able to leverage these more modern JS functions without having to resort to interop. Such solutions may make the code in Aesop more elegant that the recursive solution we have now. Then again, perhaps it won't, and it's just another way to skin this cat. Sometimes it seems my previous experience with JavaScript is a hindrance more than a help in moments like this where it feels like I know exactly the code I want to write in JavaScript but can't quite seem to figure it out in ClojureScript without some effort. 

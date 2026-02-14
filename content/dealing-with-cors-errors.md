---
layout: blog
title: Dealing with CORS Errors
author: Alex Root-Roatch
description: Granting permission for other domains to access a information from a server
date: 2024-10-22T23:02:33-6:00
updated: 2024-10-22T23:02:33-6:00
thumbnail: /img/code-banner.jpg
category: [Uncategorized]
---

## Fetching Data from a Different Server

Today I was working on the frontend for our Epic-to-Jira integration software (called Aesop), specifically rendering a menu of all the Epic projects the logged-in user could access. My colleague Scoops had already created the necessary API endpoint in Epic to be able to retrieve this information, so it seemed like a rather simple affair of making a GET request to the endpoint. 

However, this was not the Aesop frontend making a request to the Aesop backend, which would mean the request and response would be coming from the same domain. No, this was Aesop's frontend making a request to Epic's backend. This is what is referred to as Cross-Origin Resource Sharing, and the web browser looks for explicit permission from the server to load resources. Without the server telling the browser that the domain making the request is allowed to see the requested information, the browser blocks the resources from being loaded altogether. 

Notice the emphasis on the browser. This is a behavior that is specific to the security settings of modern browsers, which is why I was able to hit the API endpoint in Postman and still get a response with no issue. 

## Access Control Headers

So how does a server tell the browser that a certain domain has permission to its information? By including two specific headers in the response: "Access-Control-Allow-Credentials" and "Access-Control-Allow-Origin".

The "Access-Control-Allow-Credentials" is a boolean that needs to be set to "true" for this to work, because the request is sending along a JWT payload that is also used to verify that the user is indeed an authorized user and only send back the data for that user. 

```text
"Access-Control-Allow-Credentials": "true"
```

The "Access-Control-Allow-Origin" header contains the domain allowed to use this API endpoint. For requests without credentials, a wildcard `*` character can be used to allow requests from any origin.

```text
"Access-Control-Allow-Origin": "http://requesting-domain.com"
```

## Conclusion

After going back in to the Epic endpoint and editing the response to include the proper CORS headers, my console errors were gone and the data was being loaded in Aesop! Now to figure out how to access data out of a ClojureScript async channel... but that's for tomorrow's blog post. 

For further reading on CORS, see [this article from MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

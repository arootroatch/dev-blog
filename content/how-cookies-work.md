---
layout: blog
title: How Cookies Work
author: Alex Root-Roatch
description: Using the Christopher Nolan classic "Memento" to explain internet cookies
date: 2024-08-28T23:11:00-6:00
updated: 2024-08-28T23:11:00-6:00
thumbnail: /img/memento.jpg
category: [Uncategorized]
---

## Where are the Chocolate Chips? 

Today we're talking all about cookies! Unfortunately, not the kind of cookies you can eat, but cookies that are sent back and forth between a server and the client. 

A cookie is a chunk of data that a server sends to the client (in most cases, your browser) when you first make a request to the server (visit the site). This data lives on your system until the session ends, the cookie expires, or you clear your cookies, and it is sent back to the server with every subsequent request. 

Why all the back and forth? To explain that, we'll enlist the help of the Christopher Nolan cult classic *Memento*. 

## A Tattooed Detective

"Memento" is a movie about a man trying to solve the mystery of his wife's murder. There's just one catch: he has a memory disorder that makes him incapable of forming new memories. Obviously it would be pretty difficult to solve a murder if you couldn't remember the clues you've discovered from day to day. Christopher Nolan take this to another level by telling the story in reverse-chronological order, meaning every subsequent scene tells the story of the *previous* day's events.

To combat his memory loss, the detective tattoos himself at the end of the day to document the clues he gathered that day. That way, he'll wake up the next morning not knowing anything, and then be reminded of his wife's murder and all the clues gathered so far when he looks in the mirror and sees all his tattoos. 

## Servers Have No Memory

Web servers are a lot like the detective in "Memento" in that they don't remember who you are from visit to visit. Web servers don't store information about users. Each time you visit a website and the browser makes a GET or POST request, the server merely sees the request that came in and has no way of recognizing who is making the request. 

If the server knows it's going to need a reminder of who you are, then the first time you visit a website it will give you a cookie. Think of it like a note that the server writes with the data it knows it needs but knows that it will forget. It gives your browser this note as a way of saying, "Look, I know I'm not going to remember you, so next time I see you, please give me this note back as a way of jogging my memory."On each subsequent visit, the browser will automatically send the cookie along with the GET or POST request. 

## Light or Dark?

Let's illustrate the point using the example of specifying light mode of dark mode on a website. 

Say the first time you visit a website, you click a button in the menu bar turning the website to dark mode. In response, the whole website re-renders to dark mode and the server sends you a cookie to say "Okay, I see you like dark mode. Please remind me of that every time you visit." The HTTP response headers from the server might look something like this: 

```text
HTTP/1.1 200 OK
Content-Type: text/html
Set-Cookie: presentation=dark

[page content]
```

Then with each subsequent request your browser makes to the site, it sends the cookie back so you don't have to keep hitting the "dark mode" button. The request headers might look something like this: 

```text
GET www.mycoolsite.com HTTP/1.1
Cookie: presentation=dark
```

## Session vs Persistent Cookies

Cookies are *session cookies* by default, meaning that the browser will automatically dispose of the cookie when that session is over (typically when you close that tab or browser window). 

*Persistent cookies* are cookies that have an expiration date or max age defined by the server. They will live on your machine until the specified date, until it reaches the specified max age, or until you clear your browser cookies. 

## Conclusion

This article is intended as a high-level overview of how cookies work, but by no means is an exhaustive resource. I also haven't talked about the variety of security issues to be aware of when using cookies. For futher reading, I recommend [this post from MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies). 

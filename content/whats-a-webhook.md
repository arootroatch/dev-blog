---
layout: blog
title: What's a Webhook?
author: Alex Root-Roatch
description: Learning about event-triggered API interactions
date: 2024-09-30T20:45:17-6:00
updated: 2024-09-30T20:45:17-6:00
thumbnail: /img/webhook.jpg
category: [ Uncategorized ]
---

## Event Driven Communication

Today I worked on breaking a tight coupling between Epic, our project management software, and Aesop, the software that integrates Epic and Jira together. The end goal was for Epic to be able to send data out to any provided URL on a per-project basis should any project want to send its data elsewhere. Since this data sending is triggered by certain events (such as a story being created and edited), it was expressed that this coupling should be broken in a way that aligns with the concept of webhooks. 

So what is a webhook? Simply put, it is an automated way to communicate between APIs that is triggered by specific events in an application. To better understand this, let's first start by exploring what this kind of integration would look like without webhooks. 

## Automating with REST APIs 

Let's say you're working on a project using Epic and you wanted to be notified via SMS text whenever a change is made to a story in the project. If Epic provided a traditional REST API for GET and POST requests, you would be able to make GET requests to Epic to check if there had been any changes and what those changes were. 

There's a few logistical programming challenges at play to make this work. Firstly, what constitutes a "change" that you should be updated about is dependent on whether that change occurred after your last GET request and before the current request. The API could allow you to enter date ranges in your request, and for Epic to be able to fulfill that request, it would have to keep dated logs of everything that happens from which it could generate the results. With the kind of history that Datomic gives us, that could potentially be done all with database queries, but either way, that's potentially a lot of data processing to make that response. 

Secondly, how often do you make the GET request? It would be nice to be notified of an event as soon as it happens, but the only way to guarantee that is to have a bot running the GET repeatedly every minute or so to check for changes and report them to you. This is obviously not realistic and could even lead to the IP address of your bot server getting blocked. 

It's also not a good idea for Epic to encourage developers to be constantly pinging their API to see if anything changed. If the kids in the backseat keep asking "Are we there yet?", eventually you respond with "I'll tell you when we're there. If I don't tell you, we're not there." That is where webhooks come in. 

## Event-Triggered API Calls

Instead of making a GET request to Epic and processing the HTTP response, webhooks are provided by an application like Epic to allow users to select which type of events they would like to be notified of and the user provides a POST endpoint to receive the information and do with it what they will. For example, GitHub provides a webhook for notifying users when a pull request is made, and users can write a script receives the data from this webhook and sends a message to a Slack or Discord channel alerting users of the pull request. 

This is the heart of how IFTTT (If This Then That) integrations &mdash; like Zapier "Zaps" &mdash; work.  The user specifies which event they want to trigger an action (provided the desired software provides a webhook for that event), that data then gets sent to Zapier API endpoint for receiving that data, and then runs a script sending that data to the API of the other application that is to be affected by the event.  

## Breaking the Coupling

Since Epic sending data to Aesop was already triggered by a story either being created or updated, breaking the tight between the two in a webhook manner was relatively simple. 
1. Provide a form field in the project settings for users to specify the URL to which the event data should be sent
2. Save that URL to the database for that project
3. Where the Aesop link was hardcoded before, get the URL that was saved in the database for the project and make the POST request there

Now, any URL can be entered in any project, and whenever a story in that project is created or updated, a POST request will be made to that route for the user to do with what they please. 

If we wanted to make this a more fully-featured webhook, the next steps would be implementing a UI for users to choose which events to be notified of instead of only story creation and updates. 

## Wrapping Up 

Webhooks can be thought of almost as a reverse API. Rather than pinging an application's API endpoint to check for updates, we can "hook" into the specific events we are interested in and have the application make a POST request to our own endpoint when those events occur. This reduces the risk of an application being overwhelmed by API requests and eliminates the need to write bots to periodically make API calls. 
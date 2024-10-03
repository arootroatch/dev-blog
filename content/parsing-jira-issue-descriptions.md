---
layout: blog
title: Parsing Jira Issue Descriptions
author: Alex Root-Roatch
description: Turning a complex nested data structure into a markdown string
date: 2024-10-02T20:47:13-6:00
updated: 2024-10-02T20:47:13-6:00
thumbnail: /img/code-banner.jpg
category: [Uncategorized]
---

## Where's the Description?

This week, Merl and I have been working on getting the description of a newly-created Jira issue in order to send it to Epic. For some reason, Jira doesn't automatically send the description in the webhook payload when an issue is first created. Jira does, however, provide a way to get the description of an issue using their REST API. 

In order to easily detect if an issue was newly created, we chose to simply compare the `:created` and `:updated` keys. If the times are the same, it's a new issue and there won't be a description in the payload. In that case, we then make a `GET` request to the Jira API to fetch all the issue data so that we can grab the description. 

## A Nested Response

Of course, Jira couldn't make it too easy on us. The description in the API response, rather than being a string, is a vector of maps, wherein each element in the description is a separate map. Every heading, paragraph, code block, and ordered or unordered list is a nested map structure that needs to be parsed. 

```
:fields {:description {:type "doc",
                       :version 1,
                       :content [{:type "heading",
                                  :attrs {:level 1},
                                  :content [{:type "text",
                                             :text "Heading 1"}]}
                                 {:type "paragraph",
                                  :content [{:type "text",
                                             :text "Hello this is the first part. "}]}
                                 {:type "paragraph",
                                  :content [{:type "text",
                                             :text "And this is the second part. "}]}
```

Epic, on the other hand, supports Markdown syntax, so sending the description as one string with proper Markdown syntax and line breaks will cause it to be formatted properly in Epic. 

I wanted to be able to simply map across the description's `:content` vector and then `apply str` to construct the description, but different elements need to be parsed differently. For example, heading come in with an extra `attrs` key that contains which level of heading it is, which will let us know how many pound signs to add to the text content. 

To make this happen, I chose to write a multimethod that dispatches off the `:type` of each map in the vector. 

## A Useful Function

With this deeply nested structure, I found the `get-in` function especially useful for being able to grab exactly what I wanted without needing to have an ugly amount of nesting in my code. 

For example, each item in a list comes in from Jira like this: 

```
{:type "orderedList",
 :attrs {:order 1},
 :content [{:type "listItem",
           :content [{:type "paragraph",
                      :content [{:type "text",
                                 :text "Here’s a numbered list"}]}]}
```

Instead of doing something hard to read, like this: 

```
(:text (first (:content (first (:content (first (:content ordered-list)))))))
```

I could do this: 

```
(get-in ordered-list [:content 0 :content 0 :content 0 :text])
```

## A Weird Character Discrepancy

In this process, I ran into a weird situation where the function was returning exactly what I wanted, but the test was still failing. This ended up being due to a discrepancy between apostrophe characters. 

In order to make sure my test was using data exactly as it comes in from Jira, I copy and pasted the API response after printing it to the console in an SSH session. The "expected" part of the test, however, was manually typed. This led to the apostrophe characters that came from the terminal not being the same 
as the ASCII character that is created when typing an apostrophe on the keyboard. To the human eye, the result is the same, but the computer can see the difference of between the bytes of two different types of character codes.

After deleting the apostrophes out of the section that was copy and pasted and retyping them, the test passed. 

## Next Steps

The next steps now are parsing nested ordered and unordered lists. In addition, Jira and Epic use different syntax in the descriptions, which causes formatting to be disrupted when editing the description of an existing story (Jira *does* provide the description in the payload when an existing issue is updated). This means that the data coming in from Epic will need to be reformatted for Jira and vice versa. 
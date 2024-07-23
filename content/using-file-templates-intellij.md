---
layout: blog
title: Creating and Using File Templates in IntelliJ
author: Alex Root-Roatch
description: IntelliJ's File Template feature makes creating our own boilerplate files a breeze.
date: 2024-05-21T17:24:02-6:00
updated: 2024-05-21T17:24:02-6:00
thumbnail: /img/intellij-logo.png
category: 
  - Workflows
---

## What's a File Template?

Have you ever thought, "This file here is pretty close to the new file I want to create," and so you duplicate that file and then go about scrubbing all the old data out until you end up with a boilerplate with which you can start writing the new file? What if you just saved a boilerplate version of that file and then duplicated that? That would speed you up a little bit, but it would still be local to your project directory or wherever you saved it. 

Enter IntelliJ File Templates. File Templates allow you to save the boilerplate version of a file to IntelliJ's template library rather than a file sitting in your local repository. Then, instead of selecting "New File," you can select "New [Name of Template]" and IntelliJ will create a new file of the correct file type with your boilerplate included. Even better, you can leverage variables to autofill things like dates or prompt a dialogue box allowing you to type in values that IntelliJ will plug into the file for you.

Need a real world example? Let's examine how this blog site works.

## A Peek Under the Hood

This site is written in Next.js, a full-stack framework for React. There is one file that contains the code for what a blog post should look like, which is a React function component. All the posts are in the `content` directory and are written in markdown. When you navigate to `arootroatch-blog.vercel.app/[file-name-of-markdown-file]` in your URL bar, Next.js takes the information from that markdown file and plugs it into that React component, rendering the page. What's even better, Next.js does this during build time, so what's actually deployed is the static HTML, CSS, and JavaScript for each page, living on the server ready to be crawled by SEO bots.  

All that to say, whenever I want to write a new blog post, I need to create a new markdown file. Since I'm writing daily blog posts now, duplicating an old post and deleting all the content is a little more tedious than I prefer. After all, I learned how to code so that I could do things more easily and automate tedium. 

So how do we create a File Template?

## Save File as Template

The easiest way to get started is to select a file, in my case one of my blog post markdown files, and going to "File>Save File as Template." This will pull up a dialog with a preview of your file. You can then name it with what you would like the template to be called, specify the file extension, and &mdash; and here's the best part &mdash; *enter variables*. 


## File Template Variables

There are two types of variables in IntelliJ File Templates: predefined variables and custom variables. Predefined variables are those built into IntelliJ, like `${YEAR}`, `${MONTH}`, and `${DAY}`. Custom variables are any variables that are not one of the predefined variables. IntelliJ automatically recognizes which variables are custom variables and will present you with a dialog box to enter the values for them. The syntax for both types of variables is the same: `${VARIABLE_NAME}` or `$VARIABLE_NAME`. The curly braces are optional as well as the case; `$VARIABLE_NAME` and `$VariableName` are both acceptable. However, `$VARIABLE_NAME` and `$VariableName` will be recognized as different variables, while `${VARIABLE_NAME}` and `$VARIABLE_NAME` will be recognized as the same variable. 

Let's look at a real example. 

## Markdown Front Matter

Each blog post has front matter at the top of it, which is metadata for each blog post. My blog posts contain the following front matter fields:
- `title`
- `author`
- `description`
- `date`, formatted as a datetime string
- `updated`, the datetime string of when the post was last updated. If `updated` and `date` are the same, `updated` will not be rendered to the page.
- `thumbnail`, the path to an image to use as the thumbnail/header image for the post
- `category`, which allows the posts to be filtered by category and displayed in separate horizontal scroller components on the "Posts" page.

![Save File as Template](/img/file-template-post/file-template.png)

In the above image, we can see that the date is being generated using IntelliJ's built-in date and time functions. IntelliJ doesn't give us the option of specifying a datetime format, so we have to manually build it with each individual date and time variable. The variables will that the date and time that my system is in, which for me is typically Central Standard Time, but ISOstrings default to UTC, so I've included `-6:00` at the end to denote Central Standard Time. 

![Custom template variables](/img/file-template-post/template-variables.png)

All the other variables that we see are custom variables, and IntelliJ will ask us for their values when we create a new file. Since we left "File name" blank when creating the template, it will prompt us for that value as well. 


## Using the Template

![Creating a new blog post](/img/file-template-post/new-blog-post.png)

Now when I sit down to write a new blog post, I simply right-click on my `content` directory and select "New>blog-post", and get straight to writing. It makes writing directly in markdown files almost feel like I have a CMS right inside my IDE, and I love that I can fall right into my flow without the preliminary steps of creating the markdown file from scratch. 


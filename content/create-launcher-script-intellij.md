---
layout: blog
title: Creating a Launcher Script for IntelliJ on macOS
author: Alex Root-Roatch
description: A how-to on opening project directories directly from your terminal.
date: 2024-05-18T01:58:31.529Z
updated: 2024-05-18T01:58:31.529Z
thumbnail: /img/intellij-logo.png
category: 
  - Workflows
---

## Introduction

Being able to open a directory in your IDE directly from the terminal can be very convenient, especially after doing a `git clone`. VS Code offers the `code` command that's installed via a built-in command in the command palette. IntelliJ, however, does not offer such a feature. This article will be a step-by-step guide to creating a bash script that opens the specified directory in a new IntelliJ window, and since we're professional developers, we'll be doing everything in the terminal. 

This guide is specific to macOS. For other operating systems, see the [IntelliJ Docs](https://www.jetbrains.com/help/idea/working-with-the-ide-features-from-command-line.html).

## The macOS `open` Command

macOS natively provides a way to open files and directories from the command line via the `open` command. Opening a directory will display the directory contents in a new Finder window, and opening a file will open it in the default application for that file type. Passing the `-a` flag, though, allows us to open a specific application, and the `-n` flag will open a new window of that program even if it's already running. So the command to open a specific directory in IntelliJ looks like this: 

```bash
open -na "IntelliJ IDEA.app" ~/path/to/my-project-directory
```

If IntelliJ isn't in the default `/Applications` directory, you will need to specify the full path to the application. 

## Making a Shell Script

That's not super convenient to type, and the whole goal here is convenience. Therefore, let's create a shell script that contains this code and take the name of our directory or file as an argument. 

First, let's create our new file in the `bin` directory where all of our command line commands are stored. In your terminal, type: 

```bash
touch /usr/local/bin/idea
```

Since we are specifying an absolute path (the full path starting from `root`), we can run this command from wherever you are in your terminal. 

Notice we used `touch`, which creates a new file, but we didn't include an extension in our filename. That's because we're going to use a *shebang* in our file to tell the system how to execute our file. This saves us from having to type the extension whenever we want to use the command.

To edit our file without leaving the terminal, we will use `nano`. If you're in the `bin` directory, type `nano idea`. Otherwise, you can type `nano` followed by the absolute path that we used when we created the file. 

And now your terminal is magically a text editor! Copy and paste the following code into the text editor window: 

```bash
#!/bin/sh

open -na "IntelliJ IDEA.app" --args "$@"
```

The first line is a *shebang* that tells the system to execute the file as a shell script. `--args` allow us to pass our directory or file name into the command, just like passing an argument into a function. The `"$@"` means that if we enter multiple arguments, all arguments will be passed through to the command. 

Press `control+X` to exit the file. Press `y` when asked if you'd like to save.  

## Testing Our Shell Script

Now we should be able to type `idea` followed by the path to our project directory to open it in IntelliJ. If you're in your project directory's containing folder, you can simply type the name of your project directory rather than the full path. If you're inside your project directory, you can be even more succinct and type `idea .` .

If you get an error saying that you were denied due to permissions, you need to grant the current user execute permissions to our new script file. Type: 

```bash
chmod +x /usr/local/bin/idea
```

Try again, and it should work! 

## Getting More Specific

Remember how that `"$@"` allows us to input multiple arguments? Well, not only can we open our project directory or specific file in IntelliJ from the command line, we can open a specific file *at a specific line.* For example: 

```bash
idea --line 42 ~/MyProject/scripts/numbers.js
```

This will open the file `number.js` in the `scripts` directory in our project `MyProject` and jump directly to line 42 of the file. Pretty cool, huh? 












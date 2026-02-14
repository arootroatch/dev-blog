---
layout: blog
title: Creating a JAR file
author: Alex Root-Roatch
description: Packaging my Java application to be able to use it as a dependency in other applications
date: 2024-08-26T21:18:04-6:00
updated: 2024-08-26T21:18:04-6:00
thumbnail: /img/java-banner.png
category: [ Java ]
---

## Packaging JARs

Recently, I needed to create a `.jar` file from my Java application in order to use it as a dependency in a Clojure project. This is done with the `jar` terminal command. 

The `jar` command has a lot of options, and there's a lot of information out there about previous versions, so it took some research to figure out the right approach for me. The solution I came up with was: 

```bash
cd out
jar -cfe MyHttpServer.jar MyServer.Main .
```

## Explanation

- `cd` to change directory to `out` to run the command inside the folder where the compiled class files are
- The `c` flag denotes that we are creating a new file
- The `f` flag denotes that we will specify the file name
- `MyHttpServer.jsr` is the name of the file to be created
- The `e` flag is to denote that we will specify the entry point of the application
- `MyServer.Main`is the specified entry point
- The `.` means "compile all the class files in this folder"

The `e` option auto-generates a manifest file that stores metadata about our application, like the entry point, version information, and classpath configuration. It is possible to write a custom manifest file for more complex applications. For my purposes, I found simply using `e` instead of providing a custom manifest file to be sufficient. 
 
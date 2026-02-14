---
layout: blog
title: Testing Print Output in JUnit
author: Alex Root-Roatch
description: Re-routing standard out from the console to a testable output stream.
date: 2024-08-11T09:04:56-6:00
updated: 2024-08-11T09:04:56-6:00
thumbnail: /img/java-banner.png
category: [Java]
---

## Creating an Output Stream

In order to re-route printing from going to the console, we need something else to send that data to and store it for access later. This can be done with a `ByteArrayOutputStream`: 

```java
ByteArrayOutputStream outContent = new ByteArrayOutputStream();
```

## Saving the Current Output Setting

At the end of the tests, we'll want to set standard out back to the console to restore expected functionality. Let's save the current output configuration to a variable to access later before redefining standard out: 

```java
final PrintStream originalOut = System.out;
```

## Setting Standard Out to the Output Stream

Now we re-route standard out from the console to the `outContent` output stream we created. We need to create a `PrintStream` that prints to `outContent` and send standard out to that: 

```java
System.setOut(new PrintStream(outContent));
```

## Testing

The result of `System.out.print` will now be stored to `outContent` as an array of bytes. To test that the content is what it should be, it needs to be converted to a string first: 

```java
assertTrue(outContent.toString().contains("Hello!"));
```

## Reset Standard Out 

After the tests run, it's important to restore expected functionality by setting standard out back to the console. This is where the `originalOut` variable comes in: 

```java
System.setOut(originalOut);
```



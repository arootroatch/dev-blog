---
layout: blog
title: Formatting Dates in Java
author: Alex Root-Roatch
description: Using the SimpleDateFormat classes to format date strings
date: 2024-08-20T12:53:41-6:00
updated: 2024-08-20T12:53:41-6:00
thumbnail: /img/java-banner.png
category: [ Java ]
---

## A Date with Java

Getting the current date and time in Java is easy with `new Date()`, but the format of the date it returns is often
something like "Tues Aug 20 2024 01:07 PM" (depending on the country and region settings of the system). This is often
less desirable compared to something like "08/20/2024 13:07."

With `SimpleDateFormat,` we can define a specific format for how a date should be turned into a string and how a string
should be parsed into a date.

## Define a Pattern

First, we need to define the pattern of how the date is formatted. This will be a `String` that will later be given to
the `SimpleDateFormat` constructor.

For example:

```java
String pattern = "yyyy-MM-dd HH:mm:ss";
SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
```

Now with a date format defined, we can create a new date object that is formatted with this pattern:

```java
String myDate = simpleDateFormat.format(new Date());
```

The characters in the pattern are case-sensitive. Notice that months are denoted with capital "M" but minutes are
lowercase. Similarly, capital "H" denotes 24 hour time with 0 being midnight, while lowercase "h" is 12 hour time.

The number of characters provide also matter. For example, three capital "M's" will provide the first three letters of the month, but four will provide the full name of the month. 

## Pattern Syntax

I found this handy table in [Digital Ocean's blog](https://www.digitalocean.com/community/tutorials/java-simpledateformat-java-date-format):

<table>
<thead>
<tr>
<th>Letter for Pattern</th>
<th>Date or Time component</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>G</td>
<td>Era designator</td>
<td>AD</td>
</tr>
<tr>
<td>y</td>
<td>Year</td>
<td>2018 (yyyy), 18 (yy)</td>
</tr>
<tr>
<td>M</td>
<td>Month in year</td>
<td>July (MMMM), Jul (MMM), 07 (MM)</td>
</tr>
<tr>
<td>w</td>
<td>Results in week in year</td>
<td>16</td>
</tr>
<tr>
<td>W</td>
<td>Results in week in month</td>
<td>3</td>
</tr>
<tr>
<td>D</td>
<td>Gives the day count in the year</td>
<td>266</td>
</tr>
<tr>
<td>d</td>
<td>Day of the month</td>
<td>09 (dd), 9(d)</td>
</tr>
<tr>
<td>F</td>
<td>Day of the week in month</td>
<td>4</td>
</tr>
<tr>
<td>E</td>
<td>Day name in the week</td>
<td>Tuesday, Tue</td>
</tr>
<tr>
<td>u</td>
<td>Day number of week where 1 represents Monday, 2 represents Tuesday and so on</td>
<td>2</td>
</tr>
<tr>
<td>a</td>
<td>AM or PM marker</td>
<td>AM</td>
</tr>
<tr>
<td>H</td>
<td>Hour in the day (0-23)</td>
<td>12</td>
</tr>
<tr>
<td>k</td>
<td>Hour in the day (1-24)</td>
<td>23</td>
</tr>
<tr>
<td>K</td>
<td>Hour in am/pm for 12 hour format (0-11)</td>
<td>0</td>
</tr>
<tr>
<td>h</td>
<td>Hour in am/pm for 12 hour format (1-12)</td>
<td>12</td>
</tr>
<tr>
<td>m</td>
<td>Minute in the hour</td>
<td>59</td>
</tr>
<tr>
<td>s</td>
<td>Second in the minute</td>
<td>35</td>
</tr>
<tr>
<td>S</td>
<td>Millisecond in the minute</td>
<td>978</td>
</tr>
<tr>
<td>z</td>
<td>Timezone</td>
<td>Pacific Standard Time; PST; GMT-08:00</td>
</tr>
<tr>
<td>Z</td>
<td>Timezone offset in hours (RFC pattern)</td>
<td>-0800</td>
</tr>
<tr>
<td>X</td>
<td>Timezone offset in ISO format</td>
<td>-08; -0800; -08:00</td>
</tr>
</tbody>
</table>

## Specifying Locale

We can provide a second argument to the `SimpleDateFormat` constructor to specify the language and country of our date string: 

```java
String pattern = "yyyy-MM-dd HH:mm:ss";
SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern, new Locale("es", "ES"));
```

This will return a date in Spanish with formatting specific to Spain. The first argument, "es", denotes the language, while the second denotes the country. For English in the United States, it would be `new Locale("en", "US)`.

Locales are a combination of the [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code and [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code. 

## Parsing

We can also turn strings into date objects with `simpleDateFormat.parse()`. In addition to providing a string to be parsed,  we still need to provide a pattern string so the method knows how to parse the string. For example: 

```java
String pattern = "yyyy-MM-dd HH:mm:ss";
SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
Date date = simpleDateFormat.parse("2024-08-20 13:57:32");
```

This may look almost identical to the example before. The main difference is that the result is of type `Date` instead of `String`.
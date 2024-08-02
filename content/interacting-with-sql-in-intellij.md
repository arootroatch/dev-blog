---
layout: blog
title: Interacting with SQL in IntelliJ
author: Alex Root-Roatch
description: Interacting with SQL in the terminal can be cumbersome. InitelliJ provides a snazzy GUI to make things easier.
date: 2024-08-01T20:35:19-6:00
updated: 2024-08-01T20:35:19-6:00
thumbnail: /img/intellij-logo.png
category: [ Workflows, SQL ]
---

## Connecting IntelliJ to SQL

Today I learned that I could access my PostgresSQL database from inside IntelliJ. This is a game changer, especially
when tables get too large to fit on one terminal screen, since terminals can't horizontally scroll and the line wrapping
makes the table illegible.

To connect the database, click on the database icon in the right sidebar of IntelliJ. Then click the plus button in the
top left or `Cmd` + `N` to add a new datasource. Then select the desired flavor of database.

In the window that pops up, enter the connection details of the database. After hitting "Apply," IntelliJ might ask to
install a driver for the type of database. After installing the driver, click "Test connection..." at the bottom of the
dialog box.

The connection should now show up in the right sidebar of IntelliJ.

## Interacting with the Database

Now that the database is connected, it is easy to see all the columns of the table in the sidebar. Double-clicking on a
table or a table column will open a tab for that table in the main editor window. From here, the database can be viewed,
filtered, and sorted just like working with a spreadsheet.

Rows can be added and deleted, and table values can be added by typing in the cells. All updates in the GUI need to be
submitted before the changes actually take effect in the database. Changes are submitted by clicking the submit button
at the top or by typing `Cmd` + `Enter`.

There's also a query console, where SQL commands and scripts can be typed in and run like in the terminal, but with the
autocomplete assistance of being in an IDE.

## Conclusion

There are database GUI tools like pgAdmin, but nothing beats being able to stay inside IntelliJ. It's a huge efficiency booster. 




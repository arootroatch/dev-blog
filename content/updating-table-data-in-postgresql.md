---
layout: blog
title: Updating Table Data in PostgreSQL
author: Alex Root-Roatch
description: Adding rows, changing column types, and more!
date: 2024-07-31T21:38:24-6:00
updated: 2024-07-31T21:38:24-6:00
thumbnail: /img/psql-banner.png
category: SQL
---

## Create a New Table

In order to start saving data to PostgreSQL, we'll need to create a new table for our data. This can be done
with `CREATE TABLE`:

```sql
CREATE TABLE weather (
    city            varchar(80),
    temp_lo         int,           -- low temperature
    temp_hi         int,           -- high temperature
    prcp            real,          -- precipitation
    date            date
);
```

In the above example, "weather" is the name of the table being created, "city" and all the words below it are the names
of the columns, the words next to that are the data types of each column, and the words followed by "--" are comments.
PostgreSQL supports a large amount of different types, and a table of them can be
found [here](https://www.postgresql.org/docs/current/datatype.html).

The `DEFAULT` keyword can also be provided after the type declaration in order to declare default values for each column
if no value is given.

## Adding Rows

Now that we have a table, we can start adding rows to the table with `INSERT`:

```sql
INSERT INTO films VALUES
    ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');
```

This will add these values to each column in the table. This must be added in the same order the columns are in.

For more flexibility, we can also specify the corresponding columns we wish to add data to:

```sql
INSERT INTO films (code, title, did, date_prod, kind)
    VALUES ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy');
```

Notice that this example has one less value. The omitted column will be filled with its default value if one was
declared. We can also skip over a column without typing out all the column names by using `DEFAULT:`

```sql
INSERT INTO films VALUES
    ('UA502', 'Bananas', 105, DEFAULT, 'Comedy', '82 minutes');
```

## Update an Existing Row

To edit an existing row, we use `UPDATE`:

```sql
UPDATE films SET kind = 'Comedic' WHERE kind = 'Comedy';
```

This will take all films that have are labelled "Comedy" in the "kind" column and change the word "Comedy" to "Comedic".

If we want to make this change to only one film, we can filter by that film instead:

```sql
UPDATE films SET kind = 'Comedic' WHERE title = 'Bananas';
```

We can also do functions like addition, subtraction, and concatenation:

```sql
UPDATE films SET did = did + 1 WHERE did = 105;
-- changes 105 to 106

UPDATE films SET title = CONCAT(title, 's') WHERE title = 'Banana';
--changes 'Banana' to 'Bananas'
```

## Alter the Datatype of a Column

Accidentally put too low of a character limit when declaring a column as type `varchar(30)`? No worries! We can change
that without altering any data with this:

```sql
ALTER TABLE weather ALTER COLUMN city TYPE varchar (80);
```

We can also add and delete columns from the table:

```sql
ALTER TABLE weather ADD COLUMN avg_temp int;
-- Adds 'avg_temp' column to 'weather'

ALTER TABLE weather DROP COLUMN avg_temp;
-- Deletes 'avg_temp' column from 'weather'
```
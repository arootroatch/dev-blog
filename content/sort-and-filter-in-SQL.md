---
layout: blog
title: Sort and Filter in SQL
author: Alex Root-Roatch
description: Using SQL to sort and filter data is cleaner, increases performance, and minimizes the chance of bugs.
date: 2024-08-03T19:12:40-6:00
updated: 2024-08-03T19:12:40-6:00
thumbnail: /img/psql-banner.png
category: [ SQL ]
---

## Getting the Last Game ID

In the first iteration of my Postgres database in my tic-tac-toe application, I was pulling in all game IDs and then
processing the data inside of Clojure to get the last game ID in order to calculate a new game ID. This has a few
drawbacks:

- As the database grows, that's going to be a lot of data that's being loaded and then processed inside the application.
- There are two possible places to introduce bugs: the SQL query and the code that processes the data
- It's more code than necessary.

Sorting, filtering, and limiting the amount of results can actually be done right in the SQL query. This means I can use
SQL to get the one number of the most recent game ID and nothing else. Here's before sorting in SQL: 

```clojure
(let [query (jdbc/execute! ds ["SELECT id FROM games"])
    ids (map #(:games/id %) query)
    last-id (->> ids sort last)]
last-id))
```

And after:

```clojure
(defn- get-last-id [ds]
  (let [query (jdbc/execute! ds ["SELECT id FROM games ORDER BY id DESC LIMIT 1"])]
    (-> query first :games/id)))
```


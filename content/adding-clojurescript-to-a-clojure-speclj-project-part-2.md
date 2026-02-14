---
layout: blog
title: "Adding ClojureScript to a Clojure Speclj Project: Part 2"
author: Alex Root-Roatch
description: Adding a local development server and tooling for CSS in Clojure
date: 2024-09-07T10:36:04-6:00
updated: 2024-09-07T10:36:04-6:00
thumbnail: /img/cljs.png
category: [Clojure]
---

In [part 1](https://arootroatch-blog.vercel.app/adding-clojurescript-to-a-clojure-speclj-project-part-1), I discussed adding ClojureScript to my Clojure tic-tac-toe app with support for a TDD workflow with Speclj. I ended by mentioning the lack of local development server, which required me to load `index.html` as a file directly in the browser. 

In this post, I'll discuss how I added a local development server, tooling for CSS in Clojure, and bundled that all together with Speclj in one terminal command. 

## Adding a Local Server

To have a local server, I used [this http-server from http-party](https://github.com/http-party/http-server). It can be installed with either `npm install http-server -g` or `brew install http-server`. 

Once installed, I needed a bash script to start the server and serve the contents of my `resources/public` directory. At the root of my project directory, I added: 

```text
├── bin
│   ├── server
```

The server file contained the following bash script: 

```bash
#! /bin/sh

pushd resources/public

PORT=8080
echo "Starting server on Port: $PORT"
http-server --proxy "http://localhost:$PORT?"
```

This will start the server on `localhost:8080` and serve the contents in the `resources/public` directory. 

However, before this actually worked by calling `bin/server` in the CLI, I needed to add executable permissions to the file: 

```bash
chmod u=rwx,g=rx,o=r bin/server
```

> NOTE: If it seems what the server is serving is not reflective of changes you've made to your code, try restarting the server. If that doesn't fix it, delete the `cljs` directory inside `resources/public` to clear out the previously compiled code. That way, the next compile will be completely fresh without any code from previous compiles carrying over. This can often happen when changing the directory structure of the application, liking add or removing folders or move files to different folders. 

## Setting up CSS in Clojure

Since we're writing React in Clojure, why not write CSS in Clojure, too? 

#### Adding the Files

To start, I needed a place to put my CSS-in-Clojure files. At the root of my project directory, I added:

```text
├── dev
│   ├── ttt
│   │   ├── styles
│   │   │   ├── main.clj
```

In `main.clj`, I added: 

```clojure
(ns ttt.styles.main
  (:refer-clojure :exclude [rem])
  (:require [garden.def :as def]))

(defmacro defstyles
  "Convenience: `(garden.def/defstyles name styles*)"
  [name & styles] `(def/defstyles ~name ~@styles))

(defstyles screen
           [:body {
                   :text-align "center"
                   }
            ]
           )
```

This uses [garden](https://github.com/noprompt/garden?tab=readme-ov-file) to write CSS, just like [hiccup for HTML](https://github.com/weavejester/hiccup). The above code will compile to: 

```css
body {
    text-align: center;
}
```

#### Compiling the CSS

Scaffold provides a CSS compiler for Clojure, but it requires a configuration file at the location `resources/config/css.edn.` After creating that file, I added this configuration: 

```clojure
{
 :source-dir  "dev/ttt/styles"
 :var         ttt.styles.main/screen
 :output-file "resources/public/css/ttt.css"
 :flags       {:pretty-print? true
               :vendors       ["webkit" "moz" "o"]}
 }
```

This tells Scaffold where to find the Clojure files that need to be compiled and where to put the resulting `.css` file. This resulting file needs to be brought into the app in the `index.html`, so in the `<head>` of the `index.html`, I added:

```html
<link type="text/css" rel="stylesheet" href="/css/ttt.css"/>
```

Then in `deps.edn`, I added an alias for calling `scaffold.css`: 

```clojure
:aliases {:css  {:main-opts ["-m" "c3kit.scaffold.css"]}}
```

Now running `clj -M:test:css` will compile the CSS file!

#### Using Vanilla CSS

Of course, it's still possible to write normal CSS. Simply add a file like `styles.css` to `resources/public/css` and make sure to load that file in the `<head>` of `index.html`.

## Creating a Bundle Script

At this point, we have three different commands to do three different things:
1. `clj -M:test:cljs` to compile ClojureScript and run Speclj tests using Headless Chrome
2. `clj -M:test:css` to compile the CSS
3. `bin/server` to start the local development server and serve `resources/public`

Wouldn't it be great if it was all one command? 

To achieve that, in `dev/ttt` I added `dev.clj` with the following code: 

```clojure
(ns ttt.dev
  (:require [c3kit.apron.log :as log]
            [c3kit.scaffold.cljs :as cljs]
            [c3kit.scaffold.css :as css]
            [clojure.java.shell :as sh]))

(defn start-cljs [] (cljs/-main "auto" "development"))
(defn start-css [] (css/-main "auto" "development"))
(defn run-server [] (sh/sh "./bin/server"))

(def threads
  {:cljs   (Thread. start-cljs)
   :css    (Thread. start-css)
   :server (Thread. run-server)})

(defn shutdown []
  (log/report "---- DEV Task - Shutdown ----"))

(defn -main
  "Where three separate tasks (and Java processes) were required before, this single task will host them all
   in a single Java process.  Easier to use and consuming less computer resources."
  [& args]
  (log/report "---- DEV Task - One process to rule them all.----")

  (.addShutdownHook (Runtime/getRuntime) (Thread. shutdown))

  (let [thread-keys (set (if (seq args) (map keyword args) (keys threads)))]
    (log/report "Starting: " thread-keys)
    (doseq [[key thread] threads]
      (when (contains? thread-keys key)
        (.start thread)))))
```

This will start each of those tasks in their own thread. To call this file, I added two more aliases to `deps.edn`: 

```clojure
:aliases {
         :dev  {:main-opts ["-m" "ttt.dev"]}
         :dev- {:main-opts ["-m" "ttt.dev" "cljs" "css"]}
         }
```

This allows me to use `clj -M:test:dev` to perform all three tasks, or `clj -M:test:dev-` to do everything but start the server, in case I want to recompile everything but don't need the server.  

## Conclusion

That was a lot! Now with tests running (and watching for changes, automatically recompiling and rerunning), styling set up, and a local development server showing my changes in the browser, I can focus on simply writing code. Time to TDD some React!






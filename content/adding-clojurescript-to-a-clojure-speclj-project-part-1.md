---
layout: blog
title: "Adding ClojureScript to a Clojure Speclj Project: Part 1"
author: Alex Root-Roatch
description: Setting up a pre-exsiting project to be able to TDD ClojureScript with Speclj
date: 2024-09-05T21:25:49-6:00
updated: 2024-09-05T21:25:49-6:00
thumbnail: /img/cljs.png
category: [Clojure]
---

This week I'm working on adding a ClojureScript/React UI to my Clojure tic-tac-toe application. The past two days have been filled with setting up my repository to have a working ClojureScript development environment, including Speclj for TDD and a development server. This two part post will detail the steps I took to get everything working. Big thank-yous to Jake Ogden, Alex Jensen, and Brandon Correa for the guidance and troubleshooting throughout the process.

## Change Directory Structure

The first step was to set up my project's directory structure to accommodate ClojureScript. My file tree before adding ClojureScript was: 

```
├── spec
│   ├── tic_tac_toe
│   │   ├── [test files and packages]
├── src
│   ├── tic_tac_toe
│   │   ├── [source files and packages]
├── deps.edn
├── README.md
└── .gitignore
```

With adding ClojureScript, I'll be dealing with three different Clojure extensions, `.clj`, `.cljs` for ClojureScript, and `.cljc` for Clojure Commons, which will be code that is shared between the ClojureScript version of the app and the terminal and desktop versions. It's important to keep all of this organized, so I changed my directory structure to: 

```
├── spec
│   ├── clj
│   │   ├── tic_tac_toe
│   │   │   ├── [test files and packages]
│   ├── cljc
│   │   ├── tic_tac_toe
│   │   │   ├── [test files and packages]
│   ├── cljs
│   │   ├── tic_tac_toe
│   │   │   ├── [test files and packages]
├── src
│   ├── clj
│   │   ├── tic_tac_toe
│   │   │   ├── [test files and packages]
│   ├── cljc
│   │   ├── tic_tac_toe
│   │   │   ├── [test files and packages]
│   ├── cljs
│   │   ├── tic_tac_toe
│   │   │   ├── [test files and packages]
├── deps.edn
├── README.md
└── .gitignore
```

With this new structure, the `spec` and `src` directories are no longer marked as "Test Sources Root" and "Sources Root", but instead each folder for each Clojure file type is, resulting in three Test Sources Root folders and three Sources Root folders. 

To make sure the project knows where to look for the files, the new paths need to be added to `deps.edn`:

```
{
:paths     ["src/clj" "src/cljs" "src/cljc"]
:aliases   :test {:extra-paths ["spec/clj" "spec/cljs" "spec/cljc"]}
}
```

At this point, I reran all of my tests to make sure everything worked correctly after changing directory structure. The `cljc` and `cljs` folders were empty at this point and all of my project was inside the `clj` folders. 

## Adding New Dependencies 

The next step was bringing in the new dependencies needed for writing, compiling, and testing ClojureScript. I added the following to my `deps.edn`: 

```
{
 :deps      {
             cljsjs/react                      {:mvn/version "17.0.2-0"}
             cljsjs/react-dom                  {:mvn/version "17.0.2-0"}
             com.cleancoders.c3kit/bucket      {:mvn/version "2.1.3"}
             reagent/reagent                   {:mvn/version "1.2.0"}
             com.google.jsinterop/base         {:mvn/version "1.0.1"}
             com.cleancoders.c3kit/wire        {:mvn/version "2.1.4"}
             }

 :aliases   {
             :test {
                    :extra-deps  {
                                  org.clojure/clojurescript      {:mvn/version "1.11.132"}
                                  com.google.jsinterop/base      {:mvn/version "1.0.1"}
                                  com.cleancoders.c3kit/scaffold {:mvn/version "2.0.3"}
                                  }
                    }
             :cljs {:main-opts ["-m" "c3kit.scaffold.cljs"]}
             }
 }
```

*Scaffold* is a Clean Coders library for compiling ClojureScript and running Speclj tests in JavaScript using headless Chrome. *Wire* is a Clean Coders library that provides useful functions for rendering components to the DOM for testing and using JavaScript interop in a more Clojure-idiomatic way. 

The added `:cljs` alias makes it easy to run ClojureScript specs using `clj -M:test:cljs`. 

Please note that the above example only shows what was added to the `deps.edn` file at this point and is not the full `deps.edn` file. 

## Adding the Resources Folder

Before being able to use Scaffold, though, I needed to create a `resources` directory with a configuration file for Scaffold to use. At the root of the project directory, I added: 

```
├── resources
│   ├── config
│   │   ├── cljs.edn
```
In that configuration file, I put; 

```
{:ns-prefix     "tic_tac_toe"
 :ignore-errors ["goog/i18n/bidi.js"]
 :development   {:cache-analysis true
                 :optimizations  :none
                 :output-dir     "resources/public/cljs/"
                 :output-to      "resources/public/cljs/tic_tac_toe_dev.js"
                 :pretty-print   true
                 :sources        ["spec/cljs" "src/cljs"]
                 :specs          true
                 :verbose        true
                 :watch-fn       c3kit.scaffold.cljs/on-dev-compiled
                 :parallel-build true
                 }
 }
```

This is telling Scaffold to watch the `spec/cljs` and `src/cljs` folders for changes, searching for all files that have "tic_tac_toe" as their namespace prefix. It also tells Scaffold to put the compiled code into the "resources/public/cljs" folder and the compiled JavaScript that will ship to the client into a file called "tic_tac_toe_dev.js". Both the folder and the file will be created automatically if they don't already exist. 

> CAUTION: Notice the namespace prefix "tic_tac_toe" uses underscores. One thing that's confusing about Clojure is that, while namespaces can have hyphens in the namespace declaration at the top of the file, the package names use underscores. For this configuration file, it's important to match the package name, not how the namespace appears in the Clojure file. 
> 
> I started out having it as "tic-tac-toe", and this caused a problem where the tests would run if I ran them with the "once" argument, but they would not run at all when using the auto runner (which is the default). 

## Adding the First ClojureScript Files

The next step was actually creating a ClojureScript file and accompanying test file to get started. 

I created `src/cljs/tic_tac_toe/main.cljs` and `spec/cljs/tic_tac_toe/main_spec.cljs`. 

#### `main.cljs` 

```
(ns tic-tac-toe.main
  (:require [reagent.dom :as rdom]
            [c3kit.wire.js :as wjs]))

(defn app []
  [:div
   {:id "bob"}
   [:a {:href "/"}]])

(defn ^:export main []
  (rdom/render [app] (wjs/element-by-id "app")))
```

Here I've created a basic dummy component called `app` that renders a `div` with an `id` of "bob" and an `a` tag with an `href` pointing to the root of the directory. 

The `main` function takes in a component and renders it to the DOM by selecting an empty `div` with an `id` of "app" and injecting the rendered JavaScript and HTML into the page. It's the ClojureScript equivalent to this: 

```
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
 </React.StrictMode>  
)
```

#### `main_spec.cljs` 

```
(ns tic-tac-toe.main-spec
  (:require-macros [speclj.core :refer [should= it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.main :as sut]))
    
(describe "main"
  (wire/with-root-dom)
  (before
    (wire/render [sut/app]))

  (it "does stuff"
    (should-select "#bob")
    (should= "file:///" (wire/href "#bob a"))))
```

This is using `wire/with-root-dom` to render a blank DOM for the test to use and `wire/render` to render the component to be tested. The test then verifies that it was able to find and select an element with an ID of "bob" as well as selecting the `a` tag inside "bob" and read its `href` value. 

## Run the Test!

At this point, running `clj -M:test:cljs` compiled the ClojureScript, placed the compiled files into `resources/public/cljs`, ran the Speclj tests, and watched the `cljs` directories for changes and automatically re-compiled and re-ran the tests! This defaults to the auto-runner. To run the tests once, I could use the command `clj -M:test:cljs once`. 

## What's It Look Like? 

Nobody likes writing front-end code and not being able to see it in the browser. Now that I had the `main` function defined in ClojureScript, it was time to create a barebones `index.html` file to give that function someplace to inject the code into, as well as this being a file that I could open in my browser and see my code rendering on the page. 

Inside of `resources/public`, I added an `index.html` with the following contents: 

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tic Tac Toe</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/3.13.1/minified.js" type="text/javascript"></script>
  <script src="./cljs/goog/base.js" type="text/javascript"></script>
  <script src="./cljs/tic_tac_toe_dev.js" type="text/javascript"></script>
  <script type="text/javascript">goog.require("tic_tac_toe.main")</script>
  <style>
    * {
      font-family: system-ui;
    }
    button {
      padding: 32px;
    }
    h2 {
      text-align: center;
    }

  </style>
</head>
<body>
<div id="app"></div>
<!--<script src="./cljs/tic_tac_toe/main.js" type="text/javascript"></script>-->
<script type="text/javascript">
  tic_tac_toe.main.main()
</script>
</body>
</html>
```

Let's talk about a few specific lines: 

```
<script src="./cljs/tic_tac_toe_dev.js" type="text/javascript"></script>
```

This is the filename that was defined in `config/cljs.edn` with the compiled JavaScript for running the tests. 

```
<script type="text/javascript">goog.require("tic_tac_toe.main")</script>
```

This is pulling in the `tic_tac_toe.main` namespace from ClojureScript where the `main` function is.

```
<script type="text/javascript">
  tic_tac_toe.main.main()
</script>
```

This is calling the `main` function from the ClojureScript file inside the HTML body after the `div` with an ID of "app" has been created. 

Now after compiling the ClojureScript, I could open this file in my browser and open the inspector and see that the `div` with an ID of "bob" was being rendered to the page!

## What? No Dev Server? 

I know, I know. At this point anyone with previous React experience is saying "Why can't you just type `npm run dev` to start a development server on localhost instead of having to load a filepath into the browser?" In part 2, I'll cover setting up a local development server and adding the ability to write CSS in Clojure!











---
layout: blog
title: Making Extensible React Components
author: Alex Root-Roatch
description: Using multimethods to create child components
date: 2024-09-28T11:42:03-6:00
updated: 2024-09-28T11:42:03-6:00
thumbnail: /img/cljs.png
category: [Clojure]
---

## Child Components 

Often when creating React apps, there are components that contain other components. These subcomponents are referred to as child components. In JavaScript React, if you wanted to reuse the parent component but render different child components inside of it, the child components would need to be passed in as props to the parent component. 

In ClojureScript, this is the equivalent to passing the child component to be rendered as a function argument. However, ClojureScript gives us another option that's even cleaner: multimethods. 

## Polymorphic Components

Instead of adding a function parameter, we can create a multimethod and call that multimethod where the child components need to be rendered. Then the `defmethods` of that multimethod render the desired child components. This can be useful when the parent component contains state that the multimethod can dispatch based on or is already receiving an input argument that the multimethod can dispatch based on, thus eliminating the need for another function parameter. This avoids the need to add any conditional logic where the parent component is rendered in order to decide which child component is passed in, and any new child components in the future can be added simply by implementing a new `defmethod` to the same `defmulti`. 

---
layout: blog
title: The Interface Segregation Principle
author: Alex Root-Roatch
description: Understanding the "I" in SOLID using the switches in our homes
date: 2024-06-11T22:31:04-6:00
updated: 2024-06-11T22:31:04-6:00
thumbnail: /img/interface-segregation/light-switch.jpeg
category: Clean Code Practices
---

## What is the Interface Segregation Principle? 

Simply put, the Interface Segregation Principle tell us not to depend on things that we don't need. More explicitly put, classes shouldn't depend on other classes that they aren't a subtype of, and actors shouldn't depend on methods they don't use. 

Take, for example, a switch that turns on a light. The switch simply completes a circuit or interrupts a circuit, so it has no dependency on the light that's on that circuit for it to be able to do its job. The switch also doesn't care what else is on the circuit. We could plug a fan into the circuit and then the switch would turn the fan on and off. The light, however, does depend on the switch completing the circuit in order to turn on.  

## Coding a Lightswitch

So how do we turn this lightswitch example into code?

![Switch UML diagram with dependency on the light](/img/interface-segregation/switch-light.png)

Most simply, we could have a switch class that uses a `turnOn` method to turn on the light. This may work just fine, but now the switch has a dependency on the light, meaning that we can't use the switch for anything else! That doesn't make much sense. The switch shouldn't have to know anything about the light. 

Let's insert an interface to break that dependency. 

![Switch UML diagram with interface](/img/interface-segregation/switch-interface.png)

There! Now the switch only has a dependency on the interface, and the light inherits the `turnOn` method from the interface. This means that the switch and its interface can be together as one component, and the light can be its own component that works as a plug-in to the switch, which is exactly how it should be. Now we can even use that switch for multiple things, like a fan or the inflatable holiday decor that comes out for Christmas and Halloween. 

> NOTE: Notice how the interface ships with the switch, and not with the light or the other devices. That's because interfaces have more to do with the classes that use them than the classes the implement them. It wouldn't make sense for each device to have its own interface that the switch would then need to depend on. As such, the interface should be named in a way that conveys that relationship, in this case, "Switchable."

## Tying it into the Open-Closed Principle

But wait! Doesn't that diagram look suspiciously similar to an example of something that is open for extension but closed for modification? 

Indeed, using interface segregation is a method for ensuring our code adheres to the [Open-Closed Principle](https://arootroatch-blog.vercel.app/open-closed-principle) as well. 

## Interface Segregation in the Single Responsibility Principle

![UML diagram using interface segregation to achieve Single Responsibility](/img/interface-segregation/fat-class.png)

Say we have a fat class with a lot of methods in it and multiple actors depend on those methods. That's breaking the [Single Responsibility Principle](https://arootroatch-blog.vercel.app/single-responsibility-principle). If we don't want to separate the methods into separate classes, we can implement interface segregation and give each actor its own interface to use instead. 


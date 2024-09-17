---
layout: blog
title: The State Pattern
author: Alex Root-Roatch
description: How to bring structure to finite state machines
date: 2024-09-16T18:18:57-6:00
updated: 2024-09-16T18:18:57-6:00
thumbnail: /img/design-patterns.jpg
category: [Clean Code Practices]
---

## Finite State Machines

"State" in an application is data that is updated throughout the runtime of the application that governs the behavior of the software. For example, if a user visits netflix.com and is not signed in, Netflix will be in a "logged out" or "no user" state. When the user signs in, the authentication event causes Netflix's state to change to displaying the user's media home page. State is often stored in a variable like a string, enum, integer, or keyword that the application references in order to know how to behave. State changes occur in response to an event that triggers a state change.

All state logic can be framed as "given...when...then." *Given* that Netlfix is in the "logged out" state, *when* the user is authenticated, *then* transition to the "logged in" state and display the user's media home page. In a simple application without many elements of state data to keep track of, state changes could be implemented as easily as using a switch/case statement. With more complex applications, switch/case statements quickly become very large, difficult to read, and difficult to maintain, not to mention a huge [Open Closed Principle](https://arootroatch-blog.vercel.app/open-closed-principle) violation. That's where the State Pattern comes in. 

## Subway Turnstiles

To illustrate the State Pattern, let's use the example of a subway turnstile. A turnstile has two states: locked and unlocked. There are two events that will cause a state change: the user inserting a coin and the user passing through the turnstile. Given that the turnstile is in the locked state, when the user inserts a coin, change to the unlocked state and call the unlock action. Given that the turnstile is in the unlocked state, when the user passes through the turnstile, change to the locked state and call the unlock action. 

The goal of the state pattern is to separate the action that causes the state change from the lower-level detail of how the state should change. The idea is to simply declare "the user inserted a coin" or "the user passed through the turnstile" and for the program to know everything that needs to happen in response to that event. 

![Basic State Pattern UML](/img/state-pattern/state-pattern.png)

In the above diagram, there's a TurnstileStateMachine class that holds a reference to the current state as a private field, public methods `coin()` and `pass()` for the two state-changing events, a `setState()` method that texts the next state as an argument to update the private `state` field, and two private methods for locking and unlocking the turnstile. 

The `coin()` and `pass()` methods call the corresponding methods in the TurnstileState interface, which takes the instance of the TurnstileStateMachine class as an argument. If the coin event happens and the value of `state` is "locked," the Locked State implementation will call `setState("unlocked")`, passing in a reference to the next state as an argument and calling the `unlock()` method on the turnstile. 

In this example, it’s easy to add more states, but if multiple implementations of the actions are needed, there isn't a good way to extend the current behavior. Say, for example, there are two different models of turnstiles that require different lock and unlock actions. The current coupling of the action and logic creates an Open Closed violation. 

## Adding to the Action

![State Pattern with Two Turnstiles](/img/state-pattern/state-pattern-two-turnstiles.png)

This issue can be resolved by making the lock and unlock methods abstract and then creating specific implementations of those methods based on which turnstile is in use.

If the locked state and unlocked state implementations of the TurnstileState interface are implemented as static variables inside the interface, this would also create an OCP violation, as modifying any of the logic for each state or adding a new state would cause a change to interface itself.  

## Adding to the Logic

![State Pattern with Abstract State Class](/img/state-pattern/abstract-state-method.png)

Logic can be extensible added by using an abstract class that implements the interface and using that abstract class to store those static variables.

## Managing State in GUIs

The state machine approach can be very useful for handling user interactions in GUIs. For example, in my Quil GUI for tic-tac-toe, given that the current screen is the mode-selection screen, when the user clicks on a button to select the mode, store the user’s selection and update the current screen to the board-selection screen. Given that the current screen is the board-selection screen, when the user clicks an area of the screen that is not a button, recapitulate the current state, staying on the board-selection screen.

## Conclusion

Managing all the different state transitions in an application can be difficult, but using the state pattern can greatly help in keeping our code organized and keeping track of all the different states in our application.






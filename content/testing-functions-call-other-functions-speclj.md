---
layout: blog
title: Testing Functions That Call Other Functions in Speclj
author: Alex Root-Roatch
description: Stubs can allow us to test when our function invokes other functions
date: 2024-06-19T20:18:18-6:00
updated: 2024-06-19T20:18:18-6:00
thumbnail: /img/robot-computer.jpeg
category: 
  - Clojure
---

## No New Code Here

Earlier today, I found myself faced without an interesting scenario: in my tic-tac-toe game, I had a multimethod that called different logic for when the computer played its turn based on the level of difficulty selected by the user. Each `defmethod` assigned the resulting move from either `find-eay-move`, `find-medium-move`, or `find-best-move` to a `let` binding called `move`, the supplied that `move` to the `play-bot-turn` function, which updates the game board. 

```clojure
(defmethod player/take-turn 2 [{:keys [board player]}]
  (let [move (find-medium-move board)]
    (play-bot-move board move player)))
```

All those "find move" functions had already been tested because they were written with TDD. It seemed silly to write tests to try to account for what an already-tested function was going to do, so instead I decided to simply test if the correct function was being invoked and being passed the right arguments. I was able to do this by using *stubs*.

## Stubs

Stubs are essentially placeholders for parts of our code. By creating a stub and then redefining an existing part of our code by binding it to that stub, we can make our tests intercept those functions rather than actually invoking them. In the case of my multimethod, I simply needed to make sure the multimethod was going to invoke the proper function with the proper arguments without needing to make it actually call that function. 

So, at the top of my tests inside the `describe`, I put: 

```clojure
(with-stubs)
(redefs-around [find-easy-move (stub :find-easy-move)
                find-medium-move (stub :find-medium-move)
                find-best-move (stub :find-best-move)])
```

This tells the tests that I'm using stubs and then redefines the "find move" functions as stubs that are named with keywords that mimic the original function name. Now we can call our function in our test like we normally would, but instead of testing the return value, we test that it invoked the expected stub with the expected arguments. 

```clojure
(it "calls find-medium-move"
  (player/take-turn {:level 2 :board [:x 2 3 4 5 6 7 8 9] :player :o})
  (should-have-invoked :find-medium-move {:with [[:x 2 3 4 5 6 7 8 9]]})
```

`redefs-around` is a super convenient trick that Speclj provides us with that tells our tests to use these stub bindings for all of our tests. Without it, we would need to use `with-redefs` in every single test we wanted to use our stubs in, like so:

```clojure
(it "displays bot-move to user"
   (with-redefs [ui/display-bot-move-message (stub :display-bot-move-message)]
      (play-bot-move [1 2 3 4 5 6 7 8 9] 5 :o)
      (should-have-invoked :display-bot-move-message {:with [5]})))
```

## Unexpected Side Effects

Great, now we're testing that it's invoking the right function with the right arguments. However, now we're getting an error that the next line of our function is broken. Let's take a look:

```clojure
(defmethod player/take-turn 2 [{:keys [board player]}]
  (let [move (find-medium-move board)]
    (play-bot-move board move player)))
```

We're passing the move that we get from `find-medium-move` into `play-bot-move`, but `move` is always going to be `nil` now that we've stubbed out that `find-medium-move` function because it's never actually called! 

So how do we fix this? We have a few options.

## Use the `:invoke` Option

If we go back to where we created our stubs, we can make our stubs invoke a function of our choosing while still allowing us to test `should-have-invoked`.

```clojure
(redefs-around [find-easy-move (stub :find-easy-move {:invoke find-easy-move})
```

Now our test will intercept calls to `find-easy-move` but then it will still invoke the function afterward, passing along the arguments that were in the test. Now, `move` will actually get a value returned from the function and won't be `nil` when it's passed to `play-bot-move`.

## Stub Out `play-bot-move`

We could just stop `play-bot-move` from being invoked, which will stop that error from happening, by stubbing out `play-bot-move` as well. However, that comes with its own side effects: 

If it's stubbed out using `redefs-around`, we won't be able to test the output of the `play-bot-move` function because it will never actually run. There are two ways we could deal with this:
1. Use `with-redefs` on every test where we need to stub out `play-bot-move` instead of `redefs-around`. This might require a lot of refactoring and might not be ideal. 
2. Separate the test that need the stub into their own `context` and put the `redefs-around` statement at the top of the context. This will make sure the stub applies to all tests in that context, but not outside of it. 


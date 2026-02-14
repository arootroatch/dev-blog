---
layout: blog
title: Testing Terminal Input and Output in Speclj
author: Alex Root-Roatch
description: How to have automated tests when your application depends on user input and printing to the terminal
date: 2024-06-06T20:42:32-6:00
updated: 2024-06-06T20:42:32-6:00
thumbnail: /img/robot-computer.jpeg
category: 
  - Clojure
---

## Tic Tac Toe

Today while working on Tic Tac Toe using TDD in Speclj, I ran into a road block. I had written the function that could accept a move as an argument and update the board accordingly, but not it was time to make it read the move that the user types into the terminal. To make things trickier, I needed to write the test for it first. 

I was confused. If the point of tests is to automatically run our functions and check them for proper output, running things in the terminal doesn't really account for that. How do we get our tests to simulate terminal input and detect things that are printed to the terminal? 

That's where `with-in-str` and `with-out-str` come in. 

## `with-in-str`

By wrapping the body of our test in `with-in-str`, we can get our test to simulate user input for us. For example: 

```clojure
 (it "plays first cell"
      (with-in-str "1"
        (let [result (play-move empty-board :x)]
          (should= [:x 2 3 4 5 6 7 8 9] result))))
```

The `play-move` function first calls a `read-move` function that will wait for user input in the terminal. Our test is wrapped in `with-in-str "1"`, so when the function waits for user input to occur, the test will input "1" for us. If our code works, the result will be that there is now an `:x` in cell one in our `board` vector. 

### Double Down

What if we need two inputs from the user? Say, for example, we want to test our error handling for when the user enters an invalid input, like a number outside 1-9, a letter, or the number of a cell that's already taken. That's where the newline `\n` character comes in. For example: 

```clojure
(it "plays a non-numeric move"
      (let [result (with-in-str "blah\n3" (play-move empty-board :o))]
        (should= [1 2 :o 4 5 6 7 8 9] result)))

```

Now, our test will enter in "blah" as the user, which will be rejected and trigger a recursion. Then it will enter "3" and check to see that the third cell in the vector now has an `:o`. 

## `with-out-str`

Now that we've covered user input, what about testing things that we want to print to the terminal? We can let our tests know to expect a string to be printed to the terminal with `with-out-str`.

```clojure
(it "O plays one of X's already played cells"
      (let [board (assoc empty-board 0 :x)
            message (with-out-str (with-in-str "1\n2" (play-move board :o)))
            result (with-in-str "1\n2" (play-move board :o))]
        (should= "Please choose an empty cell\n" message)
        (should= [:x :o 3 4 5 6 7 8 9] result)))
```

Here, we want to make sure we are printing an error message if the user enters a move that's already taken. In our first `should`, we call the function and use `with-in-str` to mimic user input first entering a "1," and then wrap that in `with-out-str` because we expect that to print an error in the terminal since there's already a move in cell 1. It then enters a "2" and tests that the board was updated with an ":o" in cell 2.  

## Stubs

For using `println`, `with-in-str` and `with-out-str` are all we need. But if we need to test output that isn't a string, that's not going to work. For demonstration, we'll stick with printing to the console in this example. 

```clojure
(it "prints the board to the terminal"
      (with-redefs [println (stub :printer)]
        (print-board [1 :x 3 4 :o 6 :o 8 9])
        (should-have-invoked :printer {:with ["1" "x" "3"] ["4" "o"  "6"] ["o" "8" "9"]})
```

Here, we use `with-redefs` to temporarily redefine `println` as a `stub` function that invokes `:printer`. Then we can call our function and test if `:printer` was invoked with the expected output. 


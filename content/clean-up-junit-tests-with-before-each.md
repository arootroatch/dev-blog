---
layout: blog
title: Clean Up JUnit Tests with `@BeforeEach`
author: Alex Root-Roatch
description: This annotatition can help make tests DRY-er.
date: 2024-07-17T20:51:09-6:00
updated: 2024-07-17T20:51:09-6:00
thumbnail: /img/java-banner.png
category: Java
---

## Making Change

This past week, I've been practicing the Coin Changer Kata as a way of getting more familiar with Java. I chose to have the `makeChange()` method return a hashmap where each key was a string denoting the coin and each value was the corresponding quantity of each coin. For example, 16 cents would return `{"dimes": 1; "nickels": 1; "pennies": 1;}`. Since hashmaps can't simply be typed in Java and instead have to be manipulated using methods provide by Java's `Map` interface, each of my JUnit tests looked something like this:

```
@Test
void oneDimeOneNickelOnePenny() {
    coins.put("dimes", 1);
    coins.put("nickels", 1);
    coins.put("pennies", 1);
    assertEquals(coins, coinChanger.makeChange(0.16));
}    
```

The hashmap `coins` is declared at the top of the class so that it can be reused easily for each test. 

## Mutability in Java

Unlike Clojure, data in Java is mutable, so any modifications one test makes to `coins` will carry over to the next test. Not only that, JUnit does not run tests in sequential order, so the actual value of `coins` by the time a certain test is run is unpredictable. 

To address this, I had added `coins.clear()` to the beginning of every test before using the `put()` method to populate the hashmap. Obviously, this became very redundant very quickly. 

## @BeforeEach

To clean this up, JUnit provides the `@BeforeEach` annotation. Function with this annotation will run before every individual test. The top of my test class could be refactored to: 

```
class CoinChangerTest {
    HashMap<String, Integer> coins;

    @BeforeEach
    void setup() {
        coins = new HashMap<>();
    }
    
    all my tests...
}
```

## Compare Values, Not Maps

Along with that, it was also pointed out to me today that comparing maps is dangerous business, as two maps that appear to be the same may not actually evaluate to being equal. So instead of filling the hashmap in the tests in order to then compare that complete hashmap with the hashmap being returned from `makeChange()`, like I was doing above, it's much safer to test the values from specific keys in the hashmap returned from `makeChange()`, like this:

```
@Test
void fourQuartersOneDimeOneNickelOnePenny() {
    coins = coinChanger.makeChange(1.16);
    assertEquals(4, coins.get("quarters"));
    assertEquals(1, coins.get("pennies"));
    assertEquals(1, coins.get("nickels"));
    assertEquals(1, coins.get("dimes"));
}
```

A big thanks to Micah Martin for the tips!
---
layout: blog
title: The Three A's of Test Driven Development
author: Alex Root-Roatch
description: Organizing tests to keep them clean and readable
date: 2024-09-03T20:40:29-6:00
updated: 2024-09-03T20:40:29-6:00
thumbnail: /img/TDD.webp
category: [Clean Code Practices]
---

## Introduction

Writing tests is hard. Making them clean and readable is even harder. Well-written tests should read  like well-written specification documentation. Thankfully, anything complicated can be broken into smaller, more manageable parts, and tests are no different. 

There are three phases to every well-written test: 
1. Arrange
2. Act
3. Assert

## Arrange

"Arrange" refers to the part of the test that sets up everything necessary for the tests to run, such as variables and data structures that are needed for the function being tested. These are referred to as *fixtures*, of which there are three classifications: 

1. Transient Fresh
2. Persistent Fresh
3. Persistent Shared

### Transient Fresh

A transient fresh fixture is one that only exists within the lifetime of one test. It requires no teardown function and is re-initialized for each test. One example of this would be a variable that is declared at the beginning of the test and doesn't exist outside the scope of that test. It is "transient" because it does not survive after the test is executed (as in, it can't be accessed or used by other tests), and it is "fresh" because it is a new initialization every time the test runs. Transient fixtures require no teardown.

### Persistent Fresh

A fixture is considered "persistent" if it lives from test to test and requires teardown to make it "fresh". File input streams and socket are good examples of this. 

### Persistent Shared

A persistent fixture is "shared" when it is not torn down or "freshened up" before each test. Any changes that one test may make to this resource can affect the subsequent tests. This should only be done for resources that are expensive to set up and teardown. Database connections are a good example of this. 

## Act

The "act" phase is when the function being tested is called. For example, in the Coin Changer kata, the `makeChange()` function may be called, and it's return function saved to a hashmap that was set up during the "arrange" phase. The hashmap storing the result of the function makes it easier and cleaner to write the assertions later, as well as making sure the function being tested is only called once in the test. 

Some tests may have multiple actions depending on what's being tested, in which case it may be a good idea to bundle those actions into one function in the test, referred to as a *composed action*. 

## Assert

The "assert" phase of the test is when the resulting value of the function is verified to ensure that it is what it is supposed to be. Assertions in tests are boolean values; they either pass or fail. Each test should only have one logical assertion, meaning that it only checks one concept or feature at a time. 

This does not mean that each test should only have one physical `assert` or `should` statement. One test can have multiple physical assertions if they all check the same logical assertion. For example, in the Coin Changer kata, sixteen cents should return 1 dime, 1 nickel, and 1 penny. The result of the `makeChange()` function was stored in a hashmap during the "act" phase. In the assert phase, there may be three physical assertion statements, one checking each key in the map to verify the amount of each, "pennies," "nickels," and "dimes."

Much like composed actions, if there are many physical assertions in one test, it may make sense to bundle them into a *composed assert*.

## Conclusion

Writing tests is hard. It requires careful detail and thoughtful planning. It is often easy to rely on the tests to help refactor production code to make it clean and readable while verifying that nothing was broken in the process, and in that process there is often less emphasis on writing clean, readable tests. Following the three A's of unit testing can help guide the way tests are organized to ensure they read like well-written specification documentation. 







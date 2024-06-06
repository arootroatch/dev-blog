---
layout: blog
title: The Liskov Substitution Principle
author: Alex Root-Roatch
description: Part three of SOLID Design Principles is surprisingly simple.
date: 2024-06-05T22:40:21-6:00
updated: 2024-06-05T22:40:21-6:00
thumbnail: /img/substitute-teacher.webp
category: Clean Code Practices
---

##  What is the Liskov Substitution Principle?

This principle states that subtypes should be able to be used as their parent types, and as such, subtypes can do more than their parent types, but never less. 

We can apply this to how we structure our classes by making sure that our parent class isn't doing more than any of the sub-classes. For example, let's say we have a class of "Bird" and then each different bird, like "Robin" and "Blue Jay" is a sub-class of "Bird." We would start by putting some methods inside our base class "Bird" that can apply to all birds, like "eat," "sleep," and "breathe." 

But what about "fly?" All birds can fly, right? Actually, there are over 60 species of flightless birds, including penguins, emus, and ostriches. If we put "fly" in our parent class of "Bird," we would end up with sub-classes of birds that do less than their parent class. That's a problem because our parent class set the expectation that all birds can fly, so if a user tries to use the "fly" method with the sub-class "penguin," our code will break and the user's expectations will be violated.  

## Relationship to the Open-Closed Principle

If we structure our code instead where the base class "Bird" only has "eat," "sleep," and "breathe" methods, then "Blue Jay" can add the method "fly" in it's class and inherit the other methods from the parent class "Bird." Now we no longer have a violation of Liskov Substitution. 

This structure is also adherent to the [Open-Closed Principle](https://arootroatch-blog.vercel.app/open-closed-principle). Had we put "fly" in our base class, when it came time to add a penguin, we would have need to go back in to our base class and refactor it to remove the fly method, which would break all of the sub-classes that were inheriting the "fly" method. Then we would need to go to each of those sub-classes and add in the "fly" method. So in order to add one flightless bird to our program, we needed to modify the source code of *all* the pre-existing classes. That's a big Open-Closed violation. 

Due to this relationship between the two principles, all violations of Liskov can be considered latent violations of Open-Closed. 




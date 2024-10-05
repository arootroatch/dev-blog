---
layout: blog
title: Rendering the Right Amount of Story Bars
author: Alex Root-Roatch
description: Making sure the amount of kanban bars is no more or less than what fills the screen
date: 2024-10-04T19:21:08-6:00
updated: 2024-10-04T19:21:08-6:00
thumbnail: /img/code-banner.jpg
category: [ Clojure ]
---

## Wide Open Spaces

One of the stories I worked on this week was regarding Epic and how sometimes there would be empty space on the screen where it should have been rendering more of the kanban-style story bars. 

Epic itself is a screen that is split into two sections, "milestone" and "iteration." The milestone window is where all our stories are grouped by category or milestone, such as "Design" for all the graphic design stories or "Login Page" for all the stories related to the login page. The iteration view is where the stories are prioritized from week to week in order to plan what is going to be accomplished each week.

As Epic projects can get rather large and have hundreds of story bars in both the "milestone" window and the "iteration" window, it's important that the page doesn't try to load hundreds of story bars all at once, as this would result in a major performance hit. Instead, there are two Reagent atoms that keep track of how many story bars can be shown at any given time based on the width of each containing section. When the divider is dragged, resizing both sections, the ratoms are updated with the width of their parent container divided by the width of a story bar, plus two for good measure. Then, when either section is horizontally scrolled, the other story bars are rendered as they come into view. 

This was working great in terms of dragging the divider to resize the sections, but the code wasn't accounting for the fact that each section also had a close button that would collapse either section like a drawer. Moreover, when the page first loads, it auto-collapses the iteration window by default. This means that when the page first loads, there's a moment when each window takes up 50% of the screen width, and the ratoms are set for the corresponding number of story bars. Then the iteration window collapses without updating the ratoms, so the amount of story bars on the screen would only be the amount that would occupy half the screen plus two, leaving empty space on the right side of the screen. 

Each window already had its own boolean to check if it was collapsed, so rectifying this was as easy as using that boolean to see if the ratom needed to be updated. Whatever section was collapsed, that ratom needed to be set to zero while the other ratom needed to be set to the full screen width of the user divided by the width of one story bar plus two. 

This of course means that when a section was collapsed, it would be rendering zero story bars. If the divider was dragged to pull out the drawer, more story bars would be rendered. However, there is also an animation where the user could simply click on the collapsed drawer or "gutter" and it would automatically pull it out to take up 50% of the screen width. Like collapsing the sections, the functionality was also not accounted for, so I simply needed to add the code to the on-click function that updated both ratoms to display half a screen's worth of story bars. 


---
layout: blog
title: CrowdStrike Shows US Why Testing Matters
author: Alex Root-Roatch
description: One of the largest global cyber outages in history could have been easily avoided with proper testing
date: 2024-07-24T18:10:59-6:00
updated: 2024-07-24T18:10:59-6:00
thumbnail: /img/BSOD.jpg
category: Uncategorized
---

## One Bad Driver File

I'm sure everyone already knows all about it by now, but last Friday the world experience an unprecedented global cyber outage caused by the company CrowdStrike's Falcon cybersecurity software. It caused ~8.5 million Windows computers to crash and not be able to reboot. As a result, entire airlines and hospitals were unable to function. This was a taste of what a crash on a cyber-apocalyptic scale would look like. 

This was due to the fact that Falcon operates at a lower level on the system than your typical Norton Antivirus software; it has direct access to the kernel of the operating system. The reason for this, as I understand it, is to prevent company machines from booting if the software detects that the machine is not in a safe environment or condition to boot. 

To achieve this, Falcon installs a driver on the Windows machine. This is the file that caused the outage. Somehow, the update made this driver file have nothing but null bytes in it - `00000000`. So this driver that Windows now depends on to allow it to boot does nothing, and the operating system never gets to complete its boot cycle.

## jUsT dOn'T uPdAtE

To make matters worse, this isn't the kind of update where users get a prompt asking them if they want to update their system. These updates are pushed over-the-air (OTA) by CrowdStrike, forcing machines to update. This is to make sure that all machines are always protected with the most up-to-date version of the software, rather than depending on millions of company employees to keep their machines up to date.

While that sounds good on paper, it means that this one company has unfettered access to silently alter the kernel of 8.5 million computers worldwide. This is a gigantic security vulnerability that CrowdStrike was well aware of. Even worse, since the computers can't boot, CrowdStrike couldn't simply push an OTA update to fix the bug. Users needed to booth their computers into safe mode, locate the driver file, and delete it. It's the IT guy's zombie apocalypse.

## Where Was the Testing? 

It completely blows my mind that this was something that CrowdStrike's development process even allowed to happen. When you know that your software operates at the kernel level and purposefully interferes with booting the system, how could they not test that the machine still boots after updating? Did they even compile it and install it on a test machine before pushing it to millions of computers globally? Did they not have tests to verify the contents of the driver file after the build step? Did they rush the update because they wanted to push it out before the weekend to meet a weekly release deadline? 

In an ever digital world, one negligent company was able to suspend airline travel and medical care for billions of people and cause and estimated $5 billion of damage in the United States alone. Testing is more important than ever. It's important that we don't let the casual pervasiveness of technology in today's society allow us as developers to take for granted just how crucial the systems we develop are. Stories like this give me all the more motivation to cling to TDD as an essential discipline when developing software for production. 

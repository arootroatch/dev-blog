---
layout: blog
title: Toubleshooting Datomic with DynamoDB
author: Alex Root-Roatch
description: Fixing the `read-transactor-location-failed` error
date: 2024-09-24T08:55:49-6:00
updated: 2024-09-24T08:55:49-6:00
thumbnail: /img/code-banner.jpg
category: [Uncategorized]
---

## A Pain in the AWS

Yesterday was yet another continuation of getting the sandbox infrastructure for the Jira integration working. One issue that took some considerable debugging time was Datomic throwing a `read-transactor-location-failed`. I could provision a new EC2 instance and everything would get installed correctly, the correct repo would be cloned from GitHub, and the app would try to start up only to be halted by this error. 

This error meant that there was a problem between Datomic and either the DynamoDB table or the S3 buckets. These are the steps I took to figure it out: 

1. Make sure I had a DynamoDB table whose name matched what the automation code was looking for. 
2. Make sure I had an S3 bucket for logs and that the automation code was looking for the proper name of the S3 bucket.
3. Make sure that the region and IP address of the EC2 instance were being set in `transactor.properties` properly on the server. 
4. Make that the name of the S3 bucket was being set in `transactor.properties` properly on the server. 
5. Make sure that the AWS IAM role had proper permissions policies to access the DynamoDB table and that everything was properly named in the permissions policy JSON. 
6. Make sure that the AWS IAM role had proper permissions policies to access the S3 Bucket and that everything was properly named in the permissions policy JSON. 

In my case, the issue was all related to the S3 bucket. At first, I didn't have an S3 bucket instance, so I had to create that and then give the IAM role the proper permissions. Then I needed to edit the Datomic recipe in the automation code to make sure the name of the S3 bucket was being properly set in the `transactor.properties` file that was written to the server's Datomic installation.

After figuring that out, I ran into one more snag regarding ClojureScript no knowing how to compile when the environment was set to "sandbox." A quick addition to the `config/cljs.edn` in the project's repo to include `:sandbox` as an option for compiling ClojureScript fixed that, and just like that, I had a sandboxed version of the Clean Coders website up and running! 

Of course, the database hadn't been seeded with any data, so there were no user accounts that could log in and no videos in the video store. The next step will be adding some data to the database and working on getting Epic and Aesop deployed to sandboxes as well. 


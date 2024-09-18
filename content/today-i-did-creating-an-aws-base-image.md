---
layout: blog
title: "Today I Did: Creating an AWS Base Image"
author: Alex Root-Roatch
description: Setting the base configuration of an EC2 instance to create other server instances with
date: 2024-09-17T19:56:03-6:00
updated: 2024-09-17T19:56:03-6:00
thumbnail: /img/aws-banner.png
category: [Uncategorized]
---

## Sandboxing

Currently internal development is being tasked with creating an integration between our internal project management software, Epic, and the Jira instances of some of Clean Coders' clients. Since Epic, Jira, and the integration software are all web hosted and rely on internet communication between the services, it's important to have versions of each application deployed that we can use to develop and test the integration without affecting the actual Epic and Jira services that are in production. 

This idea of creating an isolated environment for development and testing is called *sandboxing*. To make it easy to spin up instances of servers for sandboxing, I created a base image of an AWS EC2 instance that can be used as the foundation for other EC2 instances. This is referred to as an Amazon Machine Image or AMI, and it makes it easy to copy and clone and entire system to another machine so that you don't have to go through all the setup steps every time a new server instance is created. 

## Creating an EC2 Instance

To start, I clicked "Launch an EC2 Instance" from the AWS EC2 Dashboard. From there I created a new SSH key pair that was downloaded as a `.pem` file to a repo on my local machine. Then I needed to go to "Security Groups" and add a security group to AWS to allow me to connect via SSH on port 22. 

Then I SSH'd into the server using the key pair in the `.pem` file and added a new user with `sudo` privileges. Then I logged out and signed back in as the new user and deleted the default "ubuntu" user. From there I used `apt-get` to install some needed tools like git and net-tools. Then I generated a new SSH key on the server to connect to the GitHub account. 

## Changing the SSH Port

To help protect against hacking attempts, I changed the SSH port to a port other than the default port 22. This actually ended up requiring a reboot of the server in addition to updating the security group in AWS to use the new port. 

## Creating the Amazon Machine Image

Now with the server instance configured, it was time to create an image from this server. In the AWS EC2 Dashboard, I went to Instances and right-clicked on the EC2 instance. I then went to `Image and templates > Create image`. And just like that, there's an image we can use to clone this configuration!

The rest of the day I spent updating the repo we use to automate managing and creating EC2 instances to be able to work for the sandbox AWS account in addition to our normal production account, including adding the ID of the AMI. 


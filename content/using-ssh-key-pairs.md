---
layout: blog
title: Using SSH Key Pairs
author: Alex Root-Roatch
description: Accessing servers securely without username and password
date: 2024-09-20T08:49:45-6:00
updated: 2024-09-20T08:49:45-6:00
thumbnail: /img/code-banner.jpg
category: [Uncategorized]
---

## Introduction to Secure Shell

Secure Shell, or SSH, is a protocol for connecting to another computer via their IPv4 address and controlling it through the terminal. This is most often used for connecting to servers, as most remote server instances (like an AWS EC2 instance or a DigitalOcean droplet) don't have remote desktop software installed, which is required for controlling the machine through the GUI. Depending on the operating system the server is running, there may not be a GUI to use even if a remote desktop software were installed. These smaller, lighter, terminal-only operating systems are often chosen to make sure the server's resources are being used for only necessary tasks and not being eaten up by rendering GUIs that are only used occasionally and are not imperative to the operation of the server. 

The simplest way to SSH into a computer is to simply type the username of the account you wish to log in with and the IP address of the box, like so:

```bash
ssh <username>@<ip_address>
```

You will then be prompted to enter the password for that username, just like logging into a regular computer. However, setting up a server in this way means that anyone that has this password could access the server. A more secure way to access the server is to use *SSH key pairs*. 

## SSH Key Pairs

An SSH key pair is specific to the machine being used to access the server. It uses a method of cryptography called public key authentication, which consists of a private key (which is like a very strong, very complicated password) and a public key that references the private key. Both public and private keys reside on the user's local machine in the `~/<user>/.ssh` folder. The public key is then saved on the server in the `~/<user>/.ssh/authorized_keys` file. When the user tries to connect to the server, the public keys will be referenced against each other, and if the machine connecting to the server has the corresponding private key, the connection will be authenticated. 

Using key pairs enables us to disable password login entirely, locking down the server more tightly. Any other users that wish to connect to the server will need to generate their own SSH key pair and have their public key add to the `authorized_keys` file on the server, and will only be able to access the server from the computer that has the private key on it. 

## Generating SSH Keys

On Mac and Linux, creating a new SSH key is easy using the `ssh-keygen` terminal command. 

```bash
ssh-keygen -t ed25519 -C username@email.com
```

The `-t` option allows us to specify what encryption format we want to use for our keys. The default is RSA, but this example uses a stronger encryption, ED25519. The `-C` option allows us to specify an email address for the public key. This is more for the humans than the computers; it makes it easy for us to see who the key belongs to or differentiate between keys.

After hitting `enter`, you will be asked for a passphrase to add another layer of protection to the private key. This can be good for security, but can get in the way of creating automated scripts to perform complex actions on the server. If the key will be used to run automated scripts, I would recommend not putting a passphrase on the private key. Simply hit `enter` to leave it blank. 

Then, two files will be created in the `~/<user>/.ssh` folder: `id_ed25519.pub` and `id_ed25519`. If using RSA, it will be `id_rsa.pub` and `id_rsa` instead. The `.pub` file is the public key that gets added to the server. The file without an extension is the private key. 

## Conclusion

SSH key pairs provide tighter security for SSH'ing into servers than using a password, as it allows us to completely disable password login on the server and make it so only users who have had their public key manually added to the server can connect to it. Not only does this lock down access to the server per user, but also per machine. This also provides convenience for users, as they will be automatically authenticated when connecting to the server. This also allows for unattended access for running automated scripts to carry out complex task on the server.  


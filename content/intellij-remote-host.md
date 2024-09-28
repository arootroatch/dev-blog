---
layout: blog
title: IntelliJ Remote Host
author: Alex Root-Roatch
description: Speed up development by editing files directly on the server
date: 2024-09-27T19:07:45-6:00
updated: 2024-09-27T19:07:45-6:00
thumbnail: /img/intellij-logo.png
category: [Workflows]
---

## Epic-Jira Integration

Earlier this week, I worked getting the story descriptions linked between Epic and Jira. One of the biggest challenges was being able to figure out how the data was coming in from Jira and Aesop in order to know how to process it. Since Jira is a web application, Aesop (the integration software sitting between Epic and Jira) needs to be hosted on a running web server. This means that if I want to do something as simple as dropping in a print statement to see what the incoming data is, I would have to commit and push those changes and then `git pull` on the server. This workflow is obviously much slower that the normal localhost development environment. However, in IntelliJ it's possible to connect to a remote server and view and edit the files of that server without needing to push to version control or leave the IDE. 

## Configure the Remote Server Connection

Before setting up the connection, the FTP/SFTP/WebDAV Connectivity plugin needs to be enabled. This is *not* available on the free IntelliJ Community Edition, but comes pre-installed with the paid version. 

#### Specify the Connection Protocol

1. Press `Cmd + ,` to go open the settings and go to **Build, Execution, Deployment | Deployment**.
2. At the top of the left pane, click the `+` button to add a configuration. 
   - Choose between FTP, SFTP, FTPS, or WebDAV. I used SFTP because I was connecting to the server via SSH.
3. Type whatever you would like to name the server connection and click OK. 
4. Click the checkmark icon next to the `+` button to mark the selected server as default. 
5. Check **Visible only for this project** if you only plan to use this server configuration for that specific repo. 

#### Create an SSH Configuration

Since I connected via SFTP, I need to provide an SSH configuration.

1. Click on `...` next to the  **SSH Configuration** dropdown to open a dialog box for creating a new SSH configuration. 
2. Specify the IP of the server in the **Host** field and specify the port number to use (if not using the default port 22)
3. Specify which username to use when connecting to the server
4. Select what kind of SSH authentication to use. For me this was **OpenSSH or PuTTY**
5. Select the appropriate private key file from your `.ssh` folder. This is the file *without* the `.pub` extension, like `id_ed25519` or `id_rsa`.
6. Check **Visible only for this project** if you only plan to use this SSH Configuration for this repo.
7. Click **Apply** and then **Test Connection**. I had to test the connection twice; it didn't work the first time.  

#### Specify Paths

1. Back in the previous screen, in **Root path**, specify the directory path to be used as the root for browsing the server file system. For example, `/home/<username>/` or `/`.
2. Specify the Web URL of the server, such as `my-cool-app.com`
3. Navigate to the **Mappings** tab and create a mapping between your local repo and the server repo. 
   - **Local Path** is the absolute path on your local machine, like `/Users/<username>/current-projects/my-cool-app`
   - **Deployment Path** is the path to the repo on the server relative to the root path specified in step 1, such as `/my-cool-app` or `/home/<username>/my-cool-app`
   - **Web Path** is the specified route to the folder in **Deployment Path**. In my case, this was simply `/`. 
4. Click OK. 

## Browse and Edit Files on the Server

Now that the connection is configured, go to **Tools | Deployment | Browse Remote Host**. A sidebar will open on the right side of the IDE with a file explorer and a server icon will be added to the right side toolbar in the IDE to toggle this window open and closed. 

When files from the server are edited, a toolbar at the top of the file will appear asking if you would like to upload the changes to the server. This toolbar also provides options enter diff view, revert changes, or refresh the file. Simply hitting the upload button in this toolbar changes the code on the server. 

## Open a Terminal Session on the Server

This connection also allows us to easily open a terminal SSH session to the server. In the terminal window, select the dropdown arrow that is next to the `+` for creating a new terminal tab. There should be an option for the server connection the looks like `<username>@<ipaddress>`. 

If the project running on the server has been made a system service, after changing the code on the server simply run `sudo systemctl restart my-cool-app>`, and your changes will be live. 

To view the server logs like you would have when running locally, make sure you're in the project directory and type `tail -f log.txt`. 

## Conclusion 

Being able to view and edit files on a server directly from the IDE was a huge productivity boost. This allowed me to quickly be able to try things out by changing the code and then being able to go eo Epic or Jira almost immediately afterward to see the result of my code. 

One thing to be careful of is to always double-check that you're editing the correct file, as it's easy to not realize when you're editing the local file when you meant to be editing the server and vice versa. 

Changes to the server files are *not* included in your git history, so anything you did in the server that you want to become part of the project permanently needs to be added to the local file (with a test for it written first, of course), commited, and pushed. 

For more detailed reading on connecting to servers in IntelliJ, see [this article from their docs](https://www.jetbrains.com/help/idea/creating-a-remote-server-configuration.html#mapping).

For more detailed reading on editing remote files in IntelliJ, see [this article from their docs](https://www.jetbrains.com/help/idea/editing-individual-files-on-remote-hosts.html).
 



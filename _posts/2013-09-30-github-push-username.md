---
layout: blog
date: 2013-09-30-10:14:24
tags: git time
title: "Github Push Username"
---
I find, when working in a git repo that I have cloned from the server, that 
whenever I push a commit, I have to type in my username and password. I always 
use `https` instead of ssh just cause its easier to setup and I have no problem 
giving my password to submit commits. 

However, I don't want to have to type in my username and password every time.

Usually, there is a `remote` section of the config file (`Repo/.git/config`), 
which might look like:

	[remote "origin"]
		url = https://github.com/username/repo-name

In order to stop git asking for the username as well as the password, just 
prefix the `url` section with your username so that it looks like:

	[remote "origin"]
		url = https://username@github.com/username/repo-name

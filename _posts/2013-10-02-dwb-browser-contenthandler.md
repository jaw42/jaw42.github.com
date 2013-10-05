---
layout: blog
date: 2013-10-02-10:21:31
tags: dwb mimetype downloads
title: "dwb Browser ContentHandler"
---
The excellent [dwb browser](http://portix.bitbucket.org/), like many linux 
programs, is fantastically and almost endlessly extensible because of its 
ability to integrate with other programs through the universal language of 
[plain text](http://wiki.43folders.com/index.php/Plain_text).

I found that, fairly often, while browsing, I would come across a file, often 
pdf, click to save it, choose the `/tmp` so that it would not be left hanging 
around, save and then open it. "But of course", I thought, "there is bound to be 
a quicker way to do this."

And lo and behold, a very short time later I discovered that I was correct, but 
more importantly, that there are even more reasons to love linux and the type of 
programs it nurtures.

When asked for the download location, press `ctrl-x` and the location selection 
changes to a dialogue similar to:

	Spawn(application/pdf):

From here, give the program you want to use to open the file and hit enter.  
That program should open with the file.

The file itself is downloaded and stored in dwb's cache (by default 
`~/.cache/dwb`) and is automatically removed when the browser is closed. When 
you come across another file to open, if you have specified a program before for 
that mime type, it will default to that, and if its a new mimetype, then it will 
ask for you to specify one. I have almost all the mimetypes that I ever open 
assigned to my own universal `open` 
[command](http://joshaw.github.io/unix/scripts/open.html)

If you want to change any of the programs set, or see what they are defined as, 
dwb reads the file `~/.config/dwb/mimetypes` for a list of filetypes and their 
associated program.

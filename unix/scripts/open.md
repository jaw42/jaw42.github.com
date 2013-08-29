---
layout: scripts
unix: true
categories: [scripts]
title: Open
---
#Open

While introducing a friend to GNU/Linux, he got frustrated trying to remember
what program opens what type of file and asked "Why can't I just type `open`?
Thats all I want to do."


This isn't the reason I made this scripts, but it serves that purpose to. This
is a *universal open* script. Basically, for the majority of standard filetypes,
just type `open fileName` and it will use the configured program to open that
file.


The main use I have for this is for further scripting or for filemanagers and
the like. I do a lot of flitting between software, when I find something
interesting I install it, play around for a week or so, then decide if I like it
or not. This file means that I can easily configure all those programs quickly.
If it might want to open a file with a different program, just `open` and it'll
happen.

This also means, for the more stable programs that I am accustomed to, that if a
different program changes, I don't have to go finding the right setting to
change it, I just edit the script slightly.

For example, in a file manager, I want to open a pdf file, instead of having to
remember that I'm using `xpdf` or `Zathura` or `Evince`, I just remember `open`.

This also means that when I inevitably change my pdf reader, I don't have to
change it everywhere I might want to open one, file manager1, filemanager2,
email handler, etc.

The script makes use of a feature of bash called *indrirection*.  This basically
means that the contents of a variable can be used as the name of another
variable.

	$ var=foo $ foo=bar $ echo ${!var} bar

This makes this script very extensible with no changes. The basic usage involves
adding the filetype extensions you want to manage, along with the associated
programs, at the top of the script and you're away.

When run, the script checks the extension of the file against the set extensions
in the arrays set by the user. When it finds the right extension, it uses the
array it found it in to define which program should be used to open/run that
file. If the file has no extention, or the extension cannot be found or is not
defined, the script will instead look at the
[mime-type](https://en.wikipedia.org/wiki/Internet_media_type) and use that
instead.

<a href="https://github.com/jaw42/bin/blob/master/open">
<i class="icon-cloud-download"> </i> Download</a>

---
layout: blog
date: 2013-10-16-21:03:01
tags: zsh prezto 
title: "Zsh Rearrangements"
---
For a number of years (! can it be *that* long?!) I have been using a framework 
for zsh called [Prezto](https://github.com/sorin-ionescu/prezto). This is a 
	great alternative to the much more diverse and now crazily huge 
	[Oh-My-zsh](https://github.com/robbyrussell/oh-my-zsh). Whereas Oh-my-zsh 
	contains settings and addons and configuration for every possible setup in 
	any concevable situation, Prezto is slightly less ambitious, though in a 
	more sucsinct and clean way.

This worked well for me for some time. I loved some of the advanced features, 
like history-substring-search (do look it up if you're not familiar) and great 
syntax highlighting, but found the configuration a bit tiresome.

In order to be more organised, the framework is split into modules which keeps 
code that is intended for different uses separated. This mean, however, that 
when you want to edit some part of your configuration, add an alias say, that 
either you have to add them to the central `.zshrc`, and risk the carefully 
crafted folders to become messy and hard to maintain, or go digging through the 
module files to find the right place.

To simplify things a bit, I decided to rip apart the folder with all the 
modules in, throw away everything I wasn't using and make a much more compact 
and easier to maintain `.zsh` folder in my home directory with a couple of 
files for easy configuration.

I've kept some of the components:
- completion,
- git aliases and shortcuts,
- history handling,
- and syntax highlighting.

But have got rid of many other things. Now I have a much easier to update, 
small and more compact zsh config framework that I can take with me to any new 
environment.

Find it in my dotfiles [here](https://github.com/joshaw/zsh).

Note: Another good zsh framework, though one that I have not tried out myself, 
is [zshuery](https://github.com/myfreeweb/zshuery).

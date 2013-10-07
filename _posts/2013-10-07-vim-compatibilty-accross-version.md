---
layout: blog
date: 2013-10-07-18:42:32
tags: vim features version dotfiles
title: "Vim Compatibilty Accross Versions"
---
When running vim on my computer, I like to use all of the availible options, 
obviously, cause they are added because they have the possibility of making the 
editor even better.

But when I don't have control over the version of the editor that I use, for 
example at university where they are still stuck on version 7.0, then I want a 
way for the non-compatable settings in my vimrc to be ignored.I keep my 
dotfiles in a repo on github, so I don't want to have to have a different setup 
just cause its a different computer, so instead I want the ones that don't 
apply there to be ignore silently.

To do this, for settings in the `vimrc`, you can wrap a setting in
	
	if exists("&setting")
		set setting
	endif

So, for example, vim 7.0 doesn't have relative line numbering, so I have a few 
lines that say

	if exists("&relativenumber")
		set relativenumber
	endif

Remember, you need the ampersand, `&`, at the start for it to be recognised.  
This can be generalised to any feature in vim. So if you wanted to turn on 
spell checking, but not if the version you are using was compiled with spell 
checking enabled, then you'd do exactly the save, but without the ampersand:

	if exists("spell")
		set spell
	endif

Easy.

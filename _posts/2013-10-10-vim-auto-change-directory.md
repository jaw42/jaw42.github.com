---
layout: blog
date: 2013-10-10-15:02:11
tags: 
title: "Vim Auto Change Directory"
---
So, continuing my recent trend in posts about the various and diverse settings 
availible in Vim, here is a small one I came across recently.

	set autochdir

That says basically, when you bring a file into focus, change the working 
directory that vim is in to the directory that holds that file. 

Bring it into focus could be opening a file, switching buffers, switching 
windows, etc. But whenever a file is read to be edited, and it has a folder 
(obviously not for help files, quicklist, location list etc) then the result of 
`:pwd` will be the folder that holds that file.

There are a number of reasons why this feature might be useful.
1. Compiling files with `:make` - if you're working on a file that needs 
compiling, rather than having to use the full path of that file, this allows 
you to compile from within that folder, also, any auxillary files that are 
generate will be in the same folder as the original files, since that is where 
it was built.
1. Editing a project with multiple files. This is I think that most likely use 
case of this. Say you;re editing a website with html's, CSS's etc, then with 
this set, you can easily do a quick `:e otherfile.html` and instantly get it, 
without navigating down the directory tree.

Obviously, if you start vim from a terminal , it will start in the folder that 
you ran it from. This setting allows you to start it from any folder and move 
between projects or set of files.

###Variations

There are a couple of variations to this that can make it a bit more flexible, 
making use of the `autocommand` function to perform a command whenever a 
certain event happens.

	autocmd BufEnter * silent! lcd %:p:h

That will do exactly the same as the `set autochdir`, but using a function 
called `lcd`. This is a "local" variation of the usual `cd` so will not affect 
any windows other than the current one, so you can have multiple windows open 
and navigate between different projects in both.

	autocmd BufEnter * if expand("%:p:h") !~ '^/tmp' | silent! lcd %:p:h | endif

This is a slight extension on the above, this time allowing you to specify a 
folder that does not get included in the rule. So this time, when you edit a 
file in the `/tmp` folder, it will not affect the present working directory.

Via <http://vim.wikia.com/wiki/Set_working_directory_to_the_current_file>.

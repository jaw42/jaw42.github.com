---
layout: blog
date: 2013-08-26 17:16:32
tags: vim jekyll
title: "Vim Goto File"
---
Learning vim is a pleasure.

My reasons? It is so well designed, from a user stand point, with so many
usefully powerful features built in, that you can discover a great feature that
loads of people have taken for granted and you've never heard of and think its
fantastic.

So, today I discovered `goto file`. Abbreviated to `gf` in either normal or
visual mode, this allows you to place the cursor on a file name and open that
file for editing immediately.

Obviously, a caveate is that vim must know where to find this file, and so it
will look at the `path` setting and use that to search for the file name given.
(If you're in visual mode, then the file name is the selection, otherwise it
uses some clever regex's to work out where the filename starts and finishes, see
the `isfname` setting.)

The default setting for `path`, as can be seen by typing `:set path` is

	path=.,/usr/include/,,

That means it will first search the location of the current file, `.`, then
search the folder `/usr/include`, and finally the present working directory,
`pwd`. This will cover most situations, since in order to include an external
file, the program will need to know where it is. Thus, if the file has an
absolute location, starting with `/`, then vim will follow that and find the
file, or if a relative path, then that is generally relative to the current
file, and so vim will be able to find that too.

There are, however, the odd edge case where vim might not find the file. These
generally are specific to a particular language. So for example, while working
with some html and markup files, I found that vim didn't find an included file.
I was using the [Jekyll]() blog aware system which has a separate folder for
included files, so the structure looks like this:

    `-- Website
        |-- _includes
        |   `-- header.html
        |-- _posts
        |   `-- 2013-08-23-vim-goto-file.md
        `index.md

Now, if I'm editing the post file, `2013-08-23-vim-goto-file.md`, then there is
nothing else in that folder, so the included file cannot be there. Instead, it's
in a folder that is below the parent folder, `_includes`.

To make this folder availible to vim to seach, I've added this line to my
`.vimrc`:

	path+=../**

That means, append to the end of the existing `path` variable, the value of the
parent directory and any children. This means that anything below the parent of
the current file will be availible.

If this confuses vim, or means that conflicts happen and it starts opening the
wrong files, this line could be added to the syntax file, or else specified that
it only applies to certain syntax, so that the normal behavior remain for most
filetypes, but when you open a `.html`, or `.md`, vim will search in this extra
location.

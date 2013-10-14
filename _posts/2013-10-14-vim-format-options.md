---
layout: blog
date: 2013-10-14-16:34:40
tags: 
title: "Vim Format Options"
---
Another of vim's options that seems to solve many problems I didn't quite know 
existed until I came across it and found that many of the regular habits in 
editing code and prose could be solved using it, is format options.

These are a variety of letters that are added to the `formatoptions` or `fo` 
setting to tell vim how to manage some aspects of text formatting. As always, 
there's an superb explanation of the options in the vim help, see `:help 
formatoptions` and `:help fo-table`, here, I'll just record the particular 
setup I use.

###Code

In my `.vimrc`, I have the defaults set as

	set formatoptions=tcroql

In order, they are

- `t` - standard wrapping of text using the `textwidth` option to determine the 
  width at which to wrap.
- `c` - when wrapping a comment, so a long comment that goes over a single 
  line, add the relevant comment leader on the new line so that the comment 
  will continue.
- `r` and `o` - similar to `c`, add the relevant comment leader when a new line 
  is started manually this time, either with `<enter>` or when starting a new 
  line from insert mode with `o`.
- `q` - allow formatting of the text with the `gq` command.
- `l` - do not format lines that are already longer than the specified 
  textwidth.  So if you purposefully set a long line, it won't be reformatted 
  if it is edited.

###Prose

Thats the standard that I have set for normal editing. Sometimes, however, I 
want a bit more functionality. So in a filetype specific file, one for markdown 
and one for emails, I have the following:

	set formatoptions=tcqwa

There, the `tcq` are the same as in the previous section, the others are 
particularly useful when the text is continuous flowing prose, such as this 
blog post, or an email.

- `w` - using the format=flowed standard (see 
  [here](http://joeclark.org/ffaq.html)), a white space at the end of a line 
  indicates that the line should continue on the next line, so a line break is 
  inserted but is effectively "optional".
- `a` - again, in accordance with f=f, when a paragraph is formatted as above, 
  and it is then edited, it shall be reformatted to maintain accordance with 
  the textwidth setting.

Using these settings, I can effectively edit code faster as well as being able 
to write longer prose pieces in my favourite editor of all, even better.

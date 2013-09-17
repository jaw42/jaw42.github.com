---
layout: blog
date: 2013-09-17-10:55:21
tags:
title: "Custom Ultisnips in Vim"
---
I moved away from [Snipmate](https://github.com/garbas/vim-snipmate) to
[Ultisnips](https://github.com/SirVer/ultisnips) a while ago, and haven't looked
back.

Snippet management is a feature that has become more popular, it seems to me, in
recent years, and has been added to more and more text editors. It allows
certain commonly typed phrases or blocks of text or writing to be added using a
short trigger that is easy to remember and quicker to type.

For example, when working in C++, you might want to insert an `if..else` loop.
It is not a laborious effort to type

	if(i < 10){
		/*do some code*/
	else
		/*do something else*/
	}

But the beauty of snippets is that I could now type

	if<tab>

and end up with exactly the same output. This is maybe a fairly trite example,
since it only saves me typing the `else`, `{` and `}`, but since they can be
extended to much larger examples, it can quickly become a big time saver. Even
just something as simple as this example, when repeated over the duration of a
large project, could result in large time savings.

The reason I moved from Snipmate to Ultisnips was mainly one of curiosity. I
wanted to see what this new kid on the block was like. And Ultisnips does have
some advantages. These include, nested snippets, python parsing of snippet
contents and a much more sturdy backend to handle more complex snippets.

The snippets are stored in simple text files which are named according to the
language to which they refer. This means that only relevant snippets are
presented to you when you are editing, and means that something common, such as
the if loop above, can have different implementations for different languages.

##Customising Ultisnips

The set of default snippets provided with the plugin is almost exhaustive. I
certainly don't use all of the snippets for just the languages I'm familiar
with, and then there are plenty of other languages supported that I never
encounter at all.

But sooner or later, you will probably find yourself thinking "This snippet
business is great, it could even help me with X", where X is a situation that
hasn't been encountered often enough by contributers to be included by default.
In this case, you could submit your excellent new, hand crafted snippet for
inclusion into the plugin, or, if it a niche use case, you can just add it for
personal use.

This is where I ran into a problem with using Ultisnips. The documentation says
that you can define a folder name that will also be searched when looking for
snippets.

I created this folder in `~/.vim/custom/mysnippets/`. In there, I have a
`cpp.snippet`, a `tex.snippet` and a couple of others. But just doing that won't
load your snippets when editing files.

Add the following to your `.vimrc`:

	"""" UltiSnips Plugin
	set runtimepath^=~/.vim/custom
	let g:UltiSnipsSnippetsDir = "~/.vim/custom/mysnippets"
	let g:UltiSnipsSnippetDirectories=["UltiSnips","mysnippets"]

Those options will

- add the `custom` to the runtime path so that it will get checked by UltiSnips
  (this was the key that I left out)
- define the folder for containing new snippet files when editing with the
  `UltisnipsEdit` command, and
- instruct the plugin to search the default folder, `"Ultisnips"` as well as our
  new custom folder, `"mysnippets"`.

With that all done, you don't even need to reload vim or the plugin, the new
snippets will be found automatically.

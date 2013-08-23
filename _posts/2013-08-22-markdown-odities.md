---
layout: blog
date: 2013-08-22 23:54:37
tags: markdown jekyll
title: "Markdown Odities"
---
I've recetly been finding some strange behaviour in the way markdown in
interpreted by Jekyll. It seems to be localised to lists, specifically nested
lists one within the other. This was happening while I was working on a couple
of pages of the main part of this website, I'll see if its reproduced here.

This shall be a list:

- Item number one
- Item number two
	- item number two part b
	- item number two part c
- item number three

The code used above is as simple as it could be:

	- Item number one
	- Item number two
		- item number two part b
		- item number two part c
	- item number three

Whats happening is that the list item, `<li>` is being placed with a paragraph,
`<p>` within it, with the text inside that, instead of just the text inside the
list item. This occurs when using tabs to indent the lines.

If instead, 4 spaces are used to indent, the result is even worse:

- Item number one
- Item number two
    - item number two part b
    - item number two part c
- item number three

Again, the code is super simple, identical to before but with tabs converted to
spaces (`:%s/\t/    /g` in vim).

    - Item number one
    - Item number two
        - item number two part b
        - item number two part c
    - item number three

I shall investigate why this is happening and update this post accordingly.

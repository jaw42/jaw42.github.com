---
layout: blog
date: 2013-10-04-10:45:25
tags: jekyll update
title: "Jekyll Update Sort by Name"
---
Really super quick. 

I think [Jekyll](http://jekyllrb.com/) which is used rather alot to host, among 
others, this blog, has been updated. I had some `liquid` tags that looked 
similar to

	{% raw %}
	{% assign sorted_pages = site.pages | sort "name" %}
	{% endraw %}

which unexpectedly stopped working. My fix was to just change the sort parameter 
from `name` to `path`. They now work again.

	{% raw %}
	{% assign sorted_pages = site.pages | sort "path" %}
	{% endraw %}

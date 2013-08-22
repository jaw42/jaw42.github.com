---
layout: blog_main
catagories: [index]
title: Blog
---
<div class="blog_titles">

{% for post in site.posts limit: 100000 %}

<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<h3>{{post.date | date_to_long_string }}</h3>

{% endfor %}

</div>

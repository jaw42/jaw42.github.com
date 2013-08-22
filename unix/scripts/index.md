---
layout: unix
unix: true
catagories: [unix]
title: Scripts
---
#Shell Scripts

These are a few of the scripts that I have written or modified and
use regularly. They are all hosted on github. Feel free to
use/modify/share any of them, and if you have any suggestions or
criticisms, please report them on github and I'll do my best to improve
and/or fix them.

Click the script at below for more info and a link to download it

{% for page in site.pages %}
{% if page.unix == true %}
{% for pc in page.catagories %}
{% if pc == "scripts" %}
- [{{ page.title }}]({{ page.url }})
{% endif %}   <!-- cat-match-p -->
{% endfor %}  <!-- page-category -->
{% endif %}   <!-- resource-p -->
{% endfor %} <!-- page -->

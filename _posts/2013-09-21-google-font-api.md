---
layout: blog
date: 2013-09-21-10:22:28
tags: web HTML Google fonts
title: "Google Font API"
---
I host my website on Github. This makes it fantastically easy to make changes,
just a `git push` away, its completely free and it encourages the use of simple,
fast websites, since there is n server side execution of code.

I also make use of the Google font API for making use of fonts that will appear
the same across all viewing media. I have extremely few fonts intalled on my
computer, they take up space and I basically never need them. So this method
means I can make my webiste typographically pleasing and consistent looking,
without having to have the fonts installed locally.

I recently ran into a problem with this setup, however. I host a resume or CV on
my website and then print this to PDF when I need a physical or static copy. The
file produced with this method did not match the page I viewed in the browser,
specifically, the headings where sometimes correctly bold, sometimes not, and
sometimes the bold-ness would "leak" so that parts of the text were also bold.
What was curious was that fact that this was different across browsers.

The fact that this differed from Chrome to Midori to Firefox suggested that I
was doing something wrong. Clearly, what I was asking the rederer to do was not
being interpretted the same in different engines.

The clue that led me to the answer was Midori. Instead of printing the headers
in bold as they should have been, or in regular weight, as was the body of the
text, they were coming out as doubled, the same text overlayed but ofset
horizontally by a couple of pixels.

I didn't cotton on for sometime, but I eventually realized that this was the
browser's attempt at mimicing bold font. When there is no bold font supplied,
but when the weight of the text requires it, the browser has a choice:

1. Ignore the bold request and present what is availible - regular weight, or
2. Attempt to meet the request by synthesing a bold typeface from regular.

This second was being chosen by Midori, but since the result was slightly less
well implemented, I was able to see what was going on. Having understood the
problem, I could go back and look at the output from Chrome and Firefox. Now
understanding what to look for, it is easy to see that these, too, where just
overlaying the regular weight text on itself to mimic bold.

![Midori's attempt at bold font synthesis](/files/blog/boldFont.svgz)

This was the simplest fix in the world to manage. I had imported the font from
Google with an `@import` in the CSS for the page. I had, however, neglected to
import the bold version of the font (!!duh).

	@import url(http://fonts.googleapis.com/css?family=Merriweather:300);

became

	@import url(http://fonts.googleapis.com/css?family=Merriweather:300,700);

What a wally, but interesting to see the different attempts at fixing my problem
made by different browsers.

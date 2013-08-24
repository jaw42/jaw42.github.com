---
layout: blog
date: 2013-02-06 12:12:45
tags:
title: "DCT and my holiday snaps"
---
One of the modules that I'm doing this term at uni is called Digital Image
Processing. To this end, I've become rather interested in some of the methods
used to compress and manipulate digital images.

As the title doesn't in any way suggest, this post is about the former.

The discrete cousins transform its the basis of the algorithm used in jpeg
compression. It involves some pretty neat ways of getting rid if bits of the
image that aren't as important as others so that the image gets smaller and so
is easier to store. The way this is done varies between compression standards,
so jpeg is didn't to png is different to BMP, but jpeg is one of the most
successful and also relatively easy to understand.

The discrete coding transform (DCT) involves some clever maths to separate an
array of pixels with brightness values into an array of coefficients of
different frequencies. That sounds a bit crazy, but you can represent any series
of numbers with a bunch of waves superimposed at different frequencies. It
follows then that you are able to break down a series of numbers, which is all
pixel values are, into a bunch of cosine waves with coefficients to tell you how
many of each frequency is needed.

The compression comes now. The human eyes and brain are truly amazing, but they
do have some limitations. For example, there are loads of different optical
illusions that trick the obtain into thinking that something is happening in
an image, or that the image looks one way when in fact it isn't at all. One
area that our eyes aren't great at is when things change very rapidly, is
very close together, in an image. So if you have a picture with lots of
detail, lots of quickly changing values form bright to dark, then the brain
will interpret that as a more simple image to more easily view it.

We can takes advantage of this when dealing with images. Since we know that any
complex region of an image wont be viewed in its entirety, ands that we have
just developed a way of separating out the image into  simple and complex
components, that we can just leave out the complex parts and the brain is
unlikely to notice the difference. And this is what is done in jpeg compression.
Leave out the high frequencies because these represent the areas that are
complex and changing quickly which we are unlikely to notice anyway.

This can have fairly serious effects join the file size, reducing it by half or
more depending join how much information you choose to sacrifice. I've written a
short paper going into slightly more detail if you want to know more you can
find it here.

This compression technique is an example of lossy compressions since information
is sacrificed in order to make the file size smaller. There are many lossless
compression techniques that I use clever ways of representing all the
information in a smaller way. I might have a look at some of those in the
future.

For now, just remember how much maths goes into that pic of you at the beach.

---
layout: blog
date: 2013-08-22 14:19:29
tags: easyworship linuxAlternative worship
title: "EasyWorship Alternatives for Linux"
---

To those who have worked behind the scenes in a huge majority of churches,
especially in the UK, but probably in other countries too, [EasyWorship][] is
the de facto standard when it comes to song lyric and presentation projection
software. Its a handy bit of kit too.

The software bundle allows you to:

- build up a local database of hymns and songs with their accompanying lyrics,
  so that you can search and project extremely fast,

- use a dual display with the projector acting as one and the computer the
  other, so that slides can be controlled and previous and next are visible,

- allow you to import PowerPoint presentations and images so that a whole church
  service can be contained to a single set of slides rather than having to
  juggle different programs,

- create a set of slides, images, songs, etc. for displaying again, or at a
  later date that contains all of the relevant info and which can be saved
  locally.

![The EasyWorship suite is a full featured lyric projection solution][EasyWorshipPic]

This is just a small example, but even still, quite an extensive feature list.
But this functionality does come at a cost, $399, with an added $99 upgrade cost
later on.

So when returning from a week's holiday where we did not have access to
EasyWorship on any of the laptops that had been taken, and so had been forced to
make do with typing lyrics into slides in PowerPoint and projecting from there,
I got to wondering if the Linux community&trade; had anything to offer. I found
that there are a number of open-source alternatives.

##OpenLP

![OpenLP - open source alternative to EasyWorship][OpenLPPic]

The first alternative I tried was [OpenLP][]. This puts itself forward as a

>presentation software designed to fit how you want to run your service. Fast,
>flexible and easy to use, you will have your service up and running in a few
>minutes.

While this may be true, I was unable to install it and try it out since the
dependency list was so enormous, many coming from the AUR in Arch, and a couple
failing to build.

Maybe I'll try this out again in the future, but for now, inability to fix the
build errors stumped me.

**Note** Its worth noting that, although I could not get it to build, this
claims to have the closest feature set to EasyWorship (it claims to have
features similar to EasyWorship), including LibreOffice slide import.

##ChangingSong

![ChangingSong - open source alternative to EasyWorship][ChangingSongPic]

I next tried [ChaningSong][].  Unfortunately, development on this has been
stopped and the suggested alternative is OpenLP (see above). In any case, from
my brief inspection, it seems to be far less feature full than the others, and
while that is sometimes a good thing, in this case, the idea is to be able to
	contain a range of use cases into a single program and simplify things that
	way. Next

##Quelea

![Quelea - open source alternative to EasyWorship][QueleaPic]

[Quelea][] is one that I know I should give more time to, but can't bring myself
to. Its entirely written in Java, meaning that to set it up, I had to download a
full JRE. I know it has its place, but I have a completely prejudicial attitude
towards java and so did not enjoy my experience here.

The feature set is reasonable to pretty good. But the fact it simply did not
play at all with my window manager (dwm) and took an age to load, and looks
naff, mean that I'm reluctant to continue letting this one have a chance. Sorry.

#OpenSong

![OpenSong - open source alternative to EasyWorship][OpenSongPic]

Now, here is something a bit different, in the form of [OpenSong][] So, yes, its
got a nasty splash screen when it starts, and some truly horrible default
slides, and some if-fy custom icons, but once up and running, and when you've
got things set up how you like it, this is a really promising program.

There are two modes, Song mode and Set mode. Song mode gives a long list of all
the songs in the database and a big editing box when you select one. One thing
you notice straight away is the amount of information you can include in the
song file that can supplement just the lyrics. You can add chords and get a
nicely formatted chord sheet, comments, different spacings to make words line up
with chords, verse and chorus structuring.

All this is done with a couple of nifty syntax trick which are then interpreted
when you display the song. For example, all lyrics must start the line with a
single space and all tabs with a single period. This way, you can include things
in the file that won't show when you project it.

Its also incredibly easy to customise the display order of the verses, just give
them their correct names verse 1 is \[V1\], chorus 3 is \[C3\] etc. and then
tell it you want \[V1 V2 V4 C1 V3 C2\], or whatever.

The second mode is a where you can configure a set for a particular service.
Choose the different songs you want to include and choose any of the settings
for particular items to change from the defaults. You can also include images,
	bible passages and other objects from here.

I think the crowning achievement for this program is its adherence to the Unix
philosophy

>Everything's a file.

To this end, each of the songs is a single file in XML format, so you can edit
any of them from the songs folder with your regular editor, the bibles used for
passages are stored as XML markup files so are easy to install new ones.

Its great to see a program that, because of what its being asked to achieve, is
not small or simple, and yet manages to maintain the simple philosophies that
have been tried and tested and keeps everything neat and easy to use.

I think I'll be keeping this one around for the foreseeable future.

[EasyWorship]: http://www.easyworship.com/
[EasyWorshipPic]: http://www.easyworship.com/images/easyworship_screenshot_overview_large.png

[OpenLP]: http://www.openlp.org/
[OpenLPPic]: http://manual.openlp.org/_images/mainwindow.png

[ChaningSong]: http://sourceforge.net/apps/trac/changingsong/
[ChangingSongPic]: http://i1-win.softpedia-static.com/screenshots/ChangingSong_1.png

[Quelea]: http://quelea.org/
[QueleaPic]: http://quelea.org/sites/default/files/u1/0.6%20preview.png

[OpenSong]: http://www.opensong.org/
[OpenSongPic]: http://www.opensong.org/d/_media/manual/songswindow1.jpg?w=600

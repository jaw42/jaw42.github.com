---
layout: blog
date: 2013-08-24 09:36:51
tags: ipod winamp gtkpod linux
title: "iPod Management on Linux"
---

I have had an iPod Classic, 80GB, for about 8 years or so now. At the time I got
it, I was still using windows and so iTunes was a barable inconvenience. Not
that much later, I discovered [Winamp](http://www.winamp.com) and specifically
the [ml_ipod](http://mlipod.sourceforge.net/) plugin which provides a number of
additional features to the built-in iPod management.

This setup served me very well. It allowed me to keep track of my library on and
off the iPod, add audiobooks, convert badly encoded music and edit
[id3](http://id3.org) tags. I even carried this setup with me when I made the
mmove to Linux full time and for a long time, Winamp was the only and single
reason I still had a windows 7 partition on my laptop.

I simply could not find a decent, *reliable* way of managing my music on my
iPod. The Arch Linux wiki page on ipods
([link](https://wiki.archlinux.org/index.php/Ipod)) suggests a whole host of
possible programs:

* [Rhythmbox](http://live.gnome.org/Rhythmbox)
* [Banshee](http://banshee.fm/)
* [Yamipod](http://www.yamipod.com/)
* [gtkpod](http://www.gtkpod.org/)
* [Floola](http://www.floola.com/)
* [Amarok](http://amarok.kde.org/)
* [qPod](http://qpod.sourceforge.net/)
* [GNUpod](http://www.gnu.org/software/gnupod/)
* [jakpod](http://www.jakpod.de/)

And I tried out each and every one of them - with the possible exception of
jakpod because the website's in German and the program is written in Java (I'm
not a fan of Java).

###Rhythmbox

![Rhythmbox](https://projects.gnome.org/rhythmbox/screenshots/rb-auto-playlist.png)

Far to enormous and sluggy and feature bloated a program to be sustainable. My
old laptop could hardly cope starting it up. I understand that quite a bit of
work has been put in to make it more stable and use less resources since being
the default media player (*read* media centre) of Ubuntu, but still it tries and
fails to do too much.

###Banshee

![Banshee](http://banshee.fm/theme/images/slides/scaled/music-450.png)

Same, if not worse, as Rhythmbox. The KDE and mono dependencies mean a whopping
great install size and again, it just seems to try and fail to do everything.

###Yamipod

![Yamipod](http://www.yamipod.com/images/main.PNG)

I thought this might be a promising new kid when I tried it, but it was just too
unstable to rely on. I have a reasonably sized (~8000) library, which isn't
going to get smaller, and Yamipod had real problems loading it up, then problems
loading the iPod itself, and finally crashes a short way through the transfer.

###Floola

![Floola](http://www.floola.com/img_screenshots/xPlattform.jpg)

Again, very similar to Yamipod, looks promising but in practice has some way to
go. Its also cross platform and portable meaning that its not focused on Linux
stability, emphasised by the last update claiming

>improved linux support.

Doesn't fill me with confidence.

###Amarok

![Amarok](http://amarok.kde.org/sites/amarok.kde.org/files//Amarok2.7screenie.png)

See Rhythmbox and Banshee

###GNUpod

![GNU](http://qpod.sourceforge.net/resim/ekranGoruntuleri/4.jpg)

This is an interesting one. It claims to be a

>collection of Perl-Scripts which allow you to use your iPod under GNU/Linux and
>many other Operating Systems

I have to admit, that the prospect of iPod management on the commandline is
enticing, but in reality, the scripts don't feel stable and each time you type a
command, you're hoping its going to work, rather than expecting. There are a
couple of front ends, like qPod, but again, KDE dependencies are not lovely, and
the stability just felt rather wobbly.

##gtkpod

![gtkpod](http://www.gtkpod.org/images/thumb/1/12/Main-window-v2.png/800px-Main-window-v2.png)

Notice, this is one I left out so far in the list. gtkpod has, for now, become
the program I use to manage my iPod. I say that tentatively because it isn't
perfect. There is still a small degree of instability, and on loading the iPod
database, the screen will freeze so you don't know whether we're good to go, or
if its time to force quit.

It is however, a good piece of software that does the job well and doesn't try
to do anything else. (Also, its being actively developed, big plus points there.)

gtkpod allows you to search your local library and sort by artist, album etc.
each presented in a separate pane so that you can quickly locate music, standard
music manager stuff. This allows you to select the songs you want to transfer,
right click and "send to ipod". From the iPod end, you can remove tracks, rename
them etc.

On ejecting, the database is written. As with all iPod managers, because of the
infuriating manor in which Apple manages the music there, this does take a
little bit of time, and there is no progress indicator, so the window freezes
while this happens, but with some patience, will be working again soon.

Its definitely not perfect, and unfortunately not quite as good as the winamp +
ml_ipod solution, but it is Linux native and gets the job done, so for the time
being, I'll be sticking with gtkpod. And I might even erase the windows
partition, though my laptop dying might do that for me (it going soon I can tell).

---
layout: blog
date: 2013-08-21 08:38:05
tags: linux program youtube mplayer
title: "youtube-viewer"
---
I am a big fan of the move on YouTube's part to encourage more educational
shows. Along with projects such as [Subbable](https://subbable.com), it is
becoming possible for talented content makers to earn a living as well as
deliver the excellent and entertaining videos we enjoy.

As I say that, however, I'm also not a big fan of YouTube, though more
specifcally, my issue is with the web experience. On my low end hardware, I find
the experience to be less than smooth and cluttered to the point of distraction.

To this end, I use the excellent [youtube-viewer](https://github.com/trizen/youtube-viewer).
This is a simple enough program, written in perl, that lets you search youtube
and playback videos via mplayer. Most importantly for me, though, is it's
ability to deal with subscriptions.

I can whack in my username, and `youtube-viewer` will pull down the list of the
most recent uploads to all of my subscriber channels. I can then (and this is
the lovely clever part) give it a range to play, sit back, and enjoy.

	$youtube-viewer -S username

	 1. The Guardian's hard drives, Xbox One, PlayStation 4, and Amazon: 90 Seconds on The Verge (by theverge) (01:31)
	 2. Small Empires episode 4: Artsicle (by theverge) (23:44)
	 3. The Verge Mobile Show 059 - August 20th, 2013 (by theverge) (01:06:09)
	 4. Why Are American Health Care Costs So High? (by vlogbrothers) (07:53)
	 5. 6 Foreign Foods Invented In USA (by vsauce2) (02:36)
	 6. Fighting depression in the holy land (by theverge) (08:38)
	 7. Bullet Block Experiment (by 1veritasium) (01:52)
	 8. New iPhones, a Facebook security problem, and JJ Abrams' latest tease: 90 Seconds on The Verge (by theverge) (01:31)
	 9. Subbable Update #1 (by cgpgrey) (03:04)

	=>> Select one or more videos to play (:h for help)
	> 1-9

`youtube-viewer` also has the ability to search for, and play, any video from
youtube. To do this, just add the search term on the command line. To assist in
the particular flow, I created a simple zsh function to allow me to flick over
to subscriptions easily when I'm not searching, and also reduce the typing.

	yt () {
		if [ $# -eq 0 ]
		then
			youtube-viewer -S joshwainwright1
		else
			youtube-viewer "$@"
		fi
	}

If you want to search, use `yt <search term>`, or to view recent videos from
subscriptions, just `yt`.

---
layout: blog
date: 2013-08-25 10:43:32
tags: youtube mplayer script
title: "Watching Youtube in Mplayer"
---
I have written previously about youtube-viewer and how it can be used to stream
Youtube videos to your pc so that you can watch them without needing flash, or
even the new HTML5 Youtube player.

After experiencing some serious internet slowness, I went through the help files
and have added a couple of flags to my `yt` function from last time. Now, when I
select a video to watch, it is downloaded using the quality that I specify, into
a folder that I can then empty after watching the videos.

The new script is shown below.

	#!/bin/bash

	#Quality setting 2 = 240p
	#                3 = 360p
	#                4 = 480p
	#                7 = 720p
	#                1 = 1080p

	qual=1
	dir="/home/josh/Videos/Youtube"

	options="--download-dir=$dir -$qual -d"

	if [ $# -eq 0 ]; then
		youtube-viewer -S joshwainwright1 $options
	else
		youtube-viewer "$@" $options
	fi

	if [ "$(ls -A $dir)" ]; then
		open $dir/*

		echo "Delete all downloaded youtube videos?"
		select s in y n; do
			break;
		done;
		s=($s)

		if [[ s -eq y ]]; then
			rm $dir/*
		fi
	fi

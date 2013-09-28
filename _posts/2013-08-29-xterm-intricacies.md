---
layout: blog
date: 2013-08-29-14:49:39
tags: Linux xterm settings
title: "XTerm Intricacies"
---
For quite some time, I'd say 4 years or so, I have been using [xfce4-terminal]()
as my default terminal emulator. Its fast to start, light-weight, and, most
importantly at the time I was trying to choose an emulator, easy to configure.

With my recent road test of the Solarized colour scheme, I noticed that there
was a pre-built version for both xfce-terminal and XTerm. I had a a go at
getting the xfce-terminal scheme to work, but having had this setup for so long,
and being happy with it, was reluctant to just overwrite my lovely custom
colours and choose with the GUI settings page the same as in the Solarized
theme, so I decided to try out the colours with a different terminal and see
what they were like there, then if I decided I liked them, I could abandon my
colours in xfce.

I went for having a go at setting up the colours in xterm, and this led me to
give this oft-maligned (on my system) terminal emulator another chance. From
what I've heard, xterm is a fairly antiquated, but extremely low on resources
terminal emulator from _way_ back.

As such, there aren't any of the nice buttons and colour choosers for the
settings, and there isn't even an `.xtermrc`, instead, everything is configured
through the `.Xdefaults`, or `.Xresources` files in the home directory (actually
these can be called anything and placed anywhere, you just need to specify them
at the start of `x`).

Below is my `.Xresources`. Have a look, and we'll go through it:

	!Xterm
	XTerm*locale: true
	XTerm*faceName: DejaVuSansMono
	XTerm*faceSize: 11
	xterm*charClass: 33:48,36-47:48,58-59:48,61:48,63-64:48,95:48,126:48
	XTerm*selectToClipboard: true

	! Common

	#define S_yellow        #b58900
	#define S_orange        #cb4b16
	#define S_red           #dc322f
	#define S_magenta       #d33682
	#define S_violet        #6c71c4
	#define S_blue          #268bd2
	#define S_cyan          #2aa198
	#define S_green         #859900


	! Dark

	#define S_base03        #002b36
	#define S_base02        #073642
	#define S_base01        #586e75
	#define S_base00        #657b83
	#define S_base0         #839496
	#define S_base1         #93a1a1
	#define S_base2         #eee8d5
	#define S_base3         #fdf6e3


	! Light

	! #define S_base03        #fdf6e3
	! #define S_base02        #eee8d5
	! #define S_base01        #93a1a1
	! #define S_base00        #839496
	! #define S_base0         #657b83
	! #define S_base1         #586e75
	! #define S_base2         #073642
	! #define S_base3         #002b36


	! To only apply colors to your terminal, for example, prefix
	! the color assignment statement with its name. Example:
	!
	! URxvt*background:            S_base03

	*background:              S_base03
	*foreground:              S_base0
	*fading:                  40
	*fadeColor:               S_base03
	*cursorColor:             S_base1
	*pointerColorBackground:  S_base01
	*pointerColorForeground:  S_base1

	*color0:                  S_base02
	*color1:                  S_red
	*color2:                  S_green
	*color3:                  S_yellow
	*color4:                  S_blue
	*color5:                  S_magenta
	*color6:                  S_cyan
	*color7:                  S_base2
	*color9:                  S_orange
	*color8:                  S_base03
	*color10:                 S_base01
	*color11:                 S_base00
	*color12:                 S_base0
	*color13:                 S_violet
	*color14:                 S_base1
	*color15:                 S_base3

Its a fairly simple example, split into a few sections.

- Everything starting with `#define` is a colour for the solarized theme. Each
  colour is available for highlighting text inside man pages, when editing text,
  grep output etc.

- Everything starting with `!` is a comment, so is ignored

- The `*<quality>` apply to any program looking at the file, whereas
  `<program>*<quality>` apply just to the program `<program>`.

From that, its easy to work out the general syntax of the file,

	<program>*<quality>: <value>

With some other options.

So the part that relates to XTerm is immediately clear to be the first 5 lines.
In order these lines:

- tell XTerm to use the default locale so that a better font can be chosen
  rather than compromise so others are available

- set the font

- set the font size

- (interesting one) set a string that can be used to select urls in the
  terminal. I got that from [here](http://blog.orebokech.com/).

There are many, many options that can be set in this way for many applications.
See the excellent [Arch Linux](https://www.archlinux.org/) wiki
[page](https://wiki.archlinux.org/index.php/Xresources) for more helpful info,
this [page](https://wiki.archlinux.org/index.php/Xresources) for more info on
the files themselves and
[here](http://www.tldp.org/HOWTO/XWindow-User-HOWTO/moreconfig.html) for lots
more info than you could need on using `Xresources` and `Xdefaults`.

*Update*
I've also been having issues with copy and paste actions recently. For XTerm,
the PRIMARY selection is used by default. To change this to CLIPBOARD, I've
added one line above. Now, selecting text will put it straight into the
clipboard for pasting into other programs.

*Update*
I've now moved away from Solarized theme, back to Molokai, so my colours have 
changed. Check my [dotfile](http://github.com/joshaw/dotifles) for more info.

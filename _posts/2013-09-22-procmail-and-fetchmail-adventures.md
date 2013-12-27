---
layout: blog
date: 2013-09-22-14:46:47
tags: procmail fetchmail mutt email
title: "Procmail and Fetchmail Adventures"
---

I had a sudden desire recently to not rely on the internet connection to my
gmail IMAP server, but to download my emails periodically with fetchmail, and to
do the sorting that is usually taken care of in my multiple lovely Gmail 
	filters, locally with promail.

This, I found, is not an easy thing to do, and, what's more, when I had achieved 
the aforementioned task, the resulting work flow did not match that which I had 
become accustomed to in gmail, and lacked the flexibility I had come to enjoy.

Because of this, I have since reverted back to my old mutt to gmail via IMAP 
setup, and I expect will remain there until the urge grasps me once more. 
However, I shall record here the settings that I used. These "worked", insofar 
as they downloaded my emails and stored them in the correct locations, I just 
have yet to reach that level of understanding and command of the email situation 
to maintain the configuration, or to properly configure it to my desires.

First, `fetchmailrc`:

	set daemon 600
	poll pop.gmail.com with proto POP3 and options no dns
  	  user 'x@gmail.com' pass 'passwd' is 'user' here
  	  options keep ssl sslcertck

	mda '/usr/bin/procmail -d %T'

And, of course, `procmailrc`:

	PROCMAIL_DIR=$HOME/.mail
	SHELL=/bin/bash

	LOGFILE=$PROCMAIL_DIR/procmail.log

	MAILDIR=$HOME/Mail/
	DEFAULT=$HOME/Mail/

	VERBOSE=on


	#######################################################	
	#                       Filters                       #
	#######################################################

	###################
	#  Mailing Lists  #
	###################

	:0
	* ^TO_mutt-users
	.MailingLists/.mutt/

	:0
	* ^TO_vim_use
	.MailingLists/.vim/

	:0
	* ^TO_todotxt
	.MailingLists/.todotxt/

	:0
	* ^TO_nail-devel
	.MailingLists/.s-nail-devel/

	:0
	* ^TO_arch-announce
	.MailingLists/.arch/
	
	####################
	#  Useful Filters  #
	####################

	:0
	* ^(From|To).*@bham.ac.uk
	.Birmingham_Uni/.bhamemail/

	:0
	* ^To.*cahbassenfell@gmail.com
	.Church/.Bassenfell/.CAHBassenfellgmail/

	:0
	* ^From.*ubcu.org.uk
	.Church/.UBCU/

	:0
	* ^(From|To).*city-church.org.uk
	.Church/.City/

	:0
	* .*judo
	.Judo/

	:0
	* pianofiles
	.Pianofiles/

	:0
	* ^(To|From).*paypal
	.Receipts/.Paypal/

	:0
	* ^(From|To).*(rachel)
	.Rachel/

	:0
	* ^(From | To).*(ubuntu | linux)
	.Linux/

	:0
	* (vodaphone|orange)
	.Phone/

	:0
	* ^From.*@glassesdirect.co.uk
	.Receipts/.Glasses_Direct/

	:0
	* baesystems
	.Jobs/.Internships/.Detica/

	:0
	* redspottedhanky
	.Receipts/.Trains/

	:0
	* ^From.*dinopc
	.Receipts/.DinoPC/

	:0
	* ^From.*gumtree
	.Receipts/.Gumtree/

	###############
	#  Otherwise  #
	###############

	:0
	* ^From.*(facebook|aldi|youtube)
	.bin/

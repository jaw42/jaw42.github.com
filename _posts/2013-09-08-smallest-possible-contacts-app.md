---
layout: blog
date: 2013-09-08-21:02:40
tags: google contacts c++
title: "Smallest Possible Contacts App"
---

I have, in the past, dabbled in a bit of c++ programming, and thought that,
maybe, the time was ripe for another forray into this, in my opinion, rather
pleasant language, before the excitement of my course at uni gets under way.

To that end, I have written, what may quite possibly be, the smallest,
featureless contacts application possible. At the moment, its called ...
`contacts` and all it does is let you search for a name and presents you with
all the information availible for that search.

It rather specifically relies on a single contacts file, which it searches and
then presents the information from. This file is the Google contacts exported
contacts file that is availible to download from the
[Gmail](https://mail.google.com) or [Contacts](https://contacts.google.com)
website, and is usually used for importing the contacts into other
applicaitions. Or, in the case of this particular option, into another Gmail
account.

My motivation for writing this program, aside from the needless desire to write
something for practice, is the overhead experienced whn wanting to search for an
address or phone number which I know I have saved on my Gmail account. Now,
instead of opening the web browser, navigating to gmail, clicking on contacts,
searching for the right name and opening the contact to read the info I want, I
can just open a terminal, type

	contacts <search>

and Robert's your mother's brother, there you have it.

Here's a sample output:

	$contacts Bloggs

	Search: Bloggs
	Total size = 580
	searching for "Bloggs"...

	0 Joe Bloggs
	1 Jane Bloggs
	Choose a result: 0

	Name              = Joseph Alex Bloggs
	Given Name        = Joe Bloggs
	Family Name       = Bloggs
	Birthday          = 1984-07-06
	Group Membership  = * My Contacts ::: Family
	Email: Uni        = joe.bloggs@internet.com
	Email: * Home     = joe@bloggs.net
	Phone: Home       = 01215 958463
	Phone: Mobile     = 07586 334592
	Address: Work     = 15 The Street, Heretown, Citydom, R21 7DJ
	                    15 The Street
	                    Heretown
	                    Citydom
	                    R21 7DJ
	1 Search again
	0 Exit
	Choose an option:


What's happening there? Well, it reads the file spcified in the code and
stores it in a series of arrays. It then, systematically searches through to
find the search term presented. This is done across all feilds, so I can search
for a telephone number, address, house name, etc. Then, a list of the results
found is presented so that the user can choose which to display. If only a
single result is found, then it is displayed immediately. Each field for which
there exists information is displayed.

As I said, this program does not do much, but I have found it to be very useful
for quickly querying a name. If you find it useful, let me know, as well as
reporting any bugs or improvements.

Download the binary and the source code from my
[Github](http://github.com/joshaw/Bin/contacts_src) account.

---
layout: blog
date: 2013-10-21-09:44:59
tags: mutt smtp email
title: "Mutt Send Hooks"
---
I use two different email accounts. One for everything, with Gmail and one for 
everything else - ie university. But I still like to deal with my "everything" 
all in one place. To that end, I have all my university emails forwarded to my 
Gmail account where I can read them with everything else. This works for me, 
simple, easy, straightforward.

A few months ago, I made the move to use Mutt as my primary email client. This 
is a terminal based, ncurse email client. It means I can deal with all of my 
emails at the console in a fraction of the time I would did before, and because 
I have my emails all in one place, all I need to do to set it up was to add the 
necessary imap settings to connect to Gmail.

This is all very nice and pleasant, and you can see my particular setup in my 
[dotfiles](http://github.com/joshaw/dotfiles/email/mutt.symlink/muttrc) but the 
problem I ran into was one of sending emails from two different accounts.

In Gmail, there is a setting to send emails as if they were sent by the account 
to which the emails were sent to, ie if an email was addressed to myaccount1, 
then when you replied to that, it would come from that account rather than 
Gmail.

There are two different ways Gmail can use to achieve this.

1. First it can just change the `From:` part of the header, so the receiving 
client will simply see the email address of the original `To:` account, or
1. Second Gmail can route the message through the actual serer of the address 
you want to send from.

The first of these is easy, just change the header value, almost all email 
clients can do this, or you can do it manually. But routing the message through 
a different serer can be more difficult because you need the address of that 
serer.

The benefits of this second method, though, are that your message won't look 
like spam to some of the more thorough email clients. Some clients look at the 
header and compare the routing information with the `From:` address and if they 
don't match, as they wouldn't in the first method, then it thinks that this is 
likely from some spurious location trying to trick you into thinking it's 
legitimate, and flag the message as spam.

To get around this, I employed the fantastically useful feature of mutt - 
hooks.

###Hooks

Hooks in mutt allow you to perform certain actions at different stages in 
reading/writing/sending messages. Specifically, I used the `send-hook` which 
allows a command to be performed based on a message that is to be sent, before 
it is composed. The command I wanted to perform was to change certain settings 
so that my message would not be sent by Gmail, as is the default, but instead 
sent by my university email serer.

So my hook says

- `if` message to be sent is addressed to something like `blah@uniersity.ac.uk`
	- `then` set the `From:` address as being my uni address
	- set the smtp serer as being uni's serer
	- set the `Sent` folder as Gmail's so that a copy gets saved there
- `else` don't change anything, just send the message as normal.

I do this though a different file which contains all the necessary settings.  
At the appropriate time, this file gets sourced which changes the required 
settings, and then the message is sent through university. This is the line 
that performs the magic in my main `muttrc` file.

	send-hook '~t university.ac.uk' 'source ~/.mutt/muttrc_uni'

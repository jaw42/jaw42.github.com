---
layout: unix
unix: true
categories: [unix]
title: Fortune
---
#Fortune

Fortune is a small program included in most unix distros to display a random
quote or phrase from a long list of them. Its often used in the file `/etc/motd`
so that a random saying is shown to users when they log into a machine.

Below are a few of the fortune cookies (list of quotes organised by subject)
that I have made over the years. To use them, just download and move to the
fortune folder, usually `/usr/share/fortune/` for Arch Linux, and use the
command

	fortune <nameOfFile>

where `nameOfFile` is whatever you choose to name the file that contains the
subject you're after.

Check out the user manual [here](http://linux.die.net/man/6/fortune) for the
full details.

Each of the subjects below contains a text file with a long list of quotes/facts
etc. along with a data file. The text file is a simple plaintext file with a %
character to deliminate each quote. The data file is created with `strfile` and
contains a header reference to each of the quotes in the associated text file so
that a random quote can be easily selected.

Remember, you need both of the files for fortune to be able to give you some
entertainment.

<table>
	<tr>
		<td>Hitchhiker's Guide to the Galaxy</td>
		<td><a href="fortunes/hitchhiker">Text</a></td>
		<td><a href="fortunes/hitchhiker.dat">Data</a></td>
	</tr>
	<tr>
		<td>Meaning of Liff</td>
		<td><a href="fortunes/liff">Text</a></td>
		<td><a href="fortunes/liff.dat">Data</a></td>
	</tr>
	<tr>
		<td>Dylan Moran</td>
		<td><a href="fortunes/DylanMoran">Text</a></td>
		<td><a href="fortunes/DylanMoran.dat">Data</a></td>
	</tr>
	<tr>
		<td>Black Books</td>
		<td><a href="fortunes/BlackBooks">Text</a></td>
		<td><a href="fortunes/BlackBooks.dat">Data</a></td>
	</tr>
	<tr>
		<td>Random Facts</td>
		<td><a href="fortunes/facts">Text</a></td>
		<td><a href="fortunes/facts.dat">Data</a></td>
	</tr>
	<tr>
		<td>Monty Python</td>
		<td><a href="fortunes/">Comming</a></td>
		<td><a href="fortunes/">Soon</a></td>
	</tr>
	<tr>
		<td>Douglas Adams</td>
		<td><a href="fortunes/">Comming</a></td>
		<td><a href="fortunes/">Soon</a></td>
	</tr>
</table>

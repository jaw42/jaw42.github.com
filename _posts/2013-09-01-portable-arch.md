---
layout: blog
date: 2013-09-1-14:49:39
tags: Arch Linux usb
title: "Portable Arch"
---

Arch Linux has been my stable, reliable base system for years now. It is a
brilliantly lightweight, completely bare default install and so customized
exactly to my specifications. When you complete the install
[instructions](https://wiki.archlinux.org/index.php/Official_Arch_Linux_Install_Guide),
you are presented with just a terminal window and have to install a window
manager of your choice along with any other programs you want to use.  Because
it's so lightweight, and it contains only the programs you specify, it's ideal
to be used in lower spec systems.

Several times, while repairing a laptop, or wanting some familiarity on a
different system, I have desired to be able to boot up my good old friendly Arch
system and feel at home and just get on with the job at hand. Unfortunately this
isn't often possible.

If there is an internet connection, then SSH might be a solution, but internet
is not always as omnipresent as we like. To get around this, enter the Live USB.

A live iso bootable system is an operating system that is saved on some sort of
medium, often not the main hard drive of the computer that will run it, that
exists only to perform a single, or small subset of operations. That medium used
to typically be a 3.5" floppy drive, but is now more likely to be a CD or, even
more recently, a USB drive.

The fact that for some time, a live CD was the default method of obtaining a
version of your favourite Linux system shows off a key feature of the live USB;
non-persistent storage.

When you boot a computer using a live install, be it floppy, CD or USB, the
initial ram disk, `initramfs`, is loaded into memory directly and system files
are read from the medium and then changes are stored in memory, or if there is
storage available on some other hard drive, then they are saved there.

The point is that you can't boot a live system, write a novel, turn of the
computer and return to it hoping that your beautiful 8th Harry Potter
installment will be waiting for you.

I figured though, that there shouldn't be anything different between the ability
to install an operating system to a hard drive and save stuff there alongside
it, and to install it on a USB drive. I did think, though, that since Live
systems are all I have come across thus far, that I would have to search around
and overcome some nasty intricacies in order to get this portable install
working.

I was correct on the first count, and pleasantly surprised to be incorrect on
the second.

Installing a full operating system on a USB drive turns out to be remarkably
easy to do. The only problems that I ran into involved the installation of a
boot loader, the final step on the path. There are a full set of instructions
[here](https://wiki.archlinux.org/index.php/Installing_Arch_Linux_on_a_USB_key),
which is what I was surprised to find so easily, and what I used as a base to
get the system up and running. I'm going to go through some of the steps that I
had to get around and add some comments.

##Preparation

The install procedure, I found, was extremely simple to start and then got
slightly more difficult, but not crazily so, and then was hard for a short time,
and then was done! The main reason for this, I think, is that I was installing
Arch Linux on a USB drive from Arch Linux.

That might sound like an exercise in futility, but as I've said, the idea is to
have a portable clone of my system. So, if you're not using Arch as your base
system, this might be a little more tricky.

First things first, do, absolutely do install the package
`arch-install-scripts`. This is a set of scripts that just help to take some of
the pernickety-ness out of the commands that will be used.

The next thing that I found to do was ... not to download the Arch iso. It
seemed strange to me, but the process of installation actually involved this.
Basically, we're going to mount the drive, pull down a few packages and files
onto it and then move over into that bare install as if it were a full computer,
but with some strange digital umbilical chord back to the main computer, its
like my old laptop is giving birth to a little USB Arch.

##Installation

It doesn't seem like we've done enough yet, but the next step is to install
things. Follow the install guide from the Arch
[Wiki](https://wiki.archlinux.org/index.php/Installation_Guide).

- Since its a flash USB drive, picking the right filesystem is fairly important.
  As the guides say, ext4 is good, and if you can disable journaling so that
  there are less writes to the drive, then thats a sensible step to take.

- Mount the drive somewhere you know where to find it, I'd go with

      $ mkdir /mnt/USBARCH
      $ mount /dev/sdb1 /mnt/USBARCH

- Next, we need to be connected to the internet here, install the base Arch
  system using pacman. One of the scripts in the `arch-install-scripts` is
  `pacstrap`. This basically provides us with an easy way to install a bunch of
  packages from the net to a different location that we specify.

      $ pacstrap /mnt/USBARCH base

- Here, you can also install any other packages you know you'll want. You can do
  it later as well, but since we're still using the mother-system to control
  things, I went for installing a wireless controller, `wicd`, a familiar
  editor, `vim` and a way of making the system mine a bit easier, `git`. Just
  add these to the end of the previous command.

- And once that has finished, you have an Arch Linux on USB installation just
  like that. Obviously there are all the other little bits and pieces that make
  installing Arch fun, like setting the hostname, and defining a timezone, but
  it should now be a usable system.

##Completing

There are a couple of caveats which must be mentioned. The USB will not yet be
bootable, since there is not bootloader to tell the BIOS where and how to find
the operating system on the drive etc.

To install a bootloader, I'll use GRUB since its what I always use, add it to
the list of things to install, or just go back into the system with `chroot` and
download and install it.

When it comes to making the necessary files and setup environment for GRUB, I
found I ran into the only problem. I the usual `grub-install /dev/sdX` didn't
work.

I guess this is because this is a single, un-partitioned flash drive which is
different to a hard disk drive, but I found that I had to use the "Install to
partition or partitionless disk" section of the GRUB wiki
[entry](https://wiki.archlinux.org/index.php/GRUB).

There are some warnings to this work around. The commands try to prevent the
created files from being changed in any way, ie moved or re-referenced, when
other things on the disk change, otherwise, GRUB won't know where to find them.
But this does mean that the system is less stable than an otherwise sensibly
installed operating system on a real computer would be.

For that reason, this portable Arch Linux system should not be relied upon as a
primary computer, but used as a backup, or convenience when needed, or even just
as a curiosity piece.

Having said that, I have had no problems with my now proudly labeled "Arch" USB
drive. Hope this is slightly helpful to someone. Let me know how you get on if
you try the same thing, or if there are any corrections I need to make here.

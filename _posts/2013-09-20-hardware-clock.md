---
layout: blog
date: 2013-09-20-14:07:58
tags: time linux hwclock softwareclock
title: "Hardware Clock"
---
The clock on a computer is more than just a date and time that is stored
magically somewhere in the circutary and shown in the corner of the screen. The
time and date must be maintained when the computer is completely powered down so
that it can be restored again when the computer boots.

This is acheived using what is called a hardware clock. When the computer is on
power, part of the lowest level code will count time as it passes and so keep
the computer in time with other devices. When it has the opportunity, when
connected to the internet, the computer might be able to talk to some other
machine's who are slightly better quiped at keeping the timne, and so update
itself.

When the computer is turned off, however, the software can no longer count the
seconds as they pass. If the last known time was recorded and then restored on
boot, the computer would have the wrong time as soon as it was started since it
would not know how much time had passed while it was off.

To rectify this, a hardware clock is used inside the computer as well. This is a
small piece of electronics much like a digital wrist watch contains, that is
able to count the passing time with extremely low power requirements, thus, even
if you don't switch a computer on for a few months, the time will still be roughly
accurate the next time you visit it.

##Linux

On Linux, the hardware clock complements the software clock, and both are used.
When the computer is on, the software clock is used, counting up the seconds.
When it is shutting down, the current time is sent to the hardware clock so that
it can take over counting at the right time. On boot, the software clock then
reads the time from the hardware clock and continues counting.

If the time is lost for any reason, or just to keep accuracy, the software clock
can be updated from a server which is maintained with the accurate time. The
command todo this is

	ntpdate pool.ntp.org

This means, using the [Network Time Protocol](http://www.ntp.org)(NTP) update
the software clock from the server `pool.ntp.org`. To ensure that the correct
time will be maintained on the next boot, this can be sent directly to the
hardware clock so that it is as accurate as possible as well

	hwclock --systohc

Note that both of these commands will need to be run with root privaliges.

##Hardware Clock Drift Time

Sometimes, the hardware clock and the software clock get out of sync and the
time will be displayed incorrectly. This might be due to the hwclock being
modified in the BIOS. On these occasions, a file is written while keeps track of
this "drift" and this is used to adjust the software clock when the computer is
booted.

This file is usually localed at `/etc/adjtime`. If the time at boot is regularly
incoorect, one option is to delete this file, update the software clock (if
possible from the internet), write this good time to the hwclock (see above) and
reboot the computer.

---

###Notes
See [here](http://eloquence.marxmeier.com/sdb/html/954237377.html)

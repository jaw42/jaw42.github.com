---
layout: default
title: Operating Systems and Networks
---

# Operating Systems

* * *
* TOC
{:toc}
* * *

## Memory
- Read-Only Memory (**ROM**)
	- Cannot be modified
	- Suitable for bootstrap program or game cartridges
- Electronically Erasable Programmable Read-Only Memory (**EEPROM**)
	- Can be modified, but not frequently
- Random-Access Memory (**RAM**)
	- Memory that allows access at random
	- CPU uses RAM as it needs read and write access.
	- Often implemented in Dynamic Random-Access Memory (DRAM).

## CPU

### CPU Modes
- **Kernel Mode**
	- CPU can execute every instruction in its instruction set
	- Can use every feature of the hardware
	- Complete access to hardware
	- When CPU is in kernel mode we say the OS is also in kernel mode
- **User Mode**
	- User programs run in user mode
	- Permits only a small subset of instructions to be executed
	- Subset of features of the hardware can be accessed
		- Generally disallows all instructions involving I/O and memory 
		  protection
- Program Status Work (**PSW**)
	- Register that keeps the mode of the CPU

### TRAP
- Either caused by system call or by hardware
- Used by hardware to warn of an exceptional situation 
	- eg attempt to divide by 0
	- eg arithmetic underflow
- Operating system gets control and must decide what to do
	- eg OS terminates program when error occurs
	- eg error can be ignored and underflowed number set to 0

### System Call
- To do any operation that required kernel mode, a user program makes a 
  **system call**
- **Traps** into the kernal and invokes the operating system
- `TRAP` instruction switches from user mode to kernel mode
- Control is returned to the user program when the operation is completed.

### System Boot
1. Initializes all aspects of the system
	- CPU
	- Registers
	- Device controllers
	- Memory cards
1. Load operating system and kernel to memory and start them.
- Init system saved to firmware since CPU cannot hold information when it has 
  no power.
	- Saved in hardware chip
	- Either read-only memory (**ROM**)
	- Or electronically erasable programmable read-only memory (**EEPROM**)
- After boot process
	1. Programs started at boot become system daemons/processes
	1. System waits for events to occur
		- eg mouse click, program wanting file access
		- Events known as interrupts
		
### Interrupts
- Hardware may trigger interrupt at any time by sending a singal to the CPU
- Software may trigger an interrupt by executing `system call`.
- When the CPU is interrupted:
	1. Stops current operation immediately
	1. Transfers execution to a fixed location
		- Fixed location usually contains the starting address where the 
		  service routine for the interrupt is located
	1. The interrupt service route executes
	1. When the operation has been completed, CPU resumes the operation that 
	   was interrupted.

## Devices
- Interact via **device controller** connected through a common bus to CPU.
- Small computer-systems interface (**SCSI**)
	- Hardware that allows SCSI storage device to communicate with the 
	  operating system using a SCSI bus

### Device Controller
- Moves data between the peripheral devices that it controls and its local 
  buffer storage
- Device driver exists for each device controller
	- Understands the device controller and provides the rest of the OS with a 
	  uniform interface to the device.
	1. Loads appropriate registers within the device controller
	1. Device controller decides what to do based on contents of registers
	1. Controller starts the transfer of data from the device to its local 
	   buffer
	1. When data transfer is complete, controller informs the device driver via 
	   an interrupt that it has finished its operation
	1. Device driver then returns control to the operating system.
- Works well for small data transfers, mouse, keyboard etc.
- Not good for large data transfer, disk I/O etc.
- For large transfers of data use Direct Memory Access (**DMA**)
	- Removes CPU from the loop
	- After setting up buffers, pointers and counters for the I/O device, the 
	  device controller transfers an entire block of data directly ro or from 
	  its own buffer storage to memory
		- No intervention from the CPU is needed.
	- Only one interrup is generate per block
		- To tell the device driver tyhat the operation has completed
		- Rather than one interrupt per byte generated for low-speed devices.
		- CPU is free for other operations.

## MultiTasking
-

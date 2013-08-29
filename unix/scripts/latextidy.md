---
layout: scripts
unix: true
categories: [scripts]
title: LatexTidy
---
#LatexTidy

When building latex documents, I use
[latexmk](http://phys.psu.edu/~collins/software/latexmk-jcc/) since it has a
built in option to watch for file changes and build the document when it detects
one. But, as with any latex compiler, this produces a large number of auxilary
files, relating to the table of contents, images etc. These are all ignored with
a `.gitignore` file, but sometimes its nice to clean a directory up, for which I
use this sciprt.

All it does is search through a directory and search for files with the
specified extensions and delete them. It has options to do this recursively,
incase you've got a number of folders with redundant latex files in, and a
`dry-run` option to display which files would be deleted if it was run normally.

<a href="https://github.com/jaw42/bin/blob/master/LatextTidy">
<i class="icon-cloud-download"> </i> Download</a>

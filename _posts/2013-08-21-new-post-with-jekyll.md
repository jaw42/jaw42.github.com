---
layout: blog
date: 2013-08-21 00:38:24
tags: jekyll bash
title: "New Posts with Jekyll"
---
Jekyll makes writing blog posts extremely easy, as I'm [discovering](), but to
aid just that small amount more, I decided to use a short script to create the
starting file that will be filled with the post entry.

I used a script from [Nate Eagle](http://nateeagle.com/2011/09/21/easier-post-creation-for-jekyll-with-bash/) to start from and have just made a couple of changes - to make the script easier to read, and to add the creation date to the yaml front matter.

    #!/bin/bash
    # Create a new post with today's date and prompt for the title.

    # Config
    editor="vim"
    format="md"

    # Get layout via getopts (-l)
    while getopts ":l:" opt; do
        case $opt in
            l)
                layout=$OPTARG
                ;;
            :) echo "$opt requires an argument" >&2
                exit 1
                ;;
        esac
    done

    # Set default config values
    : ${layout:="blog"}


    # I like giving myself a polite greeting.
    echo "---"
    echo "Creating a new ${layout} for" `date +%A", "%B" "%e", "%Y`"."
    echo ""
    read -p "Enter the title: " title

    # Turn spaces into dashes
    for word in $title
    do
        dashedTitle=${dashedTitle}-${word}
    done

    # Convert title to lowercase
    dashedTitle="`echo ${dashedTitle} | tr '[A-Z]' '[a-z]'`"

    # Create a filename with the date, dashed title, and format
    filename="`date +%Y-%m-%d`${dashedTitle}.${format}"

    # Get current date and time
    date="`date '+%Y-%m-%d %T'`"

    echo $filename

    touch $filename

    # Add initial YAML to the top of the new bit
    echo "---" >> $filename
    echo "layout: ${layout}" >> $filename
    echo "date: ${date}" >> $filename
    echo "catagories: " >> $filename
    echo "title: \"${title}\"" >> $filename
    echo "---" >> $filename
    echo "" >> $filename

    # Open in vim and go to the end of the file ( + )
    ${editor} + $filename

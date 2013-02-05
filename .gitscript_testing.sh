#!/bin/bash 
DATE=`date +%Y%m%d`

git add . -v
echo -n "Comment [Auto comment "$DATE"]: "
read comment
if [ -z "$comment" ]
then 
	comment="Auto comment $DATE"
fi
echo $comment
git commit -a -v -m "$comment"
git push -v

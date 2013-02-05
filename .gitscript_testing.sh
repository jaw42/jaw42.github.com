#!/bin/bash 
DATE=`date +%Y%m%d`
echo $DATE

git add . -v
echo -n "Comment [Auto comment "$DATE"]: "
read comment
if [ -z "$comment" ]
then 
	comment="Auto comment $DATE"
	echo $comment
fi
git commit -a -v -m "$comment"
git push -v

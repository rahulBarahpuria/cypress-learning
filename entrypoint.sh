#!/bin/bash
echo Running docker container

#go to /usr/tmp
#for each file from $1 to $2 inside /usr/tmp
#copy to /usr/src/app/cypress/integration
#cd /usr/src/app/cypress
#npx cypress start
echo Args passed $1, $2
cd /usr/src/app/cypress/integration
let start=$(($1-1))
let end=$(($2-1))
#let indx=1
#let tmpstart=$start
files=(/usr/tmp/*.js)
while [ $start -le $end ]
do
	cp ${files[$start]} /usr/src/app/cypress/integration
	start=$((start+1))
done

# for file in /usr/tmp/*.js
	# do	
		# if [ $indx -lt $tmpstart ]
		# then
			# indx=$((indx+1))
		# elif [ $start -gt $end ]
		# then
			# break
		
		# else
			# echo $file
			# cp $file /usr/src/app/cypress/integration
			# start=$((start+1))
		# fi
# done

pwd
ls -ltr
		
cd ../../
echo Starting Cypress...
npx cypress run
		

		
	
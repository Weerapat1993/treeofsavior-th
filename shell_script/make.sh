#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run make $1 <name>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

if [ "$#" -lt "2" ]
then
  echo "\n${red} error: missing required argument \`name\`\n"
  echo "${green} --- Helper ---";
  echo " usage : ${USAGE}${reset}\n";
else
  command=$1;
  command_name=$2;

  if [ -e "./app/Console/commands/${command}.sh" ]; then
    sh ./app/Console/commands/${command}.sh $command_name
  else
    echo "\n${red} error: command \`npm run make ${command}\` is not found.${reset}\n"
  fi
fi

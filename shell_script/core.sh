#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run core <name>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

if [ "$#" -lt "1" ]
then
  echo "\n${red} error: missing required argument \`name\`\n"
  echo "${green} --- Helper ---";
  echo " usage : ${USAGE}${reset}\n";
else
  command=$1;

  if [ -e "./app/Console/core/${command}.sh" ]; then
    sh ./app/Console/core/${command}.sh
  else
    echo "\n${red} error: command \`npm run core ${command}\` is not found.${reset}\n"
  fi
fi

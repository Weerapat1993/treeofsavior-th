#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run make:container <name>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

if ! [ "$#" -lt "1" ]
then
  if [ -z "${CORE}" ]; then
    export CORE=$1;
  fi
  directory=( ./src ./src/views ./src/views/containers/ )
  for dir in "${directory[@]}"
  do
    if ! [ -d "$dir" ]
    then
    	mkdir ${dir}
    fi
  done

  if ! [ -e "./src/views/containers/${CORE}.jsx" ]
  then
    sh ./app/Console/build.sh ./app/Console/templates/Container.jsx ./src/views/containers/${CORE}.jsx
  else
    echo "${green} Container : ${CORE} is exists. ${reset}";
  fi
fi

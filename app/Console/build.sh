#!/bin/bash

render_template() {
  eval "echo \"$(cat $1)\""
}

#The following line will print no of argument provided to script
#echo $#
USAGE="$0 <template> <destination>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

if [ "$#" -lt "2" ]
then
  echo "${red}${USAGE}${reset}";
else
  source=$1;
  destination=$2;

  name=${CORE:-"name"};
  name_upper=$(echo $CORE | tr 'a-z' 'A-Z');
  name_lower=$(echo $CORE | tr 'A-Z' 'a-z');
  name_pascal=$(echo $CORE | tr '[:lower:]' '[:upper:]' <<< ${CORE:0:1})${CORE:1};
  render_template $source > $destination
  echo "${green} create file${reset} ${destination}";
fi

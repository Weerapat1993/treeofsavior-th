#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run make:page <name>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;
CHECK=0;

if ! [ "$#" -lt "1" ]
then
  if [ -z "${CORE}" ]; then
    export CORE=$1;
  fi
#  directory=( ./src ./src/views ./src/views/pages ./src/views/pages/${CORE} )
#  for dir in "${directory[@]}"
#  do
#    if ! [ -d "$dir" ]
#    then
#    	mkdir ${dir}
#    fi
#  done
  name_upper=$(echo $CORE | tr 'a-z' 'A-Z');
  name_pascal=$(echo $CORE | tr '[:lower:]' '[:upper:]' <<< ${CORE:0:1})${CORE:1};

  files=( ${CORE} )
  for file in "${files[@]}"
  do
    if ! [ -e "./src/views/pages/${file}.jsx" ]
    then
      CHECK=1;
      sh ./app/Console/build.sh ./app/Console/templates/pages/index.jsx ./src/views/pages/${file}.jsx
    fi
  done
  if [ $CHECK -eq 0 ]
  then
    echo "${green} Page : ${CORE} is exists. ${reset}";
  else
    echo "\n Plaese setting config\n"
    echo "\t - ./src/core/constants.jsx \n"
    echo "\t\t ${green}${name_upper}: API_BASE_URL + '/assets/json/${CORE}.json',\n${reset}"
    echo "\t - ./src/views/routes.jsx \n"
    echo "\t\t ${red}import${reset} ${name_pascal} ${red}from${reset} './pages/${CORE}' \n"
    echo "\t\t <${red}Route${green} path${reset}='/${CORE}'${green} component${reset}={${name_pascal}} /> \n"
  fi
fi

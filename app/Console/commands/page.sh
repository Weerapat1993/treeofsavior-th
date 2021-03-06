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

  directory=( ./src ./src/views ./src/views/pages ./src/views/pages/${CORE} )
  for dir in "${directory[@]}"
  do
    if ! [ -d "$dir" ]
    then
   	  mkdir ${dir}
    fi
  done

  name_upper=$(echo $CORE | tr 'a-z' 'A-Z');
  name_pascal=$(echo $CORE | tr '[:lower:]' '[:upper:]' <<< ${CORE:0:1})${CORE:1};

  if ! [ -e "./src/views/pages/${name_pascal}/index.js" ]
  then
    CHECK=1;
    sh ./app/Console/build.sh ./app/Console/templates/pages/index.js ./src/views/pages/${name_pascal}/index.js
  fi
  if ! [ -e "./src/views/pages/${name_pascal}/${name_pascal}.jsx" ]
  then
    CHECK=1;
    sh ./app/Console/build.sh ./app/Console/templates/pages/Skill.jsx ./src/views/pages/${name_pascal}/${name_pascal}.jsx
  fi

  files=( List Item Info Modal ModalEdit Form EditForm )
  for file in "${files[@]}"
  do
    if ! [ -e "./src/views/pages/${name_pascal}/${name_pascal}${file}.jsx" ]
    then
      CHECK=1;
      sh ./app/Console/build.sh ./app/Console/templates/pages/Skill${file}.jsx ./src/views/pages/${name_pascal}/${name_pascal}${file}.jsx
    fi
  done
  if [ $CHECK -eq 0 ]
  then
    echo "${green} Page : ${name_pascal}is exists. ${reset}";
  else
    echo "\n Plaese setting config\n"
    echo "\t - ./src/views/routes.jsx \n"
    echo "\t\t ${red}import${reset} ${name_pascal} ${red}from${reset} './pages/${CORE}' \n"
    echo "\t\t <${red}Route${green} path${reset}='/${CORE}'${green} component${reset}={${name_pascal}} /> \n"
  fi
fi

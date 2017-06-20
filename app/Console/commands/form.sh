#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run make form <name>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

if ! [ "$#" -lt "1" ]
then
  if [ -z "${CORE}" ]; then
    export CORE=$1;
  fi
  name_upper=$(echo $CORE | tr 'a-z' 'A-Z');
  name_pascal=$(echo $CORE | tr '[:lower:]' '[:upper:]' <<< ${CORE:0:1})${CORE:1};

  directory=( ./src ./src/views ./src/views/forms/ ./src/core/form )
  for dir in "${directory[@]}"
  do
    if ! [ -d "$dir" ]
    then
    	mkdir ${dir}
    fi
  done

  if ! [ -e "./src/views/forms/${name_pascal}Form.jsx" ]
  then
    sh ./app/Console/build.sh ./app/Console/templates/form/Form.jsx ./src/views/forms/${name_pascal}Form.jsx
  else
    echo "${green} Form : ${CORE}Form is exists. ${reset}";
  fi

  if ! [ -e "./src/core/form/${name_pascal}Validation.js" ]
  then
    sh ./app/Console/build.sh ./app/Console/templates/form/Validation.js ./src/core/form/${CORE}Validation.js
  else
    echo "${red} Validation : ${CORE}Validation is exists. ${reset}";
  fi
fi

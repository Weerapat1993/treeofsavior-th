#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run make:core <name>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;
CHECK=0;

if ! [ "$#" -lt "1" ]
then
  if [ -z "${CORE}" ]; then
    export CORE=$1;
  fi

  name_upper=$(echo $CORE | tr 'a-z' 'A-Z');
  name_pascal=$(echo $CORE | tr '[:lower:]' '[:upper:]' <<< ${CORE:0:1})${CORE:1};

  # File Directory #
  directory=( ./src ./src/core ./src/core/${CORE} ./src/core/${CORE}/tests )
  for dir in "${directory[@]}"
  do
    if ! [ -d "$dir" ]
    then
    	mkdir ${dir}
    fi
  done

  # Files Core #
  files=( Actions ActionTypes Reducer Selector )
  for file in "${files[@]}"
  do
    if ! [ -e "./src/core/${CORE}/${CORE}${file}.js" ]
    then
      sh ./app/Console/build.sh ./app/Console/templates/core/${file}.js ./src/core/${CORE}/${CORE}${file}.js
    fi
  done

  if ! [ -e "./src/core/${CORE}/index.js" ]
  then
    CHECK=1;
    sh ./app/Console/build.sh ./app/Console/templates/core/index.js ./src/core/${CORE}/index.js
  fi

  # File Tests #
  tests=( Actions Reducer Selector )
  for test in "${tests[@]}"
  do
    if ! [ -e "./src/core/${CORE}/tests/${CORE}${test}.test.js" ]
    then
      sh ./app/Console/build.sh ./app/Console/templates/core/tests/${test}.js ./src/core/${CORE}/tests/${CORE}${test}.test.js
    fi
  done

  if ! [ -e "./src/core/${CORE}/tests/data.js" ]
  then
    sh ./app/Console/build.sh ./app/Console/templates/core/tests/data.js ./src/core/${CORE}/tests/data.js
  fi

  if [ $CHECK -eq 0 ]
  then
    echo "${green} Core Reducer : ${CORE} is exists. ${reset}";
  else
    echo "\n - Please setting config in ${green}rootReducers.js\n"
    echo "\timport { ${CORE}Reducer } from './${CORE}'\n"
    echo "\t${CORE}: ${CORE}Reducer,${reset}"
  fi
fi

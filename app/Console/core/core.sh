#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run core"
destination="./app/Console/templates/core";
source="./src/core/skill/";
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

echo "${green}This command is copy folder ${source} to [core] template ?${reset} ";
while true; do
    read -p "${green}Do you want to copy this folder?${reset} " yn
    case $yn in
        [Yy]* ) 
                if ! [ -d "$destination" ]
                then
                  mkdir $destination
                fi
                cp -R $source $destination; 
                files=( index skillActions skillActionTypes skillFunction skillReducer skillSelector )
                for file in "${files[@]}"
                do
                  if ! [ "$file" = "index" ]
                  then
                    echo "${green}create file${reset} ./app/Console/templates/core/${file}.js"
                    perl -i -pe 's/Skill/\${name_pascal}/g' ./app/Console/templates/core/${file}.js
                    perl -i -pe 's/skill/\${name}/g' ./app/Console/templates/core/${file}.js
                    perl -i -pe 's/SKILL/\${name_upper}/g' ./app/Console/templates/core/${file}.js
                  else
                    echo "${green}create file${reset} ./app/Console/templates/core/${file}.js"
                    perl -i -pe 's/Skill/\${name_pascal}/g' ./app/Console/templates/core/${file}.js
                    perl -i -pe 's/skill/\${name}/g' ./app/Console/templates/core/${file}.js
                    perl -i -pe 's/SKILL/\${name_upper}/g' ./app/Console/templates/core/${file}.js
                  fi
                done
                # tests=( Core CoreForm CoreList CoreItem )
                # for test in "${tests[@]}"
                # do
                #   echo "${green}create file${reset} ./app/Console/templates/core/test/${test}.test.js"
                #   perl -i -pe 's/Skill/\${name_pascal}/g' ./app/Console/templates/core/tests/${test}.test.js
                #   perl -i -pe 's/skill/\${name}/g' ./app/Console/templates/core/tests/${test}.test.js
                #   perl -i -pe 's/SKILL/\${name_upper}/g' ./app/Console/templates/core/tests/${test}.test.js
                #   cp ./app/Console/templates/core/tests/${test}.test.js ./app/Console/templates/core/tests/${test}.js
                #   rm ./app/Console/templates/core/tests/${test}.test.js
                # done

                # echo "\n${green}please edit file path in [core] templates \n ${reset}"
                # echo " ./app/Console/templetes/core/Core.js"
                # echo "${green}import { \${name}Actions } from '../../../core/\${name}'\n ${reset}"
                # echo " ./app/Console/templetes/core/CoreForm.js"
                # echo "${green}import { \${name}Validation } from '../../../core/form/\${name}Validation'\n ${reset}"
                break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
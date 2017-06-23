#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run core"
destination="./app/Console/templates/pages";
source="./src/views/pages/Skill/";
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

echo "${green}This command is copy folder ${source} to [pages] template ?${reset} ";
while true; do
    read -p "${green}Do you want to copy this folder?${reset} " yn
    case $yn in
        [Yy]* ) 
                if ! [ -d "$destination" ]
                then
                  mkdir $destination
                fi
                cp -R $source $destination; 
                files=( index Skill SkillForm SkillList SkillItem SkillInfo SkillModal SkillModalEdit SkillForm SkillEditForm )
                for file in "${files[@]}"
                do
                  if ! [ "$file" = "index" ]
                  then
                    echo "${green}create file${reset} ./app/Console/templates/pages/${file}.jsx"
                    perl -i -pe 's/Skill/\${name_pascal}/g' ./app/Console/templates/pages/${file}.jsx
                    perl -i -pe 's/skill/\${name}/g' ./app/Console/templates/pages/${file}.jsx
                    perl -i -pe 's/SKILL/\${name_upper}/g' ./app/Console/templates/pages/${file}.jsx
                  else
                    echo "${green}create file${reset} ./app/Console/templates/pages/${file}.js"
                    perl -i -pe 's/Skill/\${name_pascal}/g' ./app/Console/templates/pages/${file}.js
                    perl -i -pe 's/skill/\${name}/g' ./app/Console/templates/pages/${file}.js
                    perl -i -pe 's/SKILL/\${name_upper}/g' ./app/Console/templates/pages/${file}.js
                  fi
                done
                # tests=( Core CoreForm CoreList CoreItem )
                # for test in "${tests[@]}"
                # do
                #   echo "${green}create file${reset} ./app/Console/templates/pages/test/${test}.test.jsx"
                #   perl -i -pe 's/Skill/\${name_pascal}/g' ./app/Console/templates/pages/tests/${test}.test.jsx
                #   perl -i -pe 's/skill/\${name}/g' ./app/Console/templates/pages/tests/${test}.test.jsx
                #   perl -i -pe 's/SKILL/\${name_upper}/g' ./app/Console/templates/pages/tests/${test}.test.jsx
                #   cp ./app/Console/templates/pages/tests/${test}.test.jsx ./app/Console/templates/pages/tests/${test}.jsx
                #   rm ./app/Console/templates/pages/tests/${test}.test.jsx
                # done

                # echo "\n${green}please edit file path in [pages] templates \n ${reset}"
                # echo " ./app/Console/templetes/pages/Core.jsx"
                # echo "${green}import { \${name}Actions } from '../../../core/\${name}'\n ${reset}"
                # echo " ./app/Console/templetes/pages/CoreForm.jsx"
                # echo "${green}import { \${name}Validation } from '../../../core/form/\${name}Validation'\n ${reset}"
                break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
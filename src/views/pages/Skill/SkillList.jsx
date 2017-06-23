

import React from 'react'
import SkillItem from './SkillItem'

export const SkillList = ({ data, edit, deleteSkill }) => {
  return(
    <div>
      {
        data.map((item, i) => (
          <SkillItem 
            key={i} 
            data={item} 
            edit={edit}  
            deleteSkill={deleteSkill} 
          />
        ))
      }
    </div>
  )
}

export default SkillList
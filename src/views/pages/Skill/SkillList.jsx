

import React from 'react'
import SkillItem from './SkillItem'

export const SkillList = ({ data, edit, deleteSkill }) => {
  return(
    <div className='panel panel-default'>
      <div className="panel-heading bold">
        Skill List
      </div>
      <div className='panel-body'>
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
    </div>
  )
}

export default SkillList
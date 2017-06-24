

import React from 'react'
import SkillItem from './SkillItem'
import { Classes } from '../../../core/model'

export const SkillList = ({ data, edit, deleteSkill, classes }) => {
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
            Class={Classes(classes).where('id','=',item.class_id).firstOrFail()}
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
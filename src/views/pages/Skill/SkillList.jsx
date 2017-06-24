

import React from 'react'
import SkillItem from './SkillItem'
import { Classes } from '../../../core/model'
import { TitleDisplay } from '../../components'

export const SkillList = ({ data, edit, deleteSkill, classes }) => {
  return (
    <div>
      {
        (data.length) ?
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
        : <TitleDisplay title='ไม่พบข้อมูลดังกล่าว' />
      }
    </div>
  )
}

export default SkillList
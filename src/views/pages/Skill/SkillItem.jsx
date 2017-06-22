import React from 'react'


export const SkillItem = ({ data }) => {
  return(
    <div className='panel panel-default'>
      <div className="panel-body">
        {data.name}
      </div>
    </div>  
  )
}

export default SkillItem
import React from 'react'

import ClassType from './ClassType'
import classes from '../../assets/data/classes'

const classTypes = ['warrior','wizard','archer','cleric']

export const ClassList = (props) => {
  return(
    <div className='row'>
      <div className="text-center">
      { 
        classTypes.map((item, i) => (
          <ClassType key={i+1} classes={classes} classType={item} />
        ))
      }
      </div>
    </div>
  )
}

export default ClassList 
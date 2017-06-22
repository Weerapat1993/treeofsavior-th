import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import Case from 'case'

import ClassType from './ClassType'
import classes from '../../assets/data/classes'
import { Breadcrumbs, MenuHeader } from '../../components'


const classTypes = ['warrior','wizard','archer','cleric']

export const ClassList = (props) => {
  return(
    <div>
      <Breadcrumbs title='Classes' />
      <div className="text-center">
        <MenuHeader title='Classes' />
        <div className="text-center">
          <ButtonGroup>
            { 
              classTypes.map((item, i) => (
                <Button key={i}>{Case.capital(item)}</Button>
              ))
            }
          </ButtonGroup>
        </div>
        <br/>
        <div className="row">
          { 
            classTypes.map((item, i) => (
              <ClassType key={i+1} classes={classes} classType={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ClassList 
import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import Case from 'case'

import ClassList from './ClassList'
import ClassInfo from './ClassInfo'
import MenuHeader from '../../components/Layouts/MenuHeader'

const classTypes = ['warrior','wizard','archer','cleric']

export const Class = (props) => {
  return(
    <div>
      <MenuHeader title='Classes' />
      <p className="text-center">
        <ButtonGroup>
          { 
            classTypes.map((item, i) => (
              <Button key={i}>{Case.capital(item)}</Button>
            ))
          }
        </ButtonGroup>
      </p>
      <Switch>
        <Route exact path='/classes' component={ClassList}/>
        <Route path='/classes/show/:id' component={ClassInfo}/>
      </Switch>

    </div>  
    
  )
}

export default Class 
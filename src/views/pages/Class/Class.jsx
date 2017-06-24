import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ClassList from './ClassList'
import ClassInfo from './ClassInfo'

export const Class = (props) => {
  return(
    <Switch>
      <Route exact path='/classes' component={ClassList}/>
      <Route path='/classes/type/:class_type' component={ClassList}/>
      <Route path='/classes/show/:id' component={ClassInfo}/>
    </Switch>
  )
}

export default Class 
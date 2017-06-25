import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { url } from '../../../core/constants'
import ClassList from './ClassList'
import ClassInfo from './ClassInfo'

export const Class = (props) => {
  return(
    <Switch>
      <Route exact path={url('/classes')} component={ClassList}/>
      <Route path={url('/classes/type/:class_type')} component={ClassList}/>
      <Route path={url('/classes/show/:id')} component={ClassInfo}/>
    </Switch>
  )
}

export default Class 
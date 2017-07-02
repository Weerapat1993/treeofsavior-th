import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { url } from '../../../core/constants' 
import SkillSimulatorContainer from './SkillSimulatorContainer'
import SkillSimulatorBuild from './SkillSimulatorBuild'

const SkillSimulator = (props) => {
  return (
    <Switch>
      <Route exact path={url('/skill-simulator')} component={SkillSimulatorContainer}/>
      <Route path={url('/skill-simulator/type/:class_type')} component={SkillSimulatorBuild}/>
    </Switch>
  )
}

export default SkillSimulator
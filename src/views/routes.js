import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import { url } from '../core/constants'
import {
  Home,
  About,
  Login,
  Register,
  Gallery,
  Class,
  Skill,
  Attribute,
  Elements,
  SkillSimulator,
} from './pages'

const Routes = () => (
  <Router>
    <div>
    <Layouts className='container'>
      <Route exact path={url('/')} component={Home}/>
      <Route path={url('/about')} component={About}/>
      <Route path={url('/elements')} component={Elements}/>
      <Route path={url('/gallery')} component={Gallery}/>
      <Route path={url('/classes')} component={Class}/>
      <Route path={url('/skills')} component={Skill}/>
      <Route path={url('/attributes')} component={Attribute}/>
      <Route path={url('/login')} component={Login}/>
      <Route path={url('/register')} component={Register}/>
      <Route path={url('/skill-simulator')} component={SkillSimulator}/>
    </Layouts>
    </div>
  </Router> 
)

export default Routes
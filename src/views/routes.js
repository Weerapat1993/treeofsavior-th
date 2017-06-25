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
} from './pages'

const Routes = () => (
  <Router>
    <Layouts className='container'>
      <Route exact path="/" component={Home}/>
      <Route exact path={url('/')} component={Home}/>
      <Route path={url('/about')} component={About}/>
      <Route path={url('/gallery')} component={Gallery}/>
      <Route path={url('/classes')} component={Class}/>
      <Route path={url('/skills')} component={Skill}/>
      <Route path={url('/attributes')} component={Attribute}/>
      <Route path={url('/login')} component={Login}/>
      <Route path={url('/register')} component={Register}/>
    </Layouts>
  </Router> 
)

export default Routes
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
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
      <Route path="/about" component={About}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/classes" component={Class}/>
      <Route path="/skills" component={Skill}/>
      <Route path="/attributes" component={Attribute}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Layouts>
  </Router> 
)

export default Routes
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import {
  Home,
  About,
  Login,
  Register,
} from './pages'

const Routes = () => (
  <Router>
    <Layouts>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Layouts>
  </Router> 
)

export default Routes
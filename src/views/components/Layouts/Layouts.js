import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import logo from './logo.svg';
import './Layout.scss';

export const Layout = (props) => {
  return (
    <div> 
    <Navbar inverse collapseOnSelect staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">TOS-TH</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>
          <LinkContainer to="/register">
            <NavItem>Register</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container-fluid">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout 
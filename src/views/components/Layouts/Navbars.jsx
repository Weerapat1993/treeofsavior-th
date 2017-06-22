import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

export const Navbars = (props) => {
  return (
    <Navbar inverse collapseOnSelect staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Treeofsavior-TH</Link>
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
          <LinkContainer to="/gallery">
            <NavItem>Gallery</NavItem>
          </LinkContainer>
          <NavDropdown title="Database" id="basic-nav-dropdown">
            <LinkContainer to="/classes">
              <MenuItem>Classes</MenuItem>
            </LinkContainer>
            <LinkContainer to="/skills">
              <MenuItem>Skills</MenuItem>
            </LinkContainer>
            <LinkContainer to="/attributes">
              <MenuItem>Attribute</MenuItem>
            </LinkContainer>
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
  )
}

export default Navbars 
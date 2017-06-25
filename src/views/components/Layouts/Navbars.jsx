import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { url } from '../../../core/constants'

export const Navbars = (props) => {
  return (
    <Navbar inverse collapseOnSelect staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={url('/')}>Treeofsavior-TH</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to={url('/')}>
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to={url('/about')}>
            <NavItem>About</NavItem>
          </LinkContainer>
          <NavDropdown title="Database" id="basic-nav-dropdown">
            <LinkContainer to={url('/classes')}>
              <MenuItem>Classes</MenuItem>
            </LinkContainer>
            <LinkContainer to={url('/skills')}>
              <MenuItem>Skills</MenuItem>
            </LinkContainer>
            <LinkContainer to={url('/attributes')}>
              <MenuItem>Attribute</MenuItem>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to={url('/gallery')}>
            <NavItem>Gallery</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to={url('/login')}>
            <NavItem>Login</NavItem>
          </LinkContainer>
          <LinkContainer to={url('/register')}>
            <NavItem>Register</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbars 
import React from 'react'
import { Navbar, FormControl, InputGroup } from 'react-bootstrap'
import ScrollToTop from 'react-scroll-up'

export const NavBarSearch = ({ placeholder, handleKey }) => {
  return (
    <ScrollToTop topPosition={250} showUnder={180} style={{ zIndex: 10000 }}>
      <Navbar inverse fixedTop>
        <InputGroup style={{ paddingTop: 7 }}>
          <InputGroup.Addon>
            <i className="fa fa-search"></i>
          </InputGroup.Addon>
          <FormControl 
            type='text' 
            placeholder={placeholder} 
            onKeyUp={(e) => handleKey(e)}
          />
        </InputGroup>
      </Navbar>
    </ScrollToTop>
  )
}

export default NavBarSearch 
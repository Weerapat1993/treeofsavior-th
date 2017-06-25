import React from 'react'
import { Navbar, FormControl, InputGroup } from 'react-bootstrap'
import ScrollToTop from 'react-scroll-up'

const styles = {
  searchMenu: {
    zIndex: 10000,
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s'
  }
}

export const NavBarSearch = ({ placeholder, handleKey }) => {
  return (
    <ScrollToTop topPosition={200} showUnder={180} style={styles.searchMenu}>
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
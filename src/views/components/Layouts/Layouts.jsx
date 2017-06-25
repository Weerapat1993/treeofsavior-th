import React, { Component } from 'react'
import ScrollToTop from 'react-scroll-up'
import Navbars from './Navbars'


const styles = {
  animationScroll: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    cursor: 'pointer',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s'
  }
}

class Layout extends Component {
  onClick() {
    window.scrollTo(0, 0)
  }
  render() {
    const { className, children } = this.props
    return (
      <div> 
        <Navbars />
        <div className={className || 'container-fluid'}>
          {children}
        </div>
        <ScrollToTop duration={1000} showUnder={160} style={styles.animationScroll}>
          <i className="fa fa-4x fa-arrow-circle-o-up scroll-up"></i>
        </ScrollToTop>
      </div>
    )
  }
}

export default Layout 
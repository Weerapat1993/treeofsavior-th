import React from 'react'
import Navbars from './Navbars'

export const Layout = ({ className, children }) => {
  return (
    <div> 
      <Navbars />
      <div className={className || 'container-fluid'}>
        {children}
      </div>
    </div>
  )
}

export default Layout 
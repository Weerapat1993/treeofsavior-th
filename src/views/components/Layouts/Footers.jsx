import React from 'react'
import { Footer, FooterSection, FooterLinkList } from 'react-mdl'
import { RELEASE_VERSION } from '../../../config/version'
 
export const Footers = () => {
  return (
    <Footer size="mini">
      <FooterSection type="right" logo="Tree of Savior - TH">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
            <a>v{RELEASE_VERSION}</a>
        </FooterLinkList>
      </FooterSection>
    </Footer>
  )
}

export default Footers
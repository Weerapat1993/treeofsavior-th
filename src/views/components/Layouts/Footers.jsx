import React from 'react'
import { Footer, FooterSection, FooterLinkList } from 'react-mdl'

export const Footers = () => {
  return (
    <Footer size="mini">
      <FooterSection type="right" logo="Tree of Savior - TH">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
      </FooterSection>
    </Footer>
  )
}

export default Footers
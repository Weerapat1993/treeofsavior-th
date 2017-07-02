import React, { Component } from 'react'
import { 
  Layout,
  Header,
  Drawer,
  Navigation,
  Content,
  HeaderRow,
} from 'react-mdl'
import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-up'
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';

import Footers from './Footers'
import { url } from '../../../core/constants'


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

// see https://github.com/google/material-design-lite/blob/master/src/palette/_palette.scss
// for the color and level possibilities

export const getColorClass = (color, level) => {
    const lvlClass = (level) ? `-${level}` : '';
    return `mdl-color--${color}${lvlClass}`;
}

export const getTextColorClass = (color, level) => {
    const lvlClass = (level) ? `-${level}` : '';
    return `mdl-color-text--${color}${lvlClass}`;
}

class Layouts extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }

  linkTo(tabId) {
    this.setState({ tabId })
  }

  onClick() {
    window.scrollTo(0, 0)
  }
  render() {
    const { children, title } = this.props
    return (
      <DocumentTitle title={title ? title : 'Tree of Savior Fansite Thailand'}>
        <Layout fixedHeader>
          <Header waterfall className={classNames(getColorClass('green', 800))}>
            <HeaderRow title="Treeofsavior-TH" />
            <HeaderRow>
              <Navigation>
                <Link style={{ textDecoration: 'none' }} to={url('/classes/type/Swordsman')}>Swordsman</Link>
                <Link style={{ textDecoration: 'none' }} to={url('/classes/type/Wizard')}>Wizard</Link>
                <Link style={{ textDecoration: 'none' }} to={url('/classes/type/Archer')}>Archer</Link>
                <Link style={{ textDecoration: 'none' }} to={url('/classes/type/Cleric')}>Cleric</Link>
              </Navigation>
            </HeaderRow>
          </Header>          
          <Drawer title="Menus">
            <Navigation>
              <Link style={{ textDecoration: 'none' }} to={url('/')}><i className="material-icons">home</i> &nbsp; Home</Link>
              <Link style={{ textDecoration: 'none' }} to={url('/about')}><i className="material-icons">search</i> &nbsp; About</Link>
              <Link style={{ textDecoration: 'none' }} to={url('/classes')}><i className="material-icons">class</i> &nbsp; Classes</Link>
              <Link style={{ textDecoration: 'none' }} to={url('/elements')}><i className="material-icons">ac_unit</i> &nbsp; Elements</Link>
              <Link style={{ textDecoration: 'none' }} to={url('/skill-simulator')}><i className="material-icons">class</i> &nbsp; Skill Simulator</Link>
              {/*<Link style={{ textDecoration: 'none' }} to={url('/skills')}><i className="material-icons">stars</i> &nbsp; Skills</Link>
              <Link style={{ textDecoration: 'none' }} to={url('/attributes')}><i className="material-icons">info</i> &nbsp; Attribute</Link>*/}
            </Navigation>
          </Drawer>
          <Content>            
            {children}
            <Footers />
            <ScrollToTop duration={1000} showUnder={160} style={styles.animationScroll}>
              <i className="fa fa-4x fa-arrow-circle-o-up scroll-up"></i>
            </ScrollToTop>
          </Content>
        </Layout>
      </DocumentTitle>
    )
  }
}

export default Layouts
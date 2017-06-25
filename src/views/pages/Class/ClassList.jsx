import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { classActions, getNormalClass } from '../../../core/class'
import { url } from '../../../core/constants'
import Case from 'case'

import ClassType from './ClassType'
import { Breadcrumbs, MenuHeader, Loading, TitleDisplay } from '../../components'

const classTypes = ['Swordsman','Wizard','Archer','Cleric']

export class ClassList extends Component {

  componentDidMount() {
    const { classActions, classes } = this.props
    if(!classes.length) {
      classActions.fetchClass()
    }
  }

  render() {
    const { classes, loading } = this.props
    return (
      <div>
        <Breadcrumbs title='Classes' />
        <div className="text-center">
          <MenuHeader title='Classes' />
          <div className="text-center">
            <ButtonGroup>
              <IndexLinkContainer to={url(`/classes`)}>
                <Button>All</Button>
              </IndexLinkContainer>
              { 
                classTypes.map((item, i) => (
                  <LinkContainer to={url(`/classes/type/${item}`)} key={i}>
                    <Button>{Case.capital(item)}</Button>
                  </LinkContainer>
                ))
              }
            </ButtonGroup>
          </div>
          <br/>
          <Loading isLoading={loading}>
            <div className="row">
              { 
                (classes.length) ?
                classTypes.map((item, i) => (
                  <ClassType key={i+1} classes={classes} classType={item} selector={this.props.match.params.class_type} />
                ))
                : <TitleDisplay title='ไม่พบข้อมูลดังกล่าว' />
              }
            </div>
          </Loading>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  classes: getNormalClass(state, ownProps),
  loading: state.class.loading,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  classActions: bindActionCreators(classActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassList);
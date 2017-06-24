import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { classActions, getNormalClass } from '../../../core/class'
import Case from 'case'

import ClassType from './ClassType'
import { Breadcrumbs, MenuHeader } from '../../components'

const classTypes = ['Swordsman','Wizard','Archer','Cleric']

export class ClassList extends Component {

  componentDidMount() {
    this.props.classActions.fetchClass()
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Breadcrumbs title='Classes' />
        <div className="text-center">
          <MenuHeader title='Classes' />
          <div className="text-center">
            <ButtonGroup>
              { 
                classTypes.map((item, i) => (
                  <Button key={i}>{Case.capital(item)}</Button>
                ))
              }
            </ButtonGroup>
          </div>
          <br/>
          <div className="row">
            { 
              classTypes.map((item, i) => (
                <ClassType key={i+1} classes={classes} classType={item} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  classes: getNormalClass(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  classActions: bindActionCreators(classActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassList);
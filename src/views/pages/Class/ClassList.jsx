import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Cell } from 'react-mdl'

import { classActions, getNormalClass } from '../../../core/class'
import ClassType from './ClassType'
import { Breadcrumbs, Loading, TitleDisplay } from '../../components'

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
      <Grid>
        <Cell col={2} hidePhone hideTablet />
        <Cell col={8}>  
          <Breadcrumbs title='Classes' />
          <div className="text-center">
            <Loading isLoading={loading}>
              <Grid>
                { 
                  (classes.length) ?
                  classTypes.map((item, i) => (
                    <ClassType key={i+1} classes={classes} classType={item} selector={this.props.match.params.class_type} />
                  ))
                  : <TitleDisplay title='ไม่พบข้อมูลดังกล่าว' />
                }
              </Grid>
            </Loading>
            <br/>
            <br/>
          </div>
        </Cell>
      </Grid>
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Cell } from 'react-mdl'

import { skillActions } from '../../../core/skill'
import { classActions } from '../../../core/class'
import { attributeActions } from '../../../core/attribute'
import { Loading } from '../../components'

import MenuClass from '../../pages/Home/MenuClass'


class SkillSimulatorContainer extends Component {
  componentDidMount() {
    const { classActions, skillActions, attributeActions, classes, skills, attributes } = this.props
    if(!classes.length) {
      classActions.fetchClass()
    }
    if(!skills.length) {
      skillActions.fetchSkill()
    }
    if(!attributes.length) {
      attributeActions.fetchAttribute()
    }
  }

  render() {
    const { skillLoading, attributeLoading } = this.props
    return (
      <Loading isLoading={skillLoading || attributeLoading}>
        <Grid>
          <Cell col={2} hidePhone hideTablet />
          <Cell col={8}>
            <h1 className="text-center">Skill Simulator</h1>
            <MenuClass title='GET STARTED' path={'/skill-simulator/type/'} />
          </Cell>
        </Grid>
      </Loading>
    )
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  skills: state.skill.data,
  classes: state.class.data,
  attributes: state.attribute.data,
  skillLoading: state.skill.isFetching,
  skillError: state.skill.error,
  attributeLoading: state.attribute.isFetching,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  skillActions: bindActionCreators(skillActions, dispatch),
  classActions: bindActionCreators(classActions, dispatch),
  attributeActions: bindActionCreators(attributeActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillSimulatorContainer);
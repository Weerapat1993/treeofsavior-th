import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Cell } from 'react-mdl'

import { skillActions } from '../../../core/skill'
import { classActions } from '../../../core/class'
import { attributeActions } from '../../../core/attribute'
import { Loading } from '../../components'
import { Classes } from '../../../core/model'

import SkillSimulatorTable from './SkillSimulatorTable'
import SkillSimulatorSkill from './SkillSimulatorSkill'
import SkillSimulatorRank from './SkillSimulatorRank'


class SkillSimulatorBuild extends Component {
  constructor() {
    super()

    this.state = {
      build: []
    }

    this.addClass = this.addClass.bind(this)
    this.removeClass = this.removeClass.bind(this)
  }
  
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

  addClass(item) {
    const { build } = this.state
    const count = Classes(build).where('name','=',item.name).count()
    if(count < 3 && build.length < 8) {
      this.setState({
        build: [
          ...build,
          item
        ]
      })
    }
  }

  removeClass() {
    const { build } = this.state
    this.setState({
      build: build.slice(0, build.length - 1)
    })
  }

  render() {
    const { skillLoading, attributeLoading, classes, skills, attributes } = this.props
    const { build } = this.state
    const classType = this.props.match.params.class_type
    return (
      <Loading isLoading={skillLoading || attributeLoading}>
        <Grid>
          <Cell col={2} hidePhone hideTablet />
          <Cell col={8} tablet={12} phone={12}>
            <h1 className="text-center">Skill Simulator Build</h1>
            <SkillSimulatorTable build={build} onRemove={this.removeClass} />
            <SkillSimulatorSkill build={build} skills={skills} attributes={attributes} />
            <SkillSimulatorRank build={build} classes={classes} classType={classType} addClass={this.addClass} />
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
)(SkillSimulatorBuild);
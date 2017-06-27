import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { skillActions, skillSelector } from '../../../core/skill'
import { classActions } from '../../../core/class'
import { attributeActions } from '../../../core/attribute'
import SkillList from './SkillList'
import { Breadcrumbs, MenuHeader, Loading, SearchBox } from '../../components'

class Skill extends Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
    }
  }

  searchSkill(value) {
    this.setState({
      keyword: value
    })
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

  render() {
    const { skills, classes, attributes, skillLoading, attributeLoading, skillError } = this.props
    const skillFilter = skillSelector(skills, this.state.keyword)
    return (
      <div>
        <Breadcrumbs title='Skills' />
        <MenuHeader title='Skills' />
        <SearchBox placeholder='Search Skill' onKey={this.searchSkill.bind(this)} />
        <br/>
        <br/>
        <Loading isLoading={skillLoading || attributeLoading}>
          <SkillList 
            data={skillFilter} 
            classes={classes}
            attributes={attributes}
            error={skillError}
          />
        </Loading>
      </div>  
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
  attributeLoading: state.attribute.loading,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  skillActions: bindActionCreators(skillActions, dispatch),
  classActions: bindActionCreators(classActions, dispatch),
  attributeActions: bindActionCreators(attributeActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);

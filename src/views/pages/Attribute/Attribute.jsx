import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { attributeActions, attributeSelector } from '../../../core/attribute'
import { classActions } from '../../../core/class'
import { skillActions } from '../../../core/skill'
import AttributeList from './AttributeList'
import { Breadcrumbs, MenuHeader, Loading, SearchBox } from '../../components'

class Attribute extends Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
    }
  }

  searchAttribute(value) {
    this.setState({
      keyword: value
    })
  }

  componentDidMount() {
    const { classActions, attributeActions, skillActions, classes, attributes, skills } = this.props
    if(!classes.length) {
      classActions.fetchClass()
    }
    if(!attributes.length) {
      attributeActions.fetchAttribute()
    }
    if(!skills.length) {
      skillActions.fetchSkill()
    }

  }

  render() {
    const { attributes, classes, skills, attributeLoading, classLoading, skillLoading } = this.props
    const attributeFilter = attributeSelector(attributes, this.state.keyword)
    return (
      <div>
        <Breadcrumbs title='Attributes' />
        <MenuHeader title='Attributes' />
        <SearchBox placeholder='Search Attribute' onKey={this.searchAttribute.bind(this)} />
        <br/>
        <br/>
        <Loading isLoading={attributeLoading || classLoading || skillLoading}>
          <AttributeList 
            data={attributeFilter} 
            classes={classes}
            skills={skills}
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
  attributes: state.attribute.data,
  classes: state.class.data,
  skills: state.skill.data,
  attributeLoading: state.attribute.isFetching,
  skillLoading: state.skill.isFetching,
  classLoading: state.class.isFetching,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  attributeActions: bindActionCreators(attributeActions, dispatch),
  classActions: bindActionCreators(classActions, dispatch),
  skillActions: bindActionCreators(skillActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute);

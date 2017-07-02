import React, { Component } from 'react'
import Case from 'case'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Cell } from 'react-mdl'

import { classActions, getClassInfo, getClassSkill, getClassAttribute } from '../../../core/class'
import { skillActions } from '../../../core/skill'
import { attributeActions } from '../../../core/attribute'
import { Breadcrumbs, Loading } from '../../components'
import SkillList from '../Skill/SkillList'
import { noImage } from '../../../utils'
import { asset } from '../../../core/constants'

const colorBtn = (rank) => {
  switch(rank) {
    case 1: return 'btn-danger'
    case 2: return 'btn-info'
    case 3: return 'btn-primary'
    case 4: return 'btn-warning'
    case 5: return 'btn-success'
    case 6: return 'btn-danger'
    case 7: return 'btn-info'
    case 8: return 'btn-primary'
    default: return 'btn-default'
  }
}

class ClassInfo extends Component {
  componentDidMount() {
    const { classActions, skillActions, attributeActions, Class, skills, attributes } = this.props
    if(Class === undefined) {
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
    const { Class, skills, attributes, skillLoading, attributeLoading } = this.props
    const path = [
      {
        url: '/classes',
        name: 'Classes'
      }
    ]
    return (
      <Grid>
        <Cell col={2} hideTablet hidePhone />
        {
          Class &&
          <Cell col={8}>
            <Breadcrumbs path={path} title={Class.name} />
            <div>
              <table className='text-center' width='100%'>
                <tbody>
                  <tr>
                    <td width={120}>
                      <img src={asset(`/images/icon-class/${Case.snake(Class.name)}.png`)} alt=""/>
                      <br/>
                      <a className={`btn ${colorBtn(Class.rank)} btn-xs`}>Rank {Class.rank}</a> 
                      <br/>
                      <div>
                        <b>{Class.name}</b>
                      </div>
                    </td>
                    <td className='text-right'>
                      <img onError={noImage} src={asset(`/images/Classes/${Class.img_url}.gif`)} style={{ height: 180 }} alt='' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Loading isLoading={skillLoading || attributeLoading}>
              <SkillList 
                data={skills} 
                classes={[Class]}
                attributes={attributes}
              />
            </Loading>
          </Cell>
        }
      </Grid>
    )
  }
 
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  Class: getClassInfo(state, ownProps),
  skills: getClassSkill(state, ownProps),
  attributes: getClassAttribute(state, ownProps),
  skillLoading: state.skill.loading,
  attributeLoading: state.attribute.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  classActions: bindActionCreators(classActions, dispatch),
  skillActions: bindActionCreators(skillActions, dispatch),
  attributeActions: bindActionCreators(attributeActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassInfo);
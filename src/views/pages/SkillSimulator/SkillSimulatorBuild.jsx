import React, { Component } from 'react'
import Case from 'case'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Cell, Card, CardTitle, CardActions } from 'react-mdl'

import { skillActions } from '../../../core/skill'
import { classActions } from '../../../core/class'
import { attributeActions } from '../../../core/attribute'
import { Loading } from '../../components'
import { Classes } from '../../../core/model'
import { asset } from '../../../core/constants'
import { noImage } from '../../../utils'

import MenuClass from '../../pages/Home/MenuClass'


class SkillSimulatorBuild extends Component {
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
    const { skillLoading, attributeLoading, attributes, skills, classes } = this.props
    const classType = this.props.match.params.class_type
    const Ranks = [1,2,3,4,5,6,7,8]
    return (
      <Loading isLoading={skillLoading || attributeLoading}>
        <Grid>
          <Cell col={2} hidePhone hideTablet />
          <Cell col={8} tablet={12} phone={12}>
            <h1 className="text-center">Skill Simulator Build</h1>
            <MenuClass title='GET STARTED' path={'/skill-simulator/type/'} />
            <Grid className='text-center'>
            {
              Ranks.map((rank, i) => (
                <Cell col={3} tablet={4} phone={6} key={i}>
                  <Card shadow={0} style={{width: '100%', height: 200, margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: '#46B6AC', justifyContent: 'center'}}>
                      {
                        Classes(classes).where('class_type','=', classType).where('rank','=', rank).get().map((item, j) => (
                          <img key={j} onError={noImage} src={asset(`/images/icon-class/${Case.snake(item.name)}.png`)} style={{ width: 75, height: 75 }} alt=""/>
                        ))
                      }
                    </CardTitle>
                    <CardActions className='text-center bold' border>
                      {`Rank ${rank}`}
                    </CardActions>
                  </Card>
                </Cell>
              ))
            }
            </Grid>
            <div className="table-responsive">
              <table className='table table-bordered text-center bg-white'>
                <tbody>
                  <tr>
                    {
                      Ranks.map((rank, i) => (
                        <td>
                          <img key={i} onError={noImage} src={asset(`/images/icon-class/${Case.snake(classType)}.png`)} style={{ width: 75, height: 75 }} alt=""/>
                          <br/>
                          {classType}
                        </td>
                      ))
                    }
                  </tr>
                </tbody>
              </table>
            </div>
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
import React, { Component } from 'react'
import Case from 'case'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { classActions, getClassInfo, getClassSkill } from '../../../core/class'
import { skillActions } from '../../../core/skill'
import { Breadcrumbs } from '../../components'
import SkillClass from '../Skill/SkillClass'
import { noImage } from '../../../utils'

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
    const { classActions, skillActions, Class, skills } = this.props
    if(Class === undefined) {
      classActions.fetchClass()
    }
    if(!skills.length) {
      skillActions.fetchSkill()
    }
  }

  render() {
    const { Class, skills, skillLoading } = this.props
    const path = [
      {
        url: '/classes',
        name: 'Classes'
      }
    ]
    return (
      <div>
        {
          Class &&
          <div>
            <Breadcrumbs path={path} title={Class.name} />
            <div className='panel panel-default'>
              <div className="panel-body">
                <div className='row'>
                  <div className="col-md-2 col-sm-3 text-center">
                    <div>
                      <Link to={`/classes/show/${Class.id}`}>
                        <img src={`http://treeofsavior-th.com/images/icon-class/${Case.snake(Class.name)}.png`} alt=""/>
                      </Link>
                      <br/>
                      <a className={`btn ${colorBtn(Class.rank)} btn-xs`}>Rank {Class.rank}</a> 
                    </div>
                    <br/>
                    <div>
                      <b>{Class.name}</b>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6">
                    Test
                  </div>
                  <div className="col-md-2 col-sm-3 text-center">
                    <Link to={`/classes/show/${Class.id}`}>
                      <img onError={noImage} src={`http://treeofsavior-th.com/images/Classes/${Class.img_url}.gif`} style={{ height: 180 }} alt='' />
                    </Link>
                  </div>
                </div>  
              </div>
            </div>
            <SkillClass skills={skills} loading={skillLoading} classes={[Class]} />
          </div>
        }
      </div>
    )
  }
 
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  Class: getClassInfo(state, ownProps),
  skills: getClassSkill(state, ownProps),
  skillLoading: state.skill.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  classActions: bindActionCreators(classActions, dispatch),
  skillActions: bindActionCreators(skillActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassInfo);
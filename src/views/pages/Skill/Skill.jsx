import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { skillActions } from '../../../core/skill'
import SkillModal from './SkillModal'
import SkillItem from './SkillItem'
import { Breadcrumbs, MenuHeader } from '../../components'

class Skill extends Component {
  constructor() {
    super()

    this.state = {
      createSkill: {},
      showModal: false
    }
  }

  // componentDidMount() {
  //   console.clear();
    
  //   this.props.skillActions.fetchSkill()
  // }

  createSkill(value, dispatch, props) {
    let data = {
      id: new Date().getTime(),
      name: value.name,
      url: value.url
    }
    this.props.skillActions.createSkill(data)
    this.setState({ showModal: false });
  }

  updateSkill(data) {
    this.props.skillActions.updateSkill(data)
  }

  deleteSkill(key) {
    this.props.skillActions.deleteSkill(key)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const { skills } = this.props
    const data = skills.map((item, i) => (
      <SkillItem key={i} data={item} />
    ))
    return (
      <div>
        <Breadcrumbs title='Skills' />
        <MenuHeader title='Skills' />

        <div className="text-right">
          <SkillModal 
            data={this.state.createSkill}
            handleSubmit={this.createSkill.bind(this)} 
            open={this.open.bind(this)} 
            close={this.close.bind(this)}
            showModal={this.state.showModal}
          />
        </div>
        <hr/>
        <ul>
          {data}
        </ul>
      </div>  
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  skills: state.skill.data,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  skillActions: bindActionCreators(skillActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);

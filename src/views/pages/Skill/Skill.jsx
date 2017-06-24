import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { skillActions, skillSelector } from '../../../core/skill'
import SkillModal from './SkillModal'
import SkillModalEdit from './SkillModalEdit'
import SkillList from './SkillList'
import SkillSearch from './SkillSearch'
import { Breadcrumbs, MenuHeader } from '../../components'

class Skill extends Component {
  constructor() {
    super()

    this.state = {
      createSkill: {},
      updateSkill: {},
      loadSkill: {},
      showModal: false,
      showModalEdit: false,
      keyword: '',
    }
  }

  searchSkill(value) {
    this.setState({
      keyword: value
    })
    console.log(this.state.keyword)
  }

  componentDidMount() {
    this.props.skillActions.fetchSkill()
  }

  createSkill(value, dispatch, props) {
    let data = {
      id: new Date().getTime(),
      name: value.name,
      description: value.description,
    }
    this.props.skillActions.createSkill(data)
    this.setState({ showModal: false });
  }

  updateSkill(data) {
    console.log('Update Data', data)
    this.props.skillActions.updateSkill(data)
    this.setState({ showModalEdit: false });
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

  editOpen(data) {
    this.setState({ 
      showModalEdit: true,
      loadSkill: data,
    });

    console.log(this.state.loadSkill)
  }

  editClose() {
    this.setState({ 
      showModalEdit: false,
      loadSkill: {},
    });
  }

  render() {
    const { skills, classes } = this.props
    const skillFilter = skillSelector(skills, this.state.keyword)
    return (
      <div>
        <Breadcrumbs title='Skills' />
        <MenuHeader title='Skills' />

        <div className='text-right'>
          <SkillModal
            data={this.state.createSkill}
            handleSubmit={this.createSkill.bind(this)} 
            open={this.open.bind(this)} 
            close={this.close.bind(this)}
            showModal={this.state.showModal}
          />
        </div>
          <SkillModalEdit
            data={this.state.updateSkill}
            handleSubmit={this.updateSkill.bind(this)} 
            load={this.state.loadSkill}
            open={this.editOpen.bind(this)} 
            close={this.editClose.bind(this)}
            showModal={this.state.showModalEdit}
          />
        <br/>
        <br/>
        <SkillSearch onKey={this.searchSkill.bind(this)} />
        <br/>
        <br/>
        <SkillList 
          data={skillFilter} 
          classes={classes}
          edit={this.editOpen.bind(this)}
          deleteSkill={this.deleteSkill.bind(this)} 
        />
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
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  skillActions: bindActionCreators(skillActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);

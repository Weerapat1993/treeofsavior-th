

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { skillActions } from '../../../core/skill'
import SkillModal from './SkillModal'
import SkillModalEdit from './SkillModalEdit'
import SkillModalVideo from './SkillModalVideo'
import SkillItem from './SkillItem'
import { Classes, Attribute } from '../../../core/model'
import { TitleDisplay } from '../../components'

class SkillList extends Component {
  constructor() {
    super()

    this.state = {
      createSkill: {},
      updateSkill: {},
      loadSkill: {},
      showModal: false,
      showModalEdit: false,
      showModalVideo: false,
      keyword: '',
    }
  }

  searchSkill(value) {
    this.setState({
      keyword: value
    })
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

  videoClose() {
    this.setState({ 
      showModalVideo: false,
      loadSkill: {},
    });
  }

  videoOpen(data) {
    this.setState({ 
      showModalVideo: true,
      loadSkill: data,
    });
  }

  editOpen(data) {
    this.setState({ 
      showModalEdit: true,
      loadSkill: data,
    });
  }

  editClose() {
    this.setState({ 
      showModalEdit: false,
      loadSkill: {},
    });
  }

  render() {
    const { data, classes, attributes } = this.props
    return (
      <div style={{ minHeight: 1000 }}>
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
        <SkillModalVideo
          data={this.state.updateSkill}
          load={this.state.loadSkill}
          open={this.videoOpen.bind(this)} 
          close={this.videoClose.bind(this)}
          showModal={this.state.showModalVideo}
        />
        <br/>
        <br/>
        {
          (data.length) ?
          <div className='panel panel-default'>
            <div className="panel-heading bold">
              Skill List
            </div>
            <div className='panel-body'>
            { 
              data.map((item, i) => (
                <SkillItem 
                  key={i} 
                  Class={Classes(classes).where('id','=',item.class_id).firstOrFail()}
                  attributes={Attribute(attributes).where('skill_id','=',item.id).get()}
                  data={item} 
                  edit={this.editOpen.bind(this)}  
                  video={this.videoOpen.bind(this)}
                  deleteSkill={this.deleteSkill.bind(this)} 
                />
              ))
            }
            </div>
          </div>
          : <TitleDisplay title='ไม่พบข้อมูลดังกล่าว' />
        }
      </div>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  skillActions: bindActionCreators(skillActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillList);
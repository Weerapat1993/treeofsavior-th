

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { attributeActions } from '../../../core/attribute'
import AttributeModal from './AttributeModal'
import AttributeModalEdit from './AttributeModalEdit'
import AttributeItem from './AttributeItem'
import { Classes } from '../../../core/model'
import { TitleDisplay } from '../../components'

class AttributeList extends Component {
  constructor() {
    super()

    this.state = {
      createAttribute: {},
      updateAttribute: {},
      loadAttribute: {},
      showModal: false,
      showModalEdit: false,
      keyword: '',
    }
  }

  searchAttribute(value) {
    this.setState({
      keyword: value
    })
  }

  createAttribute(value, dispatch, props) {
    let data = {
      id: new Date().getTime(),
      name: value.name,
      description: value.description,
    }
    this.props.attributeActions.createAttribute(data)
    this.setState({ showModal: false });
  }

  updateAttribute(data) {
    this.props.attributeActions.updateAttribute(data)
    this.setState({ showModalEdit: false });
  }

  deleteAttribute(key) {
    this.props.attributeActions.deleteAttribute(key)
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
      loadAttribute: data,
    });
  }

  editClose() {
    this.setState({ 
      showModalEdit: false,
      loadAttribute: {},
    });
  }

  render() {
    const { data, classes } = this.props
    return (
      <div style={{ minHeight: 1000 }}>
        <div className='text-right'>
          <AttributeModal
            data={this.state.createAttribute}
            handleSubmit={this.createAttribute.bind(this)} 
            open={this.open.bind(this)} 
            close={this.close.bind(this)}
            showModal={this.state.showModal}
          />
        </div>
        <AttributeModalEdit
          data={this.state.updateAttribute}
          handleSubmit={this.updateAttribute.bind(this)} 
          load={this.state.loadAttribute}
          open={this.editOpen.bind(this)} 
          close={this.editClose.bind(this)}
          showModal={this.state.showModalEdit}
        />
        <br/>
        <br/>
        {
          (data.length) ?
          <div className='panel panel-default'>
            <div className="panel-heading bold">
              Skill Attribute List
            </div>
            <div className='panel-body'>
            { 
              data.map((item, i) => (
                <AttributeItem 
                  key={i} 
                  Class={Classes(classes).where('id','=',item.class_id).firstOrFail()}
                  data={item} 
                  edit={this.editOpen.bind(this)}  
                  deleteAttribute={this.deleteAttribute.bind(this)} 
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
  attributeActions: bindActionCreators(attributeActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttributeList);
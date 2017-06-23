import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { attributeActions } from '../../../core/attribute'
import AttributeModal from './AttributeModal'
import AttributeModalEdit from './AttributeModalEdit'
import AttributeList from './AttributeList'
import { Breadcrumbs, MenuHeader } from '../../components'

class Attribute extends Component {
  constructor() {
    super()

    this.state = {
      createAttribute: {},
      updateAttribute: {},
      loadAttribute: {},
      showModal: false,
      showModalEdit: false
    }
  }

  // componentDidMount() {
  //   console.clear();
    
  //   this.props.attributeActions.fetchAttribute()
  // }

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
    console.log('Update Data', data)
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

    console.log(this.state.loadAttribute)
  }

  editClose() {
    this.setState({ 
      showModalEdit: false,
      loadAttribute: {},
    });
  }

  render() {
    const { attributes } = this.props
    return (
      <div>
        <Breadcrumbs title='Attributes' />
        <MenuHeader title='Attributes' />

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
        <hr/>
        <AttributeList 
          data={attributes} 
          edit={this.editOpen.bind(this)}
          deleteAttribute={this.deleteAttribute.bind(this)} 
        />
      </div>  
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  attributes: state.attribute.data,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  attributeActions: bindActionCreators(attributeActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute);

import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import AttributeForm from '../../forms/AttributeForm'

class AttributeModal extends Component {
  constructor() {
    super() 

    this.state = {
      showModal: false
    }
  }

  render() {
    const { data, handleSubmit, close, open, showModal, classes, skills } = this.props
    return (
      <div>
        <Button bsStyle='primary' onClick={open} >
          <i className='fa fa-plus'></i> Create New Attribute
        </Button>
        <Modal show={showModal} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Attribute</Modal.Title>
          </Modal.Header>
          <AttributeForm onSubmit={handleSubmit} close={close} data={data} classes={classes} skills={skills} />
        </Modal>
      </div>
    )
  }
}

export default AttributeModal

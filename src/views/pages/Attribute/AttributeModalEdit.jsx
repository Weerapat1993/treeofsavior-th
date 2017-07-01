import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import AttributeEditForm from '../../forms/AttributeEditForm'

class AttributeModal extends Component {
  constructor() {
    super() 

    this.state = {
      showModal: false
    }
  }

  render() {
    const { data, handleSubmit, close, open, showModal, load, classes, skills  } = this.props
    return (
      <div>
        <Modal show={showModal} onHide={open}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Attribute</Modal.Title>
          </Modal.Header>
          <AttributeEditForm onSubmit={handleSubmit} close={close} data={data} load={load} classes={classes} skills={skills} />
        </Modal>
      </div>
    )
  }
}

export default AttributeModal

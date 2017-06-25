import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import SkillEditForm from '../../forms/SkillEditForm'

class SkillModal extends Component {
  constructor() {
    super() 

    this.state = {
      showModal: false
    }
  }

  render() {
    const { data, handleSubmit, close, open, showModal, load } = this.props
    return (
      <Modal show={showModal} onHide={open}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Skill</Modal.Title>
        </Modal.Header>
        <SkillEditForm onSubmit={handleSubmit} close={close} data={data} load={load} />
      </Modal>
    )
  }
}

export default SkillModal
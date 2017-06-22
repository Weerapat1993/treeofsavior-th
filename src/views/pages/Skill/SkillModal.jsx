import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import SkillForm from '../../forms/SkillForm'

class SkillModal extends Component {
  constructor() {
    super() 

    this.state = {
      showModal: false
    }
  }

  render() {
    const { data, handleSubmit, close, open, showModal } = this.props
    return (
      <div>
        <Button bsStyle="primary" onClick={open} >
          <i className="fa fa-plus"></i> Create New Skill
        </Button>
        <Modal show={showModal} onHide={open}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Skill</Modal.Title>
          </Modal.Header>
          <SkillForm onSubmit={handleSubmit} close={close} data={data} />
        </Modal>
      </div>
    )
  }
}

export default SkillModal
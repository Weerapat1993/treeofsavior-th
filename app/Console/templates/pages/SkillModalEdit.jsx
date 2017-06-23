import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import ${name_pascal}EditForm from '../../forms/${name_pascal}EditForm'

class ${name_pascal}Modal extends Component {
  constructor() {
    super() 

    this.state = {
      showModal: false
    }
  }

  render() {
    const { data, handleSubmit, close, open, showModal, load } = this.props
    return (
      <div>
        <Modal show={showModal} onHide={open}>
          <Modal.Header closeButton>
            <Modal.Title>Create New ${name_pascal}</Modal.Title>
          </Modal.Header>
          <${name_pascal}EditForm onSubmit={handleSubmit} close={close} data={data} load={load} />
        </Modal>
      </div>
    )
  }
}

export default ${name_pascal}Modal
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ${name_pascal}Form from '../../forms/${name_pascal}Form'

class ${name_pascal}Modal extends Component {
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
        <Button bsStyle='primary' onClick={open} >
          <i className='fa fa-plus'></i> Create New ${name_pascal}
        </Button>
        <Modal show={showModal} onHide={open}>
          <Modal.Header closeButton>
            <Modal.Title>Create New ${name_pascal}</Modal.Title>
          </Modal.Header>
          <${name_pascal}Form onSubmit={handleSubmit} close={close} data={data} />
        </Modal>
      </div>
    )
  }
}

export default ${name_pascal}Modal
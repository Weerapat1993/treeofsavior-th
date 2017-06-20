import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import GalleryForm from '../../forms/GalleryForm'

class GalleryModal extends React.Component {
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
          <i className="fa fa-plus"></i> Create New Gallery
        </Button>
        <Modal show={showModal} onHide={open}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Gallery</Modal.Title>
          </Modal.Header>
          <GalleryForm onSubmit={handleSubmit} close={close} data={data} />
        </Modal>
      </div>
    )
  }
}

export default GalleryModal
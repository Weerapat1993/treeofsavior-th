import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Player } from 'video-react';

class SkillModalVideo extends Component {
  render() {
    const { close, showModal, load } = this.props
    return (
      <Modal show={showModal} onHide={close} bsSize='large'>
        <Modal.Header closeButton>
          <Modal.Title>Skill : {load.name}</Modal.Title>
        </Modal.Header>
        <Player autoPlay={showModal}>
          <source src={load.url} />
        </Player>
      </Modal>
    )
  }
}

export default SkillModalVideo
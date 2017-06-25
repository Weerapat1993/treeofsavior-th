import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { url } from '../../../core/constants'

export const MenuHeader = ({ title }) => {
  return (
    <div className='text-center'>
      <ButtonGroup>
        <LinkContainer to={url('/classes')}>
          <Button>Classes</Button>
        </LinkContainer>
        <LinkContainer to={url('/skills')}>
          <Button>Skills</Button>
        </LinkContainer>
        <LinkContainer to={url('/attributes')}>
          <Button>Attributes</Button>
        </LinkContainer>
      </ButtonGroup>
      <h1>{title}</h1>
    </div>
  )
}

export default MenuHeader
import React from 'react'
import { PageHeader, ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const MenuHeader = ({ title }) => {
  return (
    <div className='text-center'>
      <ButtonGroup>
        <LinkContainer to='/classes'>
          <Button>Classes</Button>
        </LinkContainer>
        <LinkContainer to='/skills'>
          <Button>Skills</Button>
        </LinkContainer>
        <LinkContainer to='/attributes'>
          <Button>Attributes</Button>
        </LinkContainer>
      </ButtonGroup>
      <PageHeader>{title}</PageHeader>
    </div>
  )
}

export default MenuHeader
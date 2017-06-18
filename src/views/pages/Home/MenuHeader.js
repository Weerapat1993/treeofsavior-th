import React from 'react'
import { PageHeader, ButtonGroup, Button } from 'react-bootstrap'

export const MenuHeader = (props) => {
  return(
    <div className='text-center'>
      <ButtonGroup>
        <Button>Classes</Button>
        <Button>Skills</Button>
        <Button>Attribute</Button>
      </ButtonGroup>
      <PageHeader>Classes</PageHeader>
    </div>
  )
}

export default MenuHeader
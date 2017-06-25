import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { url } from '../../../core/constants'

export const Breadcrumbs = ({ path = [], title }) => {
  return(
    <Breadcrumb>
      <IndexLinkContainer to={url('/')}>
        <Breadcrumb.Item>
          Home
        </Breadcrumb.Item>
      </IndexLinkContainer>
      {
        path.map((item, i) => (
          <LinkContainer to={url(item.url)} key={i}>
            <Breadcrumb.Item>
              {item.name}
            </Breadcrumb.Item>
          </LinkContainer>
        ))
      }
      <Breadcrumb.Item active>
        {title}
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs
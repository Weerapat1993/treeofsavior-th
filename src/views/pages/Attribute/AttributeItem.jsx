import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class AttributeItem extends Component {
  handleClick(id) {
    const check = confirm('Are you sure ?')
    if(check) {
      this.props.deleteAttribute(id)
    }
  }
  render() {
    const { data, edit } = this.props
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <div className='row'>
            <div className='col-xs-7'>
              {data.name}
            </div>
            <div className='col-xs-5 text-right'>
              <Button bsStyle='primary' onClick={() => edit(data)} bsSize='xsmall' >
                <i className='fa fa-edit'></i> 
              </Button> &nbsp; 
              <Button bsStyle='danger' onClick={() => this.handleClick(data.id)} bsSize='xsmall' >
                <i className='fa fa-trash'></i> 
              </Button>
            </div>
          </div>
        </div>
      </div>  
    )
  }
  
}

export default AttributeItem

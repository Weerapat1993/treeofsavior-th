import React from 'react'
import { Button } from 'react-bootstrap'

export const SkillItem = ({ data, open }) => {
  return(
    <div className='panel panel-default'>
      <div className="panel-body">
        <div className="row">
          <div className="col-xs-7">
            {data.name}
          </div>
          <div className="col-xs-5 text-right">
            <Button bsStyle="primary" onClick={open} bsSize='xsmall' >
              <i className="fa fa-edit"></i> 
            </Button> &nbsp; 
            <Button bsStyle="danger" onClick={open} bsSize='xsmall' >
              <i className="fa fa-trash"></i> 
            </Button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default SkillItem
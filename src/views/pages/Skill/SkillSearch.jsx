import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

class SkillSearch extends Component {

  handleKey(e) {
    this.props.onKey(e.target.value)
  }

  render() {
    return (
      <InputGroup>
        <InputGroup.Addon>
          <i className="fa fa-lg fa-search"></i>
        </InputGroup.Addon>
        <FormControl 
          type='text' 
          bsSize='large'
          placeholder='Search Skill' 
          onKeyUp={(e) => this.handleKey(e)}
        />
      </InputGroup>
    )
  }
}

export default SkillSearch
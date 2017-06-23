import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

class SkillSearch extends Component {

  handleKey(e) {
    this.props.onKey(e.target.value)
  }

  render() {
    return (
      <FormControl 
        type='text' 
        placeholder='Search Skill' 
        onKeyPress={(e) => this.handleKey(e)}
      />
    )
  }
}

export default SkillSearch
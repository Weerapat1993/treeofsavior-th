import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

class SearchBox extends Component {

  handleKey(e) {
    this.props.onKey(e.target.value)
  }

  render() {
    const { placeholder } = this.props
    return (
      <InputGroup>
        <InputGroup.Addon>
          <i className="fa fa-lg fa-search"></i>
        </InputGroup.Addon>
        <FormControl 
          type='text' 
          bsSize='large'
          placeholder={placeholder} 
          onKeyUp={(e) => this.handleKey(e)}
        />
      </InputGroup>
    )
  }
}

export default SearchBox
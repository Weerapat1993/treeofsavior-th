import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import NavBarSearch from './NavBarSearch'

class SearchBox extends Component {
  constructor() {
    super() 

    this.state = { 
      keyword: ''
    }
  }
  handleKey(e) {
    this.props.onKey(e.target.value)
    this.setState({
      keyword: e.target.value
    }) 
  }

  render() {
    const { placeholder } = this.props
    return (
      <div>
        <span className="visible-xs">
          <NavBarSearch placeholder={placeholder} handleKey={this.handleKey.bind(this)}  />
        </span>
        <span className="hidden-xs">
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
        </span>
      </div>
      
    )
  }
}

export default SearchBox
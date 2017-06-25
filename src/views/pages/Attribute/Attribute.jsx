import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { attributeActions, attributeSelector } from '../../../core/attribute'
import { classActions } from '../../../core/class'
import AttributeList from './AttributeList'
import { Breadcrumbs, MenuHeader, Loading, SearchBox } from '../../components'

class Attribute extends Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
    }
  }

  searchAttribute(value) {
    this.setState({
      keyword: value
    })
  }

  componentDidMount() {
    const { classActions, attributeActions, classes, attributes } = this.props
    if(!classes.length) {
      classActions.fetchClass()
    }
    if(!attributes.length) {
      attributeActions.fetchAttribute()
    }
  }

  render() {
    const { attributes, classes, loading } = this.props
    const attributeFilter = attributeSelector(attributes, this.state.keyword)
    return (
      <div>
        <Breadcrumbs title='Attributes' />
        <MenuHeader title='Attributes' />
        <SearchBox placeholder='Search Attribute' onKey={this.searchAttribute.bind(this)} />
        <br/>
        <br/>
        <Loading isLoading={loading}>
          <AttributeList 
            data={attributeFilter} 
            classes={classes}
          />
        </Loading>
      </div>  
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  attributes: state.attribute.data,
  classes: state.class.data,
  loading: state.attribute.loading,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  attributeActions: bindActionCreators(attributeActions, dispatch),
  classActions: bindActionCreators(classActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute);

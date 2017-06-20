import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ${name}Actions, get${name_pascal}Filter } from '../../core/${name}';

import InputTemplate from '../components/utils/input-template'

class ${name_pascal} extends Component {
  componentDidMount() {
    console.clear();
    this.props.${name}Actions.fetch${name_pascal}()
  }

  create${name_pascal}(title) {
    let data = {
      key: new Date().getTime(),
      title,
      completed: false
    }
    this.props.${name}Actions.create${name_pascal}(data)
  }

  update${name_pascal}(data) {
    this.props.${name}Actions.update${name_pascal}(data)
  }

  delete${name_pascal}(key) {
    this.props.${name}Actions.delete${name_pascal}(key)
  }

  render() {
    const { ${name} } = this.props;
    const data = ${name}.map((item,i) => (
      <li key={i}>{item.title}</li>
    ))
    return (
      <div>
        <InputTemplate
          className=\"task-form__input\"
          placeholder=\"${name}\"
          handleSubmit={(title) => this.createTodo(title)}
        />
        <ul>
          {data}
        </ul>
      </div>

    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  ${name}: get${name_pascal}Filter(state,ownProps),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  ${name}Actions: bindActionCreators(${name}Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${name_pascal});

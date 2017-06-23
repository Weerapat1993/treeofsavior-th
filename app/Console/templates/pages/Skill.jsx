import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ${name}Actions } from '../../../core/${name}'
import ${name_pascal}Modal from './${name_pascal}Modal'
import ${name_pascal}ModalEdit from './${name_pascal}ModalEdit'
import ${name_pascal}List from './${name_pascal}List'
import { Breadcrumbs, MenuHeader } from '../../components'

class ${name_pascal} extends Component {
  constructor() {
    super()

    this.state = {
      create${name_pascal}: {},
      update${name_pascal}: {},
      load${name_pascal}: {},
      showModal: false,
      showModalEdit: false
    }
  }

  // componentDidMount() {
  //   console.clear();
    
  //   this.props.${name}Actions.fetch${name_pascal}()
  // }

  create${name_pascal}(value, dispatch, props) {
    let data = {
      id: new Date().getTime(),
      name: value.name,
      description: value.description,
    }
    this.props.${name}Actions.create${name_pascal}(data)
    this.setState({ showModal: false });
  }

  update${name_pascal}(data) {
    console.log('Update Data', data)
    this.props.${name}Actions.update${name_pascal}(data)
    this.setState({ showModalEdit: false });
  }

  delete${name_pascal}(key) {
    this.props.${name}Actions.delete${name_pascal}(key)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  editOpen(data) {
    this.setState({ 
      showModalEdit: true,
      load${name_pascal}: data,
    });

    console.log(this.state.load${name_pascal})
  }

  editClose() {
    this.setState({ 
      showModalEdit: false,
      load${name_pascal}: {},
    });
  }

  render() {
    const { ${name}s } = this.props
    return (
      <div>
        <Breadcrumbs title='${name_pascal}s' />
        <MenuHeader title='${name_pascal}s' />

        <div className='text-right'>
          <${name_pascal}Modal
            data={this.state.create${name_pascal}}
            handleSubmit={this.create${name_pascal}.bind(this)} 
            open={this.open.bind(this)} 
            close={this.close.bind(this)}
            showModal={this.state.showModal}
          />
        </div>
          <${name_pascal}ModalEdit
            data={this.state.update${name_pascal}}
            handleSubmit={this.update${name_pascal}.bind(this)} 
            load={this.state.load${name_pascal}}
            open={this.editOpen.bind(this)} 
            close={this.editClose.bind(this)}
            showModal={this.state.showModalEdit}
          />
        <hr/>
        <${name_pascal}List 
          data={${name}s} 
          edit={this.editOpen.bind(this)}
          delete${name_pascal}={this.delete${name_pascal}.bind(this)} 
        />
      </div>  
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  ${name}s: state.${name}.data,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  ${name}Actions: bindActionCreators(${name}Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${name_pascal});

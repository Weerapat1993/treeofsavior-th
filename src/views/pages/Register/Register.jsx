import React from 'react'
import RegisterForm from '../../forms/RegisterForm'

class Register extends React.Component {
  handleSubmit(values) {
    console.log(values);
    alert('Submit')
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-heading">
              Register Form
            </div>
            <div className="panel-body">
              <RegisterForm onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;

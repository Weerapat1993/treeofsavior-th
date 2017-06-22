import React from 'react'
import LoginForm from '../../forms/LoginForm'

class Login extends React.Component {
  handleSubmit(values) {
    console.log(values);
    alert('Submit')
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
          <div className="panel panel-default">
            <div className="panel-heading">
              Login Form
            </div>
            <div className="panel-body">
              <LoginForm onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;

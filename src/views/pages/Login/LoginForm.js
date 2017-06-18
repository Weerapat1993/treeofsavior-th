import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form';
import { loginValidation } from '../../core/form/loginValidation'

const getValidationState = (meta) => {
    if (!meta.touched || !meta.error) return 'success';
    else return 'error';
}      

// outside your render() method
const renderField = (field) => (
  <FormGroup
    controlId="formBasicText"
    validationState={getValidationState(field.meta)}
  >
    <ControlLabel>{field.label}</ControlLabel>
    <FormControl
      {...field.input} 
      type={field.type} 
      placeholder={field.placeholder}
    />
    <FormControl.Feedback />
    {field.meta.touched && field.meta.error &&
    <HelpBlock>{field.meta.error}</HelpBlock>}
  </FormGroup>
  )

class LoginForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name='email' component={renderField} type='text' label='Email' placeholder='Email' />
        <Field name='password' component={renderField} type='password' label='Password' placeholder='Password' />
        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>
    );
  }
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'login', // a unique name for this form
  validate: loginValidation,
})(LoginForm);

export default LoginForm;

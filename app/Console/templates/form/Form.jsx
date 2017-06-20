import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ${name}Validation } from '../../core/form/${name}Validation'

// outside your render() method
const renderField = (field) => (
    <span>
      <input {...field.input} type={field.type} className='form-control' placeholder={field.placeholder} />
      {field.meta.touched && field.meta.error &&
      <span className='error'>{field.meta.error}</span>}
    </span>
  )

class ${name_pascal}Form extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email' className='control-label'>Email</label>
          <Field name='email' component={renderField} type='text' placeholder='Email' />
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='control-label'>Password</label>
          <Field name='password' component={renderField} type='password' placeholder='Password' />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>
    );
  }
}

// Decorate the form component
${name_pascal}Form = reduxForm({
  form: '${name}', // a unique name for this form
  validate: ${name}Validation,
})(${name_pascal}Form);

export default ${name_pascal}Form;

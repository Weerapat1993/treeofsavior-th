import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { taskValidation } from '../../core/form/taskValidation'

// outside your render() method
const renderField = (field) => (
    <div className="task-form">
      <input {...field.input} type="text" className='task-form__input' placeholder='What needs to be done?' />
      {field.meta.touched && field.meta.error &&
       <span className="error">{field.meta.error}</span>}
    </div>
  )

class TaskForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="title" component={renderField} type="text"/>
      </form>
    );
  }
}

// Decorate the form component
TaskForm = reduxForm({
  form: 'TaskForm', // a unique name for this form
  validate: taskValidation,
})(TaskForm);

export default TaskForm;

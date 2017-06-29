import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { skillValidation } from '../../core/form/skillValidation'

const getValidationState = (meta) => {
    if (!meta.touched || !meta.error) return 'success'
    else return 'error'
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
    { field.meta.touched && field.meta.error && <HelpBlock>{field.meta.error}</HelpBlock> }
  </FormGroup>
  )

// outside your render() method
const selectField = (field) => (
  <FormGroup
    controlId="formBasicText"
    validationState={getValidationState(field.meta)}
  >
    <ControlLabel>{field.label}</ControlLabel>
    <FormControl componentClass="select" {...field.input}>
      <option value=''>-- {field.label} --</option>
      {
        field.options.map((item, i) => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))
      }
    </FormControl>
    <FormControl.Feedback />
    { field.meta.touched && field.meta.error && <HelpBlock>{field.meta.error}</HelpBlock> }
  </FormGroup>
  )

class SkillForm extends React.Component {
  render() {
    const { handleSubmit, close, classes } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Field name='name' component={renderField} type='text' label='Skill Name' placeholder='Skill Name' />
          <Field name='description' component={renderField} type='text' label='Skill Description' placeholder='Skill Description' />
          <Field name='max_level' component={renderField} type='number' min={1} max={15} label='Skill Max Level' placeholder='Skill Max Level' />
          <Field name='circle' component={renderField} type='number' min={1} max={3} label='Skill Circle' placeholder='Skill Circle' />
          <Field name='url' component={renderField} type='text' label='Link Video' placeholder='Link Video' />
          <Field name='class_id' component={selectField} options={classes} label='Class' />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Close</Button>
          <Button bsStyle='success' onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </form>
    )
  }
}

// Decorate the form component
SkillForm = reduxForm({
  form: 'skill', // a unique name for this form
  validate: skillValidation,
})(SkillForm)

export default SkillForm

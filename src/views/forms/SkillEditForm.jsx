import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'
import { Field, reduxForm, change } from 'redux-form'
import { skillValidation } from '../../core/form/skillValidation'

const getValidationState = (meta) => {
    if (!meta.touched || !meta.error) return 'success'
    else return 'error'
}      

// outside your render() method
const renderField = (field) => {
  if(field.type === 'hidden') {
    return (
      <FormControl
        {...field.input} 
        type={field.type} 
        placeholder={field.placeholder}
      />
    )
  }
  return (
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
}

class SkillForm extends React.Component {
  static propTypes = {
    change: PropTypes.func,
  }

  constructor(props) {
    super(props)

    if(props.load) {
      props.change('id', props.load.id )
      props.change('name', props.load.name )
      props.change('description', props.load.description )
    }
  }

  render() {
    const { handleSubmit, close } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Field name='id' component={renderField} type='hidden' label='Skill ID' placeholder='Skill ID' />
          <Field name='name' component={renderField} type='text' label='Skill Name' placeholder='Skill Name' />
          <Field name='description' component={renderField} type='text' label='Skill Description' placeholder='Skill Description' />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Close</Button>
          <Button bsStyle='primary' onClick={handleSubmit}>Update</Button>
        </Modal.Footer>
      </form>
    )
  }
}

// Decorate the form component
SkillForm = reduxForm({
  form: 'skillEdit', // a unique name for this form
  validate: skillValidation,
})(SkillForm)

export default SkillForm

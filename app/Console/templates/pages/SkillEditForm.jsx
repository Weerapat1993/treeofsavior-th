import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'
import { Field, reduxForm, change } from 'redux-form'
import { ${name}Validation } from '../../core/form/${name}Validation'

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
    controlId='formBasicText'
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

class ${name_pascal}Form extends React.Component {
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
          <Field name='id' component={renderField} type='hidden' label='${name_pascal} ID' placeholder='${name_pascal} ID' />
          <Field name='name' component={renderField} type='text' label='${name_pascal} Name' placeholder='${name_pascal} Name' />
          <Field name='description' component={renderField} type='text' label='${name_pascal} Description' placeholder='${name_pascal} Description' />
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
${name_pascal}Form = reduxForm({
  form: '${name}Edit', // a unique name for this form
  validate: ${name}Validation,
})(${name_pascal}Form)

export default ${name_pascal}Form

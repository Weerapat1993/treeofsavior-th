import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'
import { Field, reduxForm, change } from 'redux-form'
import { attributeValidation } from '../../core/form/attributeValidation'

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

class AttributeForm extends React.Component {
  static propTypes = {
    change: PropTypes.func,
  }

  constructor(props) {
    super(props)

    if(props.load) {
      props.change('id', props.load.id )
      props.change('att_name', props.load.att_name )
      props.change('att_description', props.load.att_description )
    }
  }

  render() {
    const { handleSubmit, close } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Field name='id' component={renderField} type='hidden' label='Attribute ID' placeholder='Attribute ID' />
          <Field name='att_name' component={renderField} type='text' label='Attribute Name' placeholder='Attribute Name' />
          <Field name='att_description' component={renderField} type='text' label='Attribute Description' placeholder='Attribute Description' />
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
AttributeForm = reduxForm({
  form: 'attributeEdit', // a unique name for this form
  validate: attributeValidation,
})(AttributeForm)

export default AttributeForm

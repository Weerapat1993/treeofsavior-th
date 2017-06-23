import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { attributeValidation } from '../../core/form/attributeValidation'

const getValidationState = (meta) => {
    if (!meta.touched || !meta.error) return 'success'
    else return 'error'
}      

// outside your render() method
const renderField = (field) => (
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

class AttributeForm extends React.Component {
  render() {
    const { handleSubmit, close } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Field name='name' component={renderField} type='text' label='Attribute Name' placeholder='Attribute Name' />
          <Field name='description' component={renderField} type='text' label='Attribute Description' placeholder='Attribute Description' />
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
AttributeForm = reduxForm({
  form: 'attribute', // a unique name for this form
  validate: attributeValidation,
})(AttributeForm)

export default AttributeForm

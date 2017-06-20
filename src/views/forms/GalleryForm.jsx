import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form';
import { galleryValidation } from '../../core/form/galleryValidation'

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

class GalleryForm extends React.Component {
  render() {
    const { handleSubmit, close } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Field name='name' component={renderField} type='text' label='Name' placeholder='Name' />
          <Field name='url' component={renderField} type='text' label='Image Url' placeholder='Image Url' />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Close</Button>
          <Button bsStyle='success' onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </form>
    );
  }
}

// Decorate the form component
GalleryForm = reduxForm({
  form: 'gallery', // a unique name for this form
  validate: galleryValidation,
})(GalleryForm);

export default GalleryForm;

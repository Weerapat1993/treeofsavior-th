import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { attributeValidation } from '../../core/form/attributeValidation'
import { Skill } from '../../core/model'

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

class AttributeForm extends React.Component {
  render() {
    const { handleSubmit, close, classes, skills, forms } = this.props
    let skillFilter = []
    if(forms.class_id) {
      skillFilter = Skill(skills).where('class_id','=',+forms.class_id).toArray()
    }
    return (
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Field name='att_name' component={renderField} type='text' label='Attribute Name' placeholder='Attribute Name' />
          <Field name='att_description' component={renderField} type='text' label='Attribute Description' placeholder='Attribute Description' />
          <Field name='att_max_lv' component={renderField} type='numbber' min={0} max={100} label='Attribute Max LV' placeholder='Attribute Max LV' />
          <Field name='class_id' component={selectField} options={classes} label='Class' />
          {
            skillFilter.length ?
            <Field name='skill_id' component={selectField} options={skillFilter} label='Skill' />
            : <span></span>
          }
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

//=====================================
//  CONNECT
//-------------------------------------

// Decorate with connect to read form values
const selector = formValueSelector('attribute') // <-- same as form name

const mapStateToProps = (state, ownProps) => {
  return {
    forms: {
      class_id: selector(state, 'class_id'),
    }
  }
}

AttributeForm = connect(
  mapStateToProps
)(AttributeForm)

export default AttributeForm

import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

const getValidationState = (meta) => {
    if (!meta.touched || !meta.error) return 'success'
    else return 'error'
}      

// outside your render() method
export const inputField = (field) => (
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
export const selectField = (field) => (
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

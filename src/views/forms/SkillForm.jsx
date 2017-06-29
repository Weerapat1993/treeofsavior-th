import React from 'react'
import { connect } from 'react-redux'
import Case from 'case'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { skillValidation } from '../../core/form/skillValidation'
import { noImage } from '../../utils'
import { Skill } from '../../core/model'

const circleColor = (circle) => {
  switch(+circle) {
    case 1: return 'success';
    case 2: return 'warning';
    case 3: return 'danger';
    default: return 'default';
  }
} 

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
    const { handleSubmit, close, classes, forms } = this.props
    const { circle, name, class_id, description, max_level, url } = forms
    const icon_name = `${class_id}_${Case.snake(name)}`
    const Class = Skill(classes).find(+class_id).firstOrFail()
    console.log(Class)
    return (
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <table>
            <tbody>
              <tr>
                <td width={75} style={{ verticalAlign: 'top' }}>
                  <table className='text-center'>
                    <tbody>
                      <tr>
                        <td width={60}>
                          <img onError={noImage} src={`http://www.treeofsavior-th.com/images/icon-skill/${icon_name}.png`} alt='' width={60} height={60}/>
                          {
                            circle && <Button bsStyle={`${circleColor(circle)}`} block bsSize='xsmall'>Circle {circle}</Button>
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ verticalAlign: 'top' }}>
                  <b>ชื่อสกิล :</b> {name} <br />
                  <b>เลเวลสูงสุด :</b> {max_level} <br/>
                  <b>รายละเอียด :</b> {description} <br />
                  <b>อาชีพ :</b> { Class && Class.name } <br/>
                </td>
                <td style={{ verticalAlign: 'top', width: 100 }}>
                </td>
              </tr>
            </tbody>
          </table>
          <hr/>
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

//=====================================
//  CONNECT
//-------------------------------------

// Decorate with connect to read form values
const selector = formValueSelector('skill') // <-- same as form name

const mapStateToProps = (state, ownProps) => {
  return {
    forms: {
      name: selector(state, 'name'),
      class_id: selector(state, 'class_id'),
      max_level: selector(state, 'max_level'),
      circle: selector(state, 'circle'),
      url: selector(state, 'url'),
      description: selector(state, 'description'),
    }
  }
}

SkillForm = connect(
  mapStateToProps
)(SkillForm)

export default SkillForm

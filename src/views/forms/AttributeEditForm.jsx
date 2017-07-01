import React from 'react'
import Case from 'case'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector, change } from 'redux-form'
import { attributeValidation } from '../../core/form/attributeValidation'
import { Skill, Classes } from '../../core/model'
import { noImage, inputField, selectField } from '../../utils'
import SkillItemIcon from '../pages/Skill/SkillItemIcon'

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
      props.change('att_max_lv', props.load.att_max_lv )
      props.change('skill_id', props.load.skill_id )
      props.change('class_id', props.load.class_id )
    }
  }


  render() {
    const { handleSubmit, close, classes, skills, forms } = this.props
    const { att_name, att_max_lv, att_description, skill_id } = forms
    const icon_name = `${skill_id}_${Case.snake(att_name)}`
    let skillFilter = []
    let Class
    let skill
    if(forms.class_id) {
      Class = Classes(classes).find(+forms.class_id).firstOrFail()
      skillFilter = Skill(skills).where('class_id','=',+forms.class_id).toArray()
    }
    if(forms.skill_id) {
      skill = Skill(skills).find(+forms.skill_id).firstOrFail()
    }
    return (
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <table width='100%'>
            <tbody>
              <tr>
                <td width={75} style={{ verticalAlign: 'top' }}>
                  <table className='text-center'>
                    <tbody>
                      <tr>
                        <td width={75}>
                          <img onError={noImage} src={`http://www.treeofsavior-th.com/images/icon-attribute/${icon_name}.png`} alt='' width={60} height={60}/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ verticalAlign: 'top' }}>
                  <b>ชื่อสกิล :</b> {att_name} <br />
                  <b>เลเวลสูงสุด :</b> {att_max_lv} <br/>
                  <b>รายละเอียด :</b> {att_description} <br />
                  <b>อาชีพ :</b> { Class && Class.name } <br />
                  <b>สกิล :</b> { skill && skill.name } <br />
                </td>
                {
                  (forms.skill_id) &&
                  <td width={75} style={{ verticalAlign: 'top' }}>
                    <SkillItemIcon skill={skill} />
                  </td>
                }
              </tr>
            </tbody>
          </table>
          <hr/>
          <Field name='att_name' component={inputField} type='text' label='Attribute Name' placeholder='Attribute Name' />
          <Field name='att_description' component={inputField} type='text' label='Attribute Description' placeholder='Attribute Description' />
          <Field name='att_max_lv' component={inputField} type='numbber' min={0} max={100} label='Attribute Max LV' placeholder='Attribute Max LV' />
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
  form: 'attributeEdit', // a unique name for this form
  validate: attributeValidation,
})(AttributeForm)

//=====================================
//  CONNECT
//-------------------------------------

// Decorate with connect to read form values
const selector = formValueSelector('attributeEdit') // <-- same as form name

const mapStateToProps = (state, ownProps) => {
  return {
    forms: {
      att_name: selector(state, 'att_name'),
      att_description: selector(state, 'att_description'),
      att_max_lv: selector(state, 'att_max_lv'),
      class_id: selector(state, 'class_id'),
      skill_id: selector(state, 'skill_id'),
    }
  }
}

AttributeForm = connect(
  mapStateToProps
)(AttributeForm)

export default AttributeForm

import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Case from 'case'
import { noImage } from '../../../utils'
import { url, asset } from '../../../core/constants'
import AttributeItemInSkill from '../Attribute/AttributeItemInSkill'
import SkillItemIcon from './SkillItemIcon'

class SkillItem extends Component {
  handleClick(id) {
    const check = confirm('Are you sure ?')
    if(check) {
      this.props.deleteSkill(id)
    }
  }
  
  render() {
    const { data, attributes, edit, Class, video } = this.props
    return (
      <div>
        <div className='text-right'>
          <ButtonGroup>
            <Button bsStyle='primary' onClick={() => edit(data)} bsSize='xsmall' >
              <i className='fa fa-edit'></i> 
            </Button>
            <Button bsStyle='danger' onClick={() => this.handleClick(data.id)} bsSize='xsmall' >
              <i className='fa fa-trash'></i> 
            </Button>
          </ButtonGroup>
        </div>
        <table width='100%'>
          <tbody>
            <tr>
              <td width={75} className='text-center' style={{ verticalAlign: 'top' }}>
                <SkillItemIcon skill={data} video={video} />
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <b>ชื่อสกิล :</b> {data.name} <br/>
                <b>เลเวลสูงสุด :</b> {data.max_level} <br/>
                <b>รายละเอียด :</b> {data.description} <br/>
                <span className='visible-xs'>
                  <b>อาชีพ :</b> <Link to={url(`/classes/show/${Class.id}`)}>{Class.name}</Link> <br/>
                </span>
                {
                  attributes.length ?
                  <div>
                    <br/>
                    <b>Skill Attribute</b> <br/>
                    { 
                      attributes.map((item, i) => (
                        <AttributeItemInSkill 
                          key={i} 
                          Class={Class}
                          data={item} 
                        />
                      ))
                    }
                    <br/>
                    <br/>
                  </div>
                  : <span></span>
                }
              </td>
              <td width={75} className='text-center hidden-xs'>
                {
                  (Class) &&
                  <div>
                    <Link to={url(`/classes/show/${Class.id}`)}>
                      <img onError={noImage} src={asset(`/images/icon-class/${Case.snake(Class.name)}.png`)} style={{ width: 100 }} alt='' />
                    </Link>
                    <div className="bold">
                      {Class.name}
                    </div>
                  </div>
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
}

export default SkillItem
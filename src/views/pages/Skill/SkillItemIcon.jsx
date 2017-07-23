import React, { Component } from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import Case from 'case'
import { Link } from 'react-router-dom'
import { noImage } from '../../../utils'
import { asset, url } from '../../../core/constants'

const circleColor = (circle) => {
  switch(+circle) {
    case 1: return 'success';
    case 2: return 'warning';
    case 3: return 'danger';
    default: return 'default';
  }
} 

class SkillItemIcon extends Component {
  popoverHoverFocus = (skill) => (
    <Popover id="popover-trigger-hover-focus" title={`${skill.name}`}>
      <b>เลเวลสูงสุด :</b> {skill.max_level} <br/>
      <b>รายละเอียด :</b> {skill.description} <br/>
    </Popover>
  );

  render() {
    const { skill, video } = this.props
    const icon_name = `${skill.class_id}_${Case.snake(skill.name)}`
    return (
      <table className='text-center'>
        <tbody>
          <tr>
            <td width={60}>
              <OverlayTrigger trigger={['hover', 'focus', 'click']} rootClose placement="top" overlay={this.popoverHoverFocus(skill)}>
                <img onError={noImage} src={asset(`/images/icon-skill/${icon_name}.png`)} alt='' width={60} height={60}/>
              </OverlayTrigger>
              {
                skill.circle && <Button bsStyle={`${circleColor(skill.circle)}`} block bsSize='xsmall'>Circle {skill.circle}</Button>
              }
              {
                (skill.url && video) &&
                <Button bsStyle='primary' block bsSize='xsmall' onClick={() => video(skill)}>
                  Video
                </Button>
              } 
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default SkillItemIcon
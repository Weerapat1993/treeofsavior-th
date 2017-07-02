import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Case from 'case'
import { noImage } from '../../../utils'
import { asset } from '../../../core/constants'

const circleColor = (circle) => {
  switch(+circle) {
    case 1: return 'success';
    case 2: return 'warning';
    case 3: return 'danger';
    default: return 'default';
  }
} 

class SkillItemIcon extends Component {
  render() {
    const { skill, video } = this.props
    const icon_name = `${skill.class_id}_${Case.snake(skill.name)}`
    return (
      <table className='text-center'>
        <tbody>
          <tr>
            <td width={60}>
              <img onError={noImage} src={asset(`/images/icon-skill/${icon_name}.png`)} alt='' width={60} height={60}/>
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
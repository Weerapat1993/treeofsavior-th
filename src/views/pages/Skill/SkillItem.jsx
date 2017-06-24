import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Case from 'case'
import { noImage } from '../../../utils'

const circleColor = (circle) => {
  switch(circle) {
    case 1: return 'success';
    case 2: return 'warning';
    case 3: return 'danger';
    default: return 'default';
  }
} 

class SkillItem extends Component {
  handleClick(id) {
    const check = confirm('Are you sure ?')
    if(check) {
      this.props.deleteSkill(id)
    }
  }
  
  render() {
    const { data, edit, Class } = this.props
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
        <table className="table">
          <tbody>
            <tr>
              <td width={75} className='text-center'>
                <table className='text-center'>
                  <tbody>
                    <tr>
                      <td width={60}>
                        <img onError={noImage} src={`http://www.treeofsavior-th.com/images/icon-skill/${data.class_id}_${Case.snake(data.name)}.png`} alt='' width={60} height={60}/>
                        <Button bsStyle={`${circleColor(data.circle)}`} block bsSize='xsmall'>Circle {data.circle}</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <b>ชื่อสกิล :</b> {data.name} <br/>
                <b>เลเวลสูงสุด :</b> {data.max_level} <br/>
                <b>รายละเอียด :</b> {data.description}
              </td>
              <td width={75} className='text-center'>
                {
                  (Class) &&
                  <div>
                    <Link to={`/classes/show/${Class.id}`}>
                      <img onError={noImage} src={`http://treeofsavior-th.com/images/icon-class/${Case.snake(Class.name)}.png`} style={{ width: 100 }} alt='' />
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
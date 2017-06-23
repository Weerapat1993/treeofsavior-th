import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import Case from 'case'


const circleColor = (circle) => {
  switch(circle) {
    case 1: return 'success';
    case 2: return 'warning';
    case 3: return 'danger';
    default: return 'default';
  }
} 

class SkillItem extends Component {
  addDefaultSrc(ev){
    ev.target.src = 'http://www.treeofsavior-th.com/images/icon-skill/1_thrust.png'
  }

  handleClick(id) {
    const check = confirm('Are you sure ?')
    if(check) {
      this.props.deleteSkill(id)
    }
  }
  
  render() {
    const { data, edit } = this.props
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
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td width={75} className='text-center' rowSpan={2}>
                <table className='text-center'>
                  <tbody>
                    <tr>
                      <td width={60}>
                        <img onError={this.addDefaultSrc} src={`http://www.treeofsavior-th.com/images/icon-skill/${data.class_id}_${Case.snake(data.name)}.png`} alt='' width={60} height={60}/>
                        <Button bsStyle={`${circleColor(data.circle)}`} block bsSize='xsmall'>Circle {data.circle}</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className='bold bg-gray' width={90}>
                ชื่อสกิล
              </td>
              <td>
                {data.name}
              </td>
            </tr>
            <tr>
              <td className='bold bg-gray' >
                รายละเอียด
              </td>
              <td>
                {data.description}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
}

export default SkillItem
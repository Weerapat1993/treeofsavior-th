import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Case from 'case'
import { noImage } from '../../../utils'
import { url, asset } from '../../../core/constants'

class AttributeItem extends Component {
  handleClick(id) {
    const check = confirm('Are you sure ?')
    if(check) {
      this.props.deleteAttribute(id)
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
        <table width='100%'>
          <tbody>
            <tr>
              <td width={75} className='text-center' style={{ verticalAlign: 'top' }}>
                <table className='text-center'>
                  <tbody>
                    <tr>
                      <td width={60}>
                        <img onError={noImage} src={asset(`/images/icon-attribute/${data.skill_id}_${Case.snake(data.att_name)}.png`)} alt='' width={50} height={50}/>
                        <br/>
                        <b>{data.att_name}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <b>ชื่อ Attribute :</b> {data.att_name} <br/>
                <b>เลเวลสูงสุด :</b> {data.att_max_lv} <br/>
                <b>รายละเอียด :</b> {data.att_description} <br/>
                <span className='visible-xs'>
                  <b>อาชีพ :</b> <Link to={url(`/classes/show/${Class.id}`)}>{Class.name}</Link>
                </span>
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

export default AttributeItem
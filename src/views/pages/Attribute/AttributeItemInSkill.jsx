import React, { Component } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Case from 'case'
import { noImage } from '../../../utils'

class AttributeItem extends Component {
  popoverHoverFocus = (data, Class) => (
    <Popover id="popover-trigger-hover-focus" title={data.att_name}>
      <b>ชื่อ Attribute :</b> {data.att_name} <br/>
      <b>เลเวลสูงสุด :</b> {data.att_max_lv} <br/>
      <b>รายละเอียด :</b> {data.att_description} <br/>
      <b>อาชีพ :</b> <Link to={`/classes/show/${Class.id}`}>{Class.name}</Link>
    </Popover>
  );

  render() {
    const { data, Class } = this.props
    return (
      <span>
        <OverlayTrigger trigger={['hover', 'focus', 'click']} rootClose placement="top" overlay={this.popoverHoverFocus(data, Class)}>
           <img onError={noImage} src={`http://www.treeofsavior-th.com/images/icon-attribute/${data.skill_id}_${Case.snake(data.att_name)}.png`} alt='' width={50} height={50}/>
        </OverlayTrigger>
        &nbsp;
      </span>
    )
  }
  
}

export default AttributeItem
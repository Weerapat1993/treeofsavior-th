import React from 'react'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'
import { Link } from 'react-router-dom'
import { url } from '../../../core/constants'

const MenuClass = (props) => {
  const classes = [
    {
      name: 'Swordsman',
      description: 'นักรบผู้เชี่ยวชาญด้านการใช้อาวุธระยะประชิด สามารถใช้อาวุธได้หลากหลายรูปแบบ',
      color: '#ff5722',
    }, 
    {
      name: 'Wizard',
      description: 'นักเวทย์ผู้เชี่ยวชาญด้านการใช้เวทย์มนตร์ สามารถใช้เวทย์ได้หลากหลาย',
      color: '#2296f3',
    }, 
    {
      name: 'Archer',
      description: 'นักธนูผู้ชาวชาญด้านการโจมตีระยะไกล ทำหน้าที่คอยอยู่แนวหลังเพื่อจัดการศัตรูจากระยะไกล',
      color: '#ffc107',
    }, 
    {
      name: 'Cleric',
      description: 'นักบุญผู้คอยเหลือผู้คนเมื่อยามเจ็บป่วย ทำหน้าที่คอยสนับสนุนให้กับเพื่อนร่วมทีม',
      color: '#8bc34a',
    }, 
  ]

  return(
    <Grid>
      {
        classes.map((item, i) => (
          <Cell col={12 / classes.length} phone={12} key={i}>
            <Card shadow={0} style={{width: '100%', height: 400, margin: 'auto'}}>
              <CardTitle expand style={{color: '#fff', background: `url(/assets/images/classes/${item.name.toLowerCase()}.gif) bottom 30% right 15% no-repeat ${item.color}`}}>{item.name}</CardTitle>
              <CardText>
                {item.description}
              </CardText>
              <CardActions border>
                <Button component={Link} to={url(props.path + item.name)} colored>{ props.title }</Button>
              </CardActions>
            </Card>
          </Cell>
        ))
      }
    </Grid>
  )
}

export default MenuClass
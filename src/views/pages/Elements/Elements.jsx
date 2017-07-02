import React from 'react'
import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl'

const Elements = (props) => {
  return (
    <div>
      <Grid>
        <Cell col={2} hideTablet hidePhone />
        <Cell col={8}>
          <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
            <CardTitle className='bold'>ตารางธาตุในเกม Tree of Savior</CardTitle>
            <CardText>
                <img src={'/assets/images/background/element_Type.png'} width='100%' alt=""/>
            </CardText>
          </Card>
        </Cell>
      </Grid>
      <Grid>
        <Cell col={2} hideTablet hidePhone />
        <Cell col={8}>
          <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
            <CardTitle className='bold'>ตารางการโจมตีและป้องกันในเกม Tree of Savior</CardTitle>
            <CardText>
              <img src={'/assets/images/background/damage_type.png'} width='100%' alt=""/>
            </CardText>
          </Card>
        </Cell>
      </Grid>
    </div>
  )
}

export default Elements
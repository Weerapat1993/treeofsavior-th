import React from 'react'
import { 
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
} from 'react-mdl'
import { Link } from 'react-router-dom'
import { url } from '../../../core/constants'
import MenuClass from './MenuClass'

export const Home = (props) => {
  const news = ['ข้อมูลอาชีพ', 'วิธีการเล่นเบื้องต้น', 'จำลองการอัพสกิล']
  const newsUrl = ['/', '/', '/skill-simulator']
  return(
    <Grid>
      <Cell col={2} hidePhone hideTablet />
      <Cell col={8}>
        <MenuClass title='อ่านข้อมูลเพิ่มเติม' path={'/classes/type/'} />
        <Grid>
          {
            news.map((item, i) => (
              <Cell col={12 / news.length} phone={12} key={i}>
                <Card shadow={0} style={{width: '100%', height: 450, margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: '#46B6AC'}}>{item}</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenan convallis.
                  </CardText>
                  <CardActions border>
                    <Button component={Link} to={url(newsUrl[i])} colored>GET STARTED</Button>
                  </CardActions>
                </Card>
              </Cell>
            ))
          }
        </Grid>
      </Cell>
    </Grid>
  )
}

export default Home 
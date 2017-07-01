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

export const Home = (props) => {
  return(
    <Grid className="demo-container">
      <Cell col={12}>
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenan convallis.
          </CardText>
          <CardActions border>
              <Button colored>View Updates</Button>
          </CardActions>
        </Card>
      </Cell>
    </Grid>
  )
}

export default Home 
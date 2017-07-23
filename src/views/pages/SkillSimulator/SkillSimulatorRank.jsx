import React from 'react'
import Case from 'case'
import { 
  Cell,
  Grid,
  Card,
  CardTitle,
  CardActions,
} from 'react-mdl'

import { Classes } from '../../../core/model'
import { asset } from '../../../core/constants'
import { noImage } from '../../../utils'

const SkillSimulatorRank = ({ build, classes, classType, addClass }) => {
  const Ranks = [1,2,3,4,5,6,7,8]
  return(
    <Grid className='text-center'>
    {
      Ranks.map((rank, i) => {
        if(build.length < i) return false
        return (
          <Cell col={3} tablet={4} phone={6} key={i}>
            <Card shadow={0} style={{width: '100%', height: 200, margin: 'auto'}}>
              <CardTitle expand style={{color: '#fff', background: '#46B6AC', justifyContent: 'center'}}>
                {
                  Classes(classes).where('class_type','=', classType).where('rank','=', rank).get().map((item, j) => (
                    <a key={j} onClick={() => addClass(item)}>
                      <img key={j} onError={noImage} src={asset(`/images/icon-class/${Case.snake(item.name)}.png`)} style={{ width: 75, height: 75 }} alt=""/>
                    </a>
                  ))
                }
              </CardTitle>
              <CardActions className='text-center bold' border>
                {`Rank ${rank}`}
              </CardActions>
            </Card>
          </Cell>
        )
      })
    }
    </Grid>
  )
}

export default SkillSimulatorRank
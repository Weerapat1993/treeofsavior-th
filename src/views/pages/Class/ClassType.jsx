import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Case from 'case'
import { noImage } from '../../../utils'
import { 
  Classes 
} from '../../../core/model'

import { url } from '../../../core/constants'

const colorBtn = (rank) => {
  switch(rank) {
    case 1: return 'danger'
    case 2: return 'info'
    case 3: return 'primary'
    case 4: return 'warning'
    case 5: return 'success'
    case 6: return 'danger'
    case 7: return 'info'
    case 8: return 'primary'
    default: return 'default'
  }
}

export const ClassType = ({ classes, classType, selector }) => {
  const classesFilter = Classes(classes).where('class_type','=', classType).get()
  return(
    <div className={(selector) ? 'col-md-6 col-md-offset-3' : 'col-md-3 col-sm-6'}>
      <div className="row">
        { 
          classesFilter.map((item, i) => (
            <div className={i ? 'col-xs-6' : 'col-xs-12'} key={i}>
              <div>
                <Link to={url(`/classes/show/${item.id}`)}>
                  <img onError={noImage} src={`http://treeofsavior-th.com/images/icon-class/${Case.snake(item.name)}.png`} alt=""/>
                </Link>
                <br/>
                <Button bsStyle={colorBtn(item.rank)} bsSize='xsmall'>Rank {item.rank}</Button>
              </div>
              <br/>
              <div>
                <Link to={url(`/classes/show/${item.id}`)}>
                  {item.name}
                </Link>
              </div>
              <br/>
              <div>
                <Link to={url(`/classes/show/${item.id}`)}>
                  <img onError={noImage} src={`http://treeofsavior-th.com/images/Classes/${item.img_url}.gif`} style={{ height: 180 }} alt='' />
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ClassType
import React from 'react'
import { Link } from 'react-router-dom'
import Case from 'case'
import { Collection } from '../../../utils'
 

const colorBtn = (rank) => {
  switch(rank) {
    case 1: return 'btn-danger'
    case 2: return 'btn-info'
    case 3: return 'btn-primary'
    case 4: return 'btn-warning'
    case 5: return 'btn-success'
    case 6: return 'btn-danger'
    case 7: return 'btn-info'
    case 8: return 'btn-primary'
    default: return 'btn-default'
  }
}

const classImage = (name) => {
  return require(`../../assets/images/classes/${name}.gif`)
}  

export const ClassType = ({ classes, classType }) => {

  const Classes = new Collection(classes, 'id')
  const classesFilter = Classes.where('class_type','=', classType).get()
  // const classesFilter = classes.filter((item) => item.class_type === classType)
  return(
    <div className='col-md-3 col-sm-6'>
      <div className="row">
        { 
          classesFilter.map((item, i) => (
            <div className={i ? 'col-xs-6' : 'col-xs-12'} key={i}>
              <div>
                <Link to={`/classes/show/${item.id}`}>
                  <img src={`http://treeofsavior-th.com/images/icon-class/${Case.snake(item.name)}.png`} alt=""/>
                </Link>
                <br/>
                <a className={`btn ${colorBtn(item.rank)} btn-xs`}>Rank {item.rank}</a> 
              </div>
              <br/>
              <div>
                <Link to={`/classes/show/${item.id}`}>
                  {item.name}
                </Link>
              </div>
              <br/>
              <div>
                <Link to={`/classes/show/${item.id}`}>
                  <img src={classImage(item.character_image)} style={{ height: 180 }} alt='' />
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
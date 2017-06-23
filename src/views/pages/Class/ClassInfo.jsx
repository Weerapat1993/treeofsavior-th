import React from 'react'
import Case from 'case'
import { Link } from 'react-router-dom'

import { Breadcrumbs } from '../../components'
import classes from '../../assets/data/classes'
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

export const ClassInfo = (props) => {
  const id = +props.match.params.id
  const Classes = new Collection(classes, 'id')
  const data = Classes.where('id','=', id).firstOrFail()
  const path = [
    {
      url: '/classes',
      name: 'Classes'
    }
  ]
  return (
    <div>
      <Breadcrumbs path={path} title={data.name} />
      <div className='panel panel-default'>
        <div className="panel-body">
          <div className='row'>
            <div className="col-sm-2 text-center">
              <div>
                <Link to={`/classes/show/${data.id}`}>
                  <img src={`http://treeofsavior-th.com/images/icon-class/${Case.snake(data.name)}.png`} alt=""/>
                </Link>
                <br/>
                <a className={`btn ${colorBtn(data.rank)} btn-xs`}>Rank {data.rank}</a> 
              </div>
              <br/>
              <div>
                <b>{data.name}</b>
              </div>
            </div>
            <div className="col-sm-8">
              Test
            </div>
            <div className="col-sm-2 text-center">
              <Link to={`/classes/show/${data.id}`}>
                <img src={classImage(data.character_image)} style={{ height: 180 }} alt='' />
              </Link>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ClassInfo 
import React from 'react'
import Case from 'case'
import { Button } from 'react-bootstrap'
import { asset } from '../../../core/constants'
import { Classes } from '../../../core/model'
import { noImage } from '../../../utils'

const colorBtn = (rank) => {
  switch(rank) {
    case 1: return 'danger'
    case 2: return 'info'
    case 3: return 'warning'
    case 4: return 'success'
    case 5: return 'danger'
    case 6: return 'info'
    case 7: return 'warning'
    case 8: return 'success'
    default: return 'default'
  }
}

export const getTextColorClass = (color, level) => {
  const lvlClass = (level) ? `-${level}` : '';
  return `mdl-color-text--${color}${lvlClass}`;
}

const SkillSimulatorTable = ({ build, onRemove }) => {
  const Ranks = [1,2,3,4,5,6,7,8]
  let count = 0
  return (
    <div>
      <div className="table-responsive">
        <table className='table table-bordered text-center bg-white'>
          <thead>
            <tr>
              {
                Ranks.map((rank, i) => (
                  <th className={`text-center bg-${colorBtn(rank)}`} key={i}>
                    Rank {rank}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                Ranks.map((rank, i) => {
                  if(build[i]) {
                    count = Classes(build.slice(0, i + 1)).where('id', '=', +build[i].id).count()
                  }
                  return (
                    <td key={i} style={{ width: '12.5%', height: 140 }}>
                      {
                        build[i] &&
                        <div key={i}>
                          <img onError={noImage} src={asset(`/images/icon-class/${Case.snake(build[i].name)}.png`)} style={{ width: 75, height: 75 }} alt=""/>
                          <br/>
                          <b>{build[i].name}</b>
                          <br/>
                          <i className={`material-icons ${count >= 1 && getTextColorClass('yellow', 600)}`}>star</i>
                          <i className={`material-icons ${count >= 2 && getTextColorClass('yellow', 600)}`}>star</i>
                          <i className={`material-icons ${count >= 3 && getTextColorClass('yellow', 600)}`}>star</i>
                        </div>
                      }
                    </td>
                  )
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Button onClick={() => onRemove()} bsStyle='danger' >Remove</Button>
      </div>
    </div>
  )
}

export default SkillSimulatorTable
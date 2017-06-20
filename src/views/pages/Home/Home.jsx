import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import Case from 'case'
import ClassType from './ClassType'
import MenuHeader from './MenuHeader'
import classes from '../../assets/data/classes'

const classTypes = ['warrior','wizard','archer','cleric']

export const Home = (props) => {
  return(
    <div>
      <MenuHeader />
      <div className='row'>
        <div className="text-center">
          <ButtonGroup>
            { 
              classTypes.map((item, i) => (
                <Button>{Case.capital(item)}</Button>
              ))
            }
          </ButtonGroup>
        </div>
        <div className="text-center">
        { 
          classTypes.map((item, i) => (
            <ClassType key={i+1} classes={classes} classType={item} />
          ))
        }
        </div>
      </div>
    </div>  
    
  )
}

export default Home 
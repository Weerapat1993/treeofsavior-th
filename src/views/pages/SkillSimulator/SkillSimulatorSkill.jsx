import React from 'react'
import Case from 'case'
import { 
  Card,
  CardActions,
  Cell,
  Grid,
  CardTitle,
} from 'react-mdl'
import { asset } from '../../../core/constants'
import { noImage } from '../../../utils'
import { Skill, Attribute } from '../../../core/model'
import SkillItemIcon from '../Skill/SkillItemIcon'
import AttributeItemInSkill from '../Attribute/AttributeItemInSkill'

const SkillSimulatorSkill = ({ build, skills, attributes }) => (
  <div>
    {
      build.map((rank, i) => {
        let classSkills = []
        if(build[i]) {
          classSkills = Skill(skills).where('class_id', '=', +build[i].id).orderBy('circle', 'asc').get()
        }
        return (
          <Grid key={i}>
            <Cell col={2} tablet={3} phone={4}>
              <Card shadow={0} style={{width: '100%', height: 200, margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: '#90CAF9', textAlign: 'center', justifyContent: 'center'}}>
                {
                  build[i] &&
                  <span key={i}>
                    <img onError={noImage} src={asset(`/images/icon-class/${Case.snake(build[i].name)}.png`)} style={{ width: 75, height: 75 }} alt=""/>
                    <br/>
                    <b>{build[i].name}</b>
                  </span>
                }
                </CardTitle>
                <CardActions className='text-center bold' border>
                  {`Rank ${i + 1}`}
                </CardActions>
              </Card>
            </Cell>
            <Cell col={10} tablet={9} phone={8} >  
              <Grid>              
              {
                build[i] && classSkills.map((item, j) => {
                  const classAttributes = Attribute(attributes).where('skill_id', '=', +item.id).get()
                  console.log(classAttributes)
                  return (
                    <Cell col={1} key={j} className='text-center'>
                      <SkillItemIcon skill={item} />
                      <br/>
                      {
                        classAttributes.map((attribute, k) => (
                          <AttributeItemInSkill 
                            key={k} 
                            Class={build[i]}
                            data={attribute}
                            Skill={item}
                            size={40}
                          />
                        ))
                      }
                    </Cell>
                  )
                })
              }
              </Grid>
            </Cell>
          </Grid>
        )
      })
    }
  </div>
)

export default SkillSimulatorSkill
import React, { Component } from 'react'
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
import { Skill, Attribute, Classes } from '../../../core/model'
import SkillItemIcon from '../Skill/SkillItemIcon'
import SkillModalVideo from '../Skill/SkillModalVideo'
import AttributeItemInSkill from '../Attribute/AttributeItemInSkill'

export const getTextColorClass = (color, level) => {
    const lvlClass = (level) ? `-${level}` : '';
    return `mdl-color-text--${color}${lvlClass}`;
}

class SkillSimulatorSkill extends Component {
  constructor() {
    super() 

    this.state = {
      loadSkill: {},
      showModalVideo: false,
    }

    this.videoClose = this.videoClose.bind(this)
    this.videoOpen = this.videoOpen.bind(this)
  }

  videoClose() {
    this.setState({ 
      showModalVideo: false,
      loadSkill: {},
    });
  }

  videoOpen(data) {
    this.setState({ 
      showModalVideo: true,
      loadSkill: data,
    });
  }
  
  render() {
    const { build, skills, attributes } = this.props
    return (
      <div>
        <SkillModalVideo
          load={this.state.loadSkill}
          open={this.videoOpen.bind(this)} 
          close={this.videoClose.bind(this)}
          showModal={this.state.showModalVideo}
        />
        {
          build.map((rank, i) => {
            let classSkills = []
            let count = 0
            if(build[i]) {
              count = Classes(build.slice(0, i + 1)).where('id', '=', +build[i].id).count()
              classSkills = Skill(skills)
                              .where('class_id', '=', +build[i].id)
                              .where('circle', '<=', count)
                              .orderBy('circle', 'asc')
                              .get()
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
                        <br/>
                        <i className={`material-icons ${count >= 1 && getTextColorClass('yellow', 500)}`}>star</i>
                        <i className={`material-icons ${count >= 2 && getTextColorClass('yellow', 500)}`}>star</i>
                        <i className={`material-icons ${count >= 3 && getTextColorClass('yellow', 500)}`}>star</i>
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
                      return (
                        <Cell col={1} key={j} className='text-center'>
                          <SkillItemIcon skill={item} video={this.videoOpen} />
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
  }
} 
  

export default SkillSimulatorSkill
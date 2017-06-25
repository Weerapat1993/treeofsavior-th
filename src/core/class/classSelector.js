import { 
  Classes,
  Skill,
  Attribute,
} from '../model'

const hiddenClass = ['Shinobi','Rune Caster','Chaplain','Miko']

export const getNormalClass = (state, props) => {
  const data = state.class.data
  const class_type = props.match.params.class_type
  let NormalClass = Classes(data).whereNotIn('name', hiddenClass)
  if(class_type) {
    NormalClass = NormalClass.where('class_type','=', class_type).get()
  } else {
    NormalClass = NormalClass.get()
  }
  return NormalClass
} 

export const getClassInfo = (state, props) => {
  const data = state.class.data
  const id = +props.match.params.id
  const Class = Classes(data).where('id','=', id).firstOrFail()
  return Class
}


export const getClassSkill = (state, props) => {
  const data = state.skill.data
  const id = +props.match.params.id
  const skills = Skill(data).where('class_id','=', id).get()
  return skills
}

export const getClassAttribute = (state, props) => {
  const data = state.attribute.data
  const id = +props.match.params.id
  const attributes = Attribute(data).where('class_id','=', id).get()
  return attributes
}
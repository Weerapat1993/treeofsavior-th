import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { galleryReducer } from './gallery'
import { classReducer } from './class'
import { skillReducer } from './skill'
import { attributeReducer } from './attribute'

export default combineReducers({
  gallery: galleryReducer,
  form: formReducer,
  class: classReducer,
  skill: skillReducer,
  attribute: attributeReducer,
})

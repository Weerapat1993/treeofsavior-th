import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { galleryReducer } from './gallery'

export default combineReducers({
  gallery: galleryReducer,
  form: formReducer,
})

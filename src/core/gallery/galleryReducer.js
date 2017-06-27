import { loadingData, fetchData, createData, updateData, deleteData } from '../../utils'
// import { GALLERY } from '../constants'
import { GALLERY } from './galleryActionTypes'

const initialState = {
  data: [],
  loading: true,
  error: false
};

export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GALLERY.FETCH.REQUEST:
    case GALLERY.CREATE.REQUEST:
    case GALLERY.UPDATE.REQUEST:
    case GALLERY.DELETE.REQUEST:
    case GALLERY.FETCH.FAILURE:
    case GALLERY.CREATE.FAILURE:
    case GALLERY.UPDATE.FAILURE:
    case GALLERY.DELETE.FAILURE:
      return loadingData(state, action)
    // FETCH_GALLERY_SUCCESS: ================================
    case GALLERY.FETCH.SUCCESS:
      return fetchData(state,action)
    // CREATE_GALLERY_SUCCESS: ================================
    case GALLERY.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_GALLERY_SUCCESS: ================================
    case GALLERY.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_GALLERY_SUCCESS: ================================
    case GALLERY.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}

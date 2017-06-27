import { loadingData, fetchData, createData, updateData, deleteData } from '../../utils'
// import { ATTRIBUTE } from '../constants'
import { ATTRIBUTE } from './attributeActionTypes'

const initialState = {
  data: [],
  loading: true,
  error: false
};

export const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTRIBUTE.FETCH.REQUEST:
    case ATTRIBUTE.CREATE.REQUEST:
    case ATTRIBUTE.UPDATE.REQUEST:
    case ATTRIBUTE.DELETE.REQUEST:
    case ATTRIBUTE.FETCH.FAILURE:
    case ATTRIBUTE.CREATE.FAILURE:
    case ATTRIBUTE.UPDATE.FAILURE:
    case ATTRIBUTE.DELETE.FAILURE:
      return loadingData(state, action)
    // FETCH_ATTRIBUTE_SUCCESS: ================================
    case ATTRIBUTE.FETCH.SUCCESS:
      return fetchData(state,action)
    // CREATE_ATTRIBUTE_SUCCESS: ================================
    case ATTRIBUTE.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_ATTRIBUTE_SUCCESS: ================================
    case ATTRIBUTE.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_ATTRIBUTE_SUCCESS: ================================
    case ATTRIBUTE.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}

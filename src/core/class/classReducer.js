import { loadingData, fetchData, createData, updateData, deleteData } from '../../utils'
// import { CLASS } from '../constants'
import { CLASS } from './classActionTypes'

const initialState = {
  data: [],
  loading: true
};

export const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLASS.FETCH.REQUEST:
    case CLASS.CREATE.REQUEST:
    case CLASS.UPDATE.REQUEST:
    case CLASS.DELETE.REQUEST:
    case CLASS.FETCH.FAILURE:
    case CLASS.CREATE.FAILURE:
    case CLASS.UPDATE.FAILURE:
    case CLASS.DELETE.FAILURE:
      return loadingData(state, action)
    // FETCH_CLASS_SUCCESS: ================================
    case CLASS.FETCH.SUCCESS:
      return fetchData(state,action)
    // CREATE_CLASS_SUCCESS: ================================
    case CLASS.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_CLASS_SUCCESS: ================================
    case CLASS.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_CLASS_SUCCESS: ================================
    case CLASS.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}

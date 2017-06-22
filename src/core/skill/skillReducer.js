import { loadingData, fetchData, createData, updateData, deleteData } from '../../utils'
// import { SKILL } from '../constants'
import { SKILL } from './skillActionTypes'

const initialState = {
  data: [],
  loading: true
};

export const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKILL.FETCH.REQUEST:
    case SKILL.CREATE.REQUEST:
    case SKILL.UPDATE.REQUEST:
    case SKILL.DELETE.REQUEST:
    case SKILL.FETCH.FAILURE:
    case SKILL.CREATE.FAILURE:
    case SKILL.UPDATE.FAILURE:
    case SKILL.DELETE.FAILURE:
      return loadingData(state, action)
    // FETCH_SKILL_SUCCESS: ================================
    case SKILL.FETCH.SUCCESS:
      return fetchData(state,action)
    // CREATE_SKILL_SUCCESS: ================================
    case SKILL.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_SKILL_SUCCESS: ================================
    case SKILL.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_SKILL_SUCCESS: ================================
    case SKILL.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}

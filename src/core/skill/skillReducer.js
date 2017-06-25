import { loadingData, fetchData, deleteData } from '../../utils'
// import { SKILL } from '../constants'
import { SKILL } from './skillActionTypes'
import { 
  reducerCreateSkillRequest, reducerCreateSkillSuccess, reducerCreateSkillFailure,
  reducerUpdateSkillRequest, reducerUpdateSkillSuccess, reducerUpdateSkillFailure,
} from './skillFunction'

const initialState = {
  data: [],
  loading: true
};

export const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKILL.FETCH.REQUEST:
    case SKILL.DELETE.REQUEST:
    case SKILL.FETCH.FAILURE:
    case SKILL.DELETE.FAILURE:
      return loadingData(state, action)
    // FETCH_SKILL_SUCCESS: ================================
    case SKILL.FETCH.SUCCESS:
      return fetchData(state,action)
    // CREATE_SKILL: ================================
    case SKILL.CREATE.REQUEST:
      return reducerCreateSkillRequest(state, action)
    case SKILL.CREATE.SUCCESS:
      return reducerCreateSkillSuccess(state, action)
    case SKILL.CREATE.FAILURE:
      return reducerCreateSkillFailure(state, action)
    // UPDATE_SKILL_SUCCESS: ================================
    case SKILL.UPDATE.REQUEST:
      return reducerUpdateSkillRequest(state, action)
    case SKILL.UPDATE.SUCCESS:
      return reducerUpdateSkillSuccess(state, action)
    case SKILL.UPDATE.FAILURE:
      return reducerUpdateSkillFailure(state, action)
    // CREATE_SKILL_SUCCESS: ================================
    case SKILL.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}

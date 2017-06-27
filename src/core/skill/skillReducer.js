import { loadingData, fetchData } from '../../utils'
// import { SKILL } from '../constants'
import { SKILL } from './skillActionTypes'
import { 
  reducerCreateSkillRequest, reducerCreateSkillSuccess, reducerCreateSkillFailure,
  reducerUpdateSkillRequest, reducerUpdateSkillSuccess, reducerUpdateSkillFailure,
  reducerDeleteSkillRequest, reducerDeleteSkillSuccess, reducerDeleteSkillFailure
} from './skillFunction'

const initialState = {
  data: [],
  isFetching: false,
  error: false
};

export const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_SKILL_SUCCESS: ================================
    case SKILL.FETCH.REQUEST:
    case SKILL.FETCH.FAILURE:
      return loadingData(state, action)
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
    // UPDATE_SKILL_SUCCESS: ================================
    case SKILL.DELETE.REQUEST:
      return reducerDeleteSkillRequest(state, action)
    case SKILL.DELETE.SUCCESS:
      return reducerDeleteSkillSuccess(state, action)
    case SKILL.DELETE.FAILURE:
      return reducerDeleteSkillFailure(state, action)
    // DEFAULT: ================================
    default:
      return state
  }
}

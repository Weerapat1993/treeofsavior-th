import { randStr } from '../../utils'
import { Skill } from '../model'

// REDUCER : FETCH_SKILL --------------------------------------------------------

export const reducerFetchSkillRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerFetchSkillSuccess = (state, action) => ({
  ...state,
  data: action.payload,
  error: false,
  isFetching: false
})

export const reducerFetchSkillFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : CREATE_SKILL --------------------------------------------------------

export const reducerCreateSkillRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerCreateSkillSuccess = (state, action) => {
  const newState = Skill(state.data).insert({
    id: 'skill:'+randStr(50),
    ...action.payload
  })

  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}


export const reducerCreateSkillFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : UPDATE_SKILL --------------------------------------------------------

export const reducerUpdateSkillRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerUpdateSkillSuccess = (state, action) => {
  const newState = Skill(state.data).where('id','=',action.payload.id).update(action.payload)
  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}

export const reducerUpdateSkillFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : DELETE_SKILL --------------------------------------------------------

export const reducerDeleteSkillRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerDeleteSkillSuccess = (state, action) => {
  const newState = Skill(state.data).where('id','!=',action.payload).get()
  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}

export const reducerDeleteSkillFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})
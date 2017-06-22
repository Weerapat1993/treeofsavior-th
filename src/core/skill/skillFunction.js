import { collection, randStr } from '../../utils'

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
  const Skill = collection(state.data)
  const newState = Skill.insert({
    skill_id: `skill:${randStr(50)}`,
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
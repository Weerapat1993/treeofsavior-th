import { randStr } from '../../utils'
import { ${name_pascal} } from '../model'

// REDUCER : FETCH_${name_upper} --------------------------------------------------------

export const reducerFetch${name_pascal}Request = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerFetch${name_pascal}Success = (state, action) => ({
  ...state,
  data: action.payload,
  error: false,
  isFetching: false
})

export const reducerFetch${name_pascal}Failure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : CREATE_${name_upper} --------------------------------------------------------

export const reducerCreate${name_pascal}Request = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerCreate${name_pascal}Success = (state, action) => {
  const newState = ${name_pascal}(state.data).insert({
    id: '${name}:'+randStr(50),
    ...action.payload
  })

  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}


export const reducerCreate${name_pascal}Failure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : UPDATE_${name_upper} --------------------------------------------------------

export const reducerUpdate${name_pascal}Request = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerUpdate${name_pascal}Success = (state, action) => {
  const newState = ${name_pascal}(state.data).where('id','=',action.payload.id).update(action.payload)
  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}

export const reducerUpdate${name_pascal}Failure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : DELETE_${name_upper} --------------------------------------------------------

export const reducerDelete${name_pascal}Request = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerDelete${name_pascal}Success = (state, action) => {
  const newState = ${name_pascal}(state.data).where('id','!=',action.payload).get()
  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}

export const reducerDelete${name_pascal}Failure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})
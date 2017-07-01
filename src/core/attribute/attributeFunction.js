import { randStr } from '../../utils'
import { Attribute } from '../model'

// REDUCER : FETCH_ATTRIBUTE --------------------------------------------------------

export const reducerFetchAttributeRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerFetchAttributeSuccess = (state, action) => ({
  ...state,
  data: action.payload,
  error: false,
  isFetching: false
})

export const reducerFetchAttributeFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : CREATE_ATTRIBUTE --------------------------------------------------------

export const reducerCreateAttributeRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerCreateAttributeSuccess = (state, action) => {
  const newState = Attribute(state.data).insert({
    id: 'attribute:'+randStr(50),
    ...action.payload
  })

  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}


export const reducerCreateAttributeFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : UPDATE_ATTRIBUTE --------------------------------------------------------

export const reducerUpdateAttributeRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerUpdateAttributeSuccess = (state, action) => {
  const newState = Attribute(state.data).where('id','=',action.payload.id).update(action.payload)
  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}

export const reducerUpdateAttributeFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

// REDUCER : DELETE_ATTRIBUTE --------------------------------------------------------

export const reducerDeleteAttributeRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true
})

export const reducerDeleteAttributeSuccess = (state, action) => {
  const newState = Attribute(state.data).where('id','!=',action.payload).get()
  return {
    ...state,
    data: newState,
    error: false,
    isFetching: false
  }
}

export const reducerDeleteAttributeFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false
})

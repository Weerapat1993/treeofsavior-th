import { ${name_upper} } from './${name}ActionTypes'
import {  
  API_FETCH_${name_upper}, API_CREATE_${name_upper}, API_UPDATE_${name_upper}, API_DELETE_${name_upper}
} from '../../core/constants'

export const fetch${name_pascal}Request = (payload) => ({
  type: ${name_upper}.FETCH.REQUEST,
  payload
})
export const fetch${name_pascal}Success = (payload) => ({
  type: ${name_upper}.FETCH.SUCCESS,
  payload
})
export const fetch${name_pascal}Failure = (error) => ({
  type: ${name_upper}.FETCH.FAILURE,
  payload: error.message
})

export const fetch${name_pascal} = () => (dispatch, getState) => {
  const url = API_FETCH_${name_upper}
  dispatch(fetch${name_pascal}Request(true))
  return fetch(url)
    .then(res => res.json())
    .then(res => dispatch(fetch${name_pascal}Success(res.data)))
    .catch(error => dispatch(fetch${name_pascal}Failure(error)))
}

// CREATE_${name_upper} ======================================================
export const create${name_pascal}Request = () => ({
  type: ${name_upper}.CREATE.REQUEST,
})
export const create${name_pascal}Success = (payload) => ({
  type: ${name_upper}.CREATE.SUCCESS,
  payload
})
export const create${name_pascal}Failure = (error) => ({
  type: ${name_upper}.CREATE.FAILURE,
  error: error.message
})

export const create${name_pascal} = (payload) => (dispatch, getState) => {
  const url = API_CREATE_${name_upper}
  dispatch(fetch${name_pascal}Request())
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(res => dispatch(create${name_pascal}Success(res.data)))
    .catch(error => dispatch(create${name_pascal}Failure(error)))
}

// UPDATE_${name_upper} ======================================================
export const update${name_pascal}Request = () => ({
  type: ${name_upper}.UPDATE.REQUEST,
})
export const update${name_pascal}Success = (payload) => ({
  type: ${name_upper}.UPDATE.SUCCESS,
  payload
})
export const update${name_pascal}Failure = (error, payload) => ({
  type: ${name_upper}.UPDATE.FAILURE,
  error: error.message,
  payload
})

export const update${name_pascal} = (payload) => (dispatch, getState) => {
  const url = API_UPDATE_${name_upper}
  dispatch(update${name_pascal}Request())
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then(res => dispatch(update${name_pascal}Success(res.data)))
    .catch(error => dispatch(update${name_pascal}Failure(error, payload)))
}

// DELETE_${name_upper} ======================================================
export const delete${name_pascal}Request = () => ({
  type: ${name_upper}.DELETE.REQUEST,
})
export const delete${name_pascal}Success = (payload) => ({
  type: ${name_upper}.DELETE.SUCCESS,
  payload
})
export const delete${name_pascal}Failure = (error, payload) => ({
  type: ${name_upper}.DELETE.FAILURE,
  error: error.message,
  payload
})

export const delete${name_pascal} = (payload) => (dispatch, getState) => {
  const url = API_DELETE_${name_upper}
  const body = {
    id: payload
  } 
  dispatch(delete${name_pascal}Request())
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => dispatch(delete${name_pascal}Success(payload)))
    .catch(error => dispatch(delete${name_pascal}Failure(error, payload)))
}

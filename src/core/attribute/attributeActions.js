import { ATTRIBUTE } from './attributeActionTypes'
import {  
  API_FETCH_ATTRIBUTE, API_CREATE_ATTRIBUTE, API_UPDATE_ATTRIBUTE, API_DELETE_ATTRIBUTE
} from '../../core/constants'

export const fetchAttributeRequest = (payload) => ({
  type: ATTRIBUTE.FETCH.REQUEST,
  payload
})
export const fetchAttributeSuccess = (payload) => ({
  type: ATTRIBUTE.FETCH.SUCCESS,
  payload
})
export const fetchAttributeFailure = (error) => ({
  type: ATTRIBUTE.FETCH.FAILURE,
  payload: error.message
})

export const fetchAttribute = () => (dispatch, getState) => {
  const url = API_FETCH_ATTRIBUTE
  dispatch(fetchAttributeRequest(true))
  return fetch(url)
    .then(res => res.json())
    .then(res => dispatch(fetchAttributeSuccess(res.data)))
    .catch(error => dispatch(fetchAttributeFailure(error)))
}

// CREATE_ATTRIBUTE ======================================================
export const createAttributeRequest = () => ({
  type: ATTRIBUTE.CREATE.REQUEST,
})
export const createAttributeSuccess = (payload) => ({
  type: ATTRIBUTE.CREATE.SUCCESS,
  payload
})
export const createAttributeFailure = (error) => ({
  type: ATTRIBUTE.CREATE.FAILURE,
  error: error.message
})

export const createAttribute = (payload) => (dispatch, getState) => {
  const url = API_CREATE_ATTRIBUTE
  dispatch(fetchAttributeRequest())
  console.log(payload)
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(res => dispatch(createAttributeSuccess(res.data)))
    .catch(error => dispatch(createAttributeFailure(error)))
}

// UPDATE_ATTRIBUTE ======================================================
export const updateAttributeRequest = () => ({
  type: ATTRIBUTE.UPDATE.REQUEST,
})
export const updateAttributeSuccess = (payload) => ({
  type: ATTRIBUTE.UPDATE.SUCCESS,
  payload
})
export const updateAttributeFailure = (error, payload) => ({
  type: ATTRIBUTE.UPDATE.FAILURE,
  error: error.message,
  payload
})

export const updateAttribute = (payload) => (dispatch, getState) => {
  const url = API_UPDATE_ATTRIBUTE
  dispatch(updateAttributeRequest())
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then(res => dispatch(updateAttributeSuccess(res.data)))
    .catch(error => dispatch(updateAttributeFailure(error, payload)))
}

// DELETE_ATTRIBUTE ======================================================
export const deleteAttributeRequest = () => ({
  type: ATTRIBUTE.DELETE.REQUEST,
})
export const deleteAttributeSuccess = (payload) => ({
  type: ATTRIBUTE.DELETE.SUCCESS,
  payload
})
export const deleteAttributeFailure = (error, payload) => ({
  type: ATTRIBUTE.DELETE.FAILURE,
  error: error.message,
  payload
})

export const deleteAttribute = (payload) => (dispatch, getState) => {
  const url = API_DELETE_ATTRIBUTE
  const body = {
    id: payload
  } 
  dispatch(deleteAttributeRequest())
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => dispatch(deleteAttributeSuccess(payload)))
    .catch(error => dispatch(deleteAttributeFailure(error, payload)))
}

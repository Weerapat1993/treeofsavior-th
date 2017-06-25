import { payloadActions } from '../../utils'
import { ATTRIBUTE } from './attributeActionTypes'

export const fetchAttributeRequest = (payload) => ({
  type: ATTRIBUTE.FETCH.REQUEST,
  payload
})
export const fetchAttributeSuccess = (payload) => ({
  type: ATTRIBUTE.FETCH.SUCCESS,
  payload
})
export const fetchAttributeFailure = (payload) => ({
  type: ATTRIBUTE.FETCH.FAILURE,
  payload
})

export const fetchAttribute = () => (dispatch, getState) => {
  const url = '/assets/data/attributes.json'
  dispatch(fetchAttributeRequest(true))
  return fetch(url, {
    method: 'GET',
    mode: 'no-cors'
  })
    .then(res => res.json())
    .then(res => dispatch(fetchAttributeSuccess(res.data)))
    .catch(error => dispatch(fetchAttributeFailure(error)))
}

// CREATE_ATTRIBUTE
export const createAttribute = (payload) => payloadActions({
  type: ATTRIBUTE.CREATE,
  payload
})

// UPDATE_ATTRIBUTE
export const updateAttribute = (payload) => payloadActions({
  type: ATTRIBUTE.UPDATE,
  payload
})

// DELETE_ATTRIBUTE
export const deleteAttribute = (payload) => payloadActions({
  type: ATTRIBUTE.DELETE,
  payload
})

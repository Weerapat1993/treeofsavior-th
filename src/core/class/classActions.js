import { payloadActions } from '../../utils'
import { CLASS } from './classActionTypes'

export const fetchClassRequest = () => ({
  type: CLASS.FETCH.REQUEST
})
export const fetchClassSuccess = (payload) => ({
  type: CLASS.FETCH.SUCCESS,
  payload
})
export const fetchClassFailure = (payload) => ({
  type: CLASS.FETCH.FAILURE,
  payload
})

export const fetchClass = () => (dispatch, getState) => {
  const url = '/assets/data/classes.json'
  dispatch(fetchClassRequest())
  return fetch(url, {
    method: 'GET',
    mode: 'no-cors'
  })
    .then(res => res.json())
    .then(res => dispatch(fetchClassSuccess(res.data)))
    .catch(error => dispatch(fetchClassFailure(error)))
}
// CREATE_CLASS
export const createClass = (payload) => payloadActions({
  type: CLASS.CREATE,
  payload
})

// UPDATE_CLASS
export const updateClass = (payload) => payloadActions({
  type: CLASS.UPDATE,
  payload
})

// DELETE_CLASS
export const deleteClass = (payload) => payloadActions({
  type: CLASS.DELETE,
  payload
})

import { API } from '../constants'
import { fetchActions, payloadActions } from '../../utils'
import { CLASS } from './classActionTypes'

// FETCH_CLASS
export const fetchClass = () => fetchActions({
  type: CLASS.FETCH,
  API: API.CLASS
})

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

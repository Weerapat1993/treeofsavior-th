import { API } from '../constants'
import { fetchActions, payloadActions } from '../../utils'
import { ATTRIBUTE } from './attributeActionTypes'

// FETCH_ATTRIBUTE
export const fetchAttribute = () => fetchActions({
  type: ATTRIBUTE.FETCH,
  API: API.ATTRIBUTE
})

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

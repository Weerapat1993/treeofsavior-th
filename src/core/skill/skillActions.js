import { API } from '../constants'
import { fetchActions, payloadActions } from '../../utils'
import { SKILL } from './skillActionTypes'

// FETCH_SKILL
export const fetchSkill = () => fetchActions({
  type: SKILL.FETCH,
  API: API.SKILL
})

// CREATE_SKILL
export const createSkill = (payload) => payloadActions({
  type: SKILL.CREATE,
  payload
})

// UPDATE_SKILL
export const updateSkill = (payload) => payloadActions({
  type: SKILL.UPDATE,
  payload
})

// DELETE_SKILL
export const deleteSkill = (payload) => payloadActions({
  type: SKILL.DELETE,
  payload
})

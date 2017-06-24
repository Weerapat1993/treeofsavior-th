
import { payloadActions } from '../../utils'
import { SKILL } from './skillActionTypes'

// FETCH_SKILL
// export const fetchSkill = () => fetchActions({
//   type: SKILL.FETCH,
//   API: API.SKILL
// })

export const fetchSkillRequest = (payload) => ({
  type: SKILL.FETCH.REQUEST,
  payload
})
export const fetchSkillSuccess = (payload) => ({
  type: SKILL.FETCH.SUCCESS,
  payload
})
export const fetchSkillFailure = (payload) => ({
  type: SKILL.FETCH.FAILURE,
  payload
})

export const fetchSkill = () => (dispatch, getState) => {
  const url = '/assets/data/skills.json'
  dispatch(fetchSkillRequest(true))
  return fetch(url, {
    method: 'GET',
    mode: 'no-cors'
  })
    .then(res => res.json())
    .then(res => dispatch(fetchSkillSuccess(res.data)))
    .catch(error => dispatch(fetchSkillFailure(error)))
}

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

import { SKILL } from './skillActionTypes'
import {  
  API_FETCH_SKILL, API_CREATE_SKILL, API_UPDATE_SKILL, API_DELETE_SKILL
} from '../../core/constants'

export const fetchSkillRequest = (payload) => ({
  type: SKILL.FETCH.REQUEST,
  payload
})
export const fetchSkillSuccess = (payload) => ({
  type: SKILL.FETCH.SUCCESS,
  payload
})
export const fetchSkillFailure = (error) => ({
  type: SKILL.FETCH.FAILURE,
  payload: error.message
})

export const fetchSkill = () => (dispatch, getState) => {
  const url = API_FETCH_SKILL
  dispatch(fetchSkillRequest(true))
  return fetch(url)
    .then(res => res.json())
    .then(res => dispatch(fetchSkillSuccess(res.data)))
    .catch(error => dispatch(fetchSkillFailure(error)))
}

// CREATE_SKILL ======================================================
export const createSkillRequest = () => ({
  type: SKILL.CREATE.REQUEST,
})
export const createSkillSuccess = (payload) => ({
  type: SKILL.CREATE.SUCCESS,
  payload
})
export const createSkillFailure = (error) => ({
  type: SKILL.CREATE.FAILURE,
  error: error.message
})

export const createSkill = (payload) => (dispatch, getState) => {
  const url = API_CREATE_SKILL
  dispatch(fetchSkillRequest())
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(res => dispatch(createSkillSuccess(res.data)))
    .catch(error => dispatch(createSkillFailure(error)))
}

// UPDATE_SKILL ======================================================
export const updateSkillRequest = () => ({
  type: SKILL.UPDATE.REQUEST,
})
export const updateSkillSuccess = (payload) => ({
  type: SKILL.UPDATE.SUCCESS,
  payload
})
export const updateSkillFailure = (error, payload) => ({
  type: SKILL.UPDATE.FAILURE,
  error: error.message,
  payload
})

export const updateSkill = (payload) => (dispatch, getState) => {
  const url = API_UPDATE_SKILL
  dispatch(updateSkillRequest())
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then(res => dispatch(updateSkillSuccess(res.data)))
    .catch(error => dispatch(updateSkillFailure(error, payload)))
}

// DELETE_SKILL ======================================================
export const deleteSkillRequest = () => ({
  type: SKILL.DELETE.REQUEST,
})
export const deleteSkillSuccess = (payload) => ({
  type: SKILL.DELETE.SUCCESS,
  payload
})
export const deleteSkillFailure = (error, payload) => ({
  type: SKILL.DELETE.FAILURE,
  error: error.message,
  payload
})

export const deleteSkill = (payload) => (dispatch, getState) => {
  const url = API_DELETE_SKILL
  const body = {
    id: payload
  } 
  dispatch(deleteSkillRequest())
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => dispatch(deleteSkillSuccess(payload)))
    .catch(error => dispatch(deleteSkillFailure(error, payload)))
}

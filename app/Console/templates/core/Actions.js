import { API } from '../constants'
import { fetchActions, payloadActions } from '../../utils'
import { ${name_upper} } from './${name}ActionTypes'

// FETCH_${name_upper}
export const fetch${name_pascal} = () => fetchActions({
  type: ${name_upper}.FETCH,
  API: API.${name_upper}
})

// CREATE_${name_upper}
export const create${name_pascal} = (payload) => payloadActions({
  type: ${name_upper}.CREATE,
  payload
})

// UPDATE_${name_upper}
export const update${name_pascal} = (payload) => payloadActions({
  type: ${name_upper}.UPDATE,
  payload
})

// DELETE_${name_upper}
export const delete${name_pascal} = (payload) => payloadActions({
  type: ${name_upper}.DELETE,
  payload
})

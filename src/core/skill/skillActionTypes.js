import { asyncActionType } from '../../utils'

export const SKILL = {
  FETCH: asyncActionType('FETCH_SKILL'),
  CREATE: asyncActionType('CREATE_SKILL'),
  UPDATE: asyncActionType('UPDATE_SKILL'),
  DELETE: asyncActionType('DELETE_SKILL'),
}

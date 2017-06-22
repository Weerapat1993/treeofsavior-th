import { asyncActionType } from '../../utils'

export const ATTRIBUTE = {
  FETCH: asyncActionType('FETCH_ATTRIBUTE'),
  CREATE: asyncActionType('CREATE_ATTRIBUTE'),
  UPDATE: asyncActionType('UPDATE_ATTRIBUTE'),
  DELETE: asyncActionType('DELETE_ATTRIBUTE'),
}

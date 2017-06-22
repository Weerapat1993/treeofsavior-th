import { asyncActionType } from '../../utils'

export const CLASS = {
  FETCH: asyncActionType('FETCH_CLASS'),
  CREATE: asyncActionType('CREATE_CLASS'),
  UPDATE: asyncActionType('UPDATE_CLASS'),
  DELETE: asyncActionType('DELETE_CLASS'),
}

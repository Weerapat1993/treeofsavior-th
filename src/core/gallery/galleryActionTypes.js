import { asyncActionType } from '../../utils'

export const GALLERY = {
  FETCH: asyncActionType('FETCH_GALLERY'),
  CREATE: asyncActionType('CREATE_GALLERY'),
  UPDATE: asyncActionType('UPDATE_GALLERY'),
  DELETE: asyncActionType('DELETE_GALLERY'),
}

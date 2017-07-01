import { asyncActionType } from '../../utils'

export const ${name_upper} = {
  FETCH: asyncActionType('FETCH_${name_upper}'),
  CREATE: asyncActionType('CREATE_${name_upper}'),
  UPDATE: asyncActionType('UPDATE_${name_upper}'),
  DELETE: asyncActionType('DELETE_${name_upper}'),
}

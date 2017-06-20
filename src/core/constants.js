import { asyncActionType } from '../utils'

//=========================================================
//  CONSTANTS
//---------------------------------------------------------
export const APP_NAME = 'Scale360 React Starter Kit';

//=====================================
//  API
//-------------------------------------
export const API_BASE_URL = 'http://localhost:3000/'

export const API = {
  TASK: 'https://jsonplaceholder.typicode.com/todos?userId=1',
}

//=====================================
//  ACTION_TYPE
//-------------------------------------

export const TASK = {
  FETCH: asyncActionType('FETCH_TASK'),
  CREATE: asyncActionType('CREATE_TASK'),
  UPDATE: asyncActionType('UPDATE_TASK'),
  DELETE: asyncActionType('DELETE_TASK'),
}

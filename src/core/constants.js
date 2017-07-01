


//=========================================================
//  CONSTANTS
//---------------------------------------------------------
export const APP_NAME = 'Tree of Savior Fansite Thailand';

//=====================================
//  API
//-------------------------------------
export const API_BASE_URL = 'http://localhost:8000'


export const API = {
  TASK: 'https://jsonplaceholder.typicode.com/todos?userId=1',
}

export const asset = (path) => `https://treeofsavior-th.com${path}`
export const api = (path) => `${API_BASE_URL}/api${path}`
export const url = (path) => `${path}`

export const API_FETCH_SKILL = api('/skills')
export const API_CREATE_SKILL = api('/skills/store')
export const API_UPDATE_SKILL = api('/skills/update')
export const API_DELETE_SKILL = api('/skills/delete')

export const API_FETCH_ATTRIBUTE = api('/attributes')
export const API_CREATE_ATTRIBUTE = api('/attributes/store')
export const API_UPDATE_ATTRIBUTE = api('/attributes/update')
export const API_DELETE_ATTRIBUTE = api('/attributes/delete')

//=====================================
//  ACTION_TYPE
//-------------------------------------
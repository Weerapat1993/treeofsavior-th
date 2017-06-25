


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

export const api = (path) => `${API_BASE_URL}/api${path}`
export const url = (path) => `${path}`

export const API_FETCH_SKILL = '/assets/data/skills.json'
export const API_CREATE_SKILL = api('/skills/store')
export const API_UPDATE_SKILL = api('/skills/update')

//=====================================
//  ACTION_TYPE
//-------------------------------------
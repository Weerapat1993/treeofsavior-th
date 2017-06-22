import nock from 'nock'
import { mockStore } from '../../store'

// import { API } from '../../constants'
// import { CLASS } from '../../constants';
import { CLASS } from '../classActionTypes';
import { actionRequest, actionSuccess } from '../../../utils'
import { fetchClass } from '../classActions';
import { data } from './data'

const payload = {
  id: 1,
  title: 'Class 101',
  completed: false
}

const actionName = [
  actionRequest(payload, CLASS.FETCH.REQUEST),
  actionRequest(payload, CLASS.CREATE.REQUEST),
  actionRequest(payload, CLASS.UPDATE.REQUEST),
  actionRequest(payload, CLASS.DELETE.REQUEST),
  actionSuccess(payload, CLASS.FETCH.SUCCESS),
  actionSuccess(payload, CLASS.CREATE.SUCCESS),
  actionSuccess(payload, CLASS.UPDATE.SUCCESS),
  actionSuccess(payload, CLASS.DELETE.SUCCESS),
]

const actionTypeName = [
  CLASS.FETCH.REQUEST,
  CLASS.CREATE.REQUEST,
  CLASS.UPDATE.REQUEST,
  CLASS.DELETE.REQUEST,
  CLASS.FETCH.SUCCESS,
  CLASS.CREATE.SUCCESS,
  CLASS.UPDATE.SUCCESS,
  CLASS.DELETE.SUCCESS,
]

describe('Class Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should Class Action '+actionTypeName[i], () => {
      const recieved = actionName[i]
      const expected = {
        type: actionTypeName[i],
        payload
      }
      expect(expected).toEqual(recieved);
    });
  }
});

// Nock API

describe('async actions '+CLASS.FETCH.REQUEST, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() =>{
    nock('https://jsonplaceholder.typicode.com/todos?userId=1')
  })

  it('creates when fetching todos has been done', () => {
    const expected = [
      { type: CLASS.FETCH.REQUEST, payload: true },
      { type: CLASS.FETCH.SUCCESS, payload: data }
    ]
    const store = mockStore({ class: {} })
    const recieved = store.getActions()

    return store.dispatch(fetchClass())
      .then(() => { // return of async actions
        expect(recieved).toEqual(expected)
      })
  })
})

import nock from 'nock'
import { mockStore } from '../../store'

// import { API } from '../../constants'
// import { ${name_upper} } from '../../constants';
import { ${name_upper} } from '../${name}ActionTypes';
import { actionRequest, actionSuccess } from '../../../utils'
import { fetch${name_pascal} } from '../${name}Actions';
import { data } from './data'

const payload = {
  id: 1,
  title: '${name_pascal} 101',
  completed: false
}

const actionName = [
  actionRequest(payload, ${name_upper}.FETCH.REQUEST),
  actionRequest(payload, ${name_upper}.CREATE.REQUEST),
  actionRequest(payload, ${name_upper}.UPDATE.REQUEST),
  actionRequest(payload, ${name_upper}.DELETE.REQUEST),
  actionSuccess(payload, ${name_upper}.FETCH.SUCCESS),
  actionSuccess(payload, ${name_upper}.CREATE.SUCCESS),
  actionSuccess(payload, ${name_upper}.UPDATE.SUCCESS),
  actionSuccess(payload, ${name_upper}.DELETE.SUCCESS),
]

const actionTypeName = [
  ${name_upper}.FETCH.REQUEST,
  ${name_upper}.CREATE.REQUEST,
  ${name_upper}.UPDATE.REQUEST,
  ${name_upper}.DELETE.REQUEST,
  ${name_upper}.FETCH.SUCCESS,
  ${name_upper}.CREATE.SUCCESS,
  ${name_upper}.UPDATE.SUCCESS,
  ${name_upper}.DELETE.SUCCESS,
]

describe('${name_pascal} Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should ${name_pascal} Action '+actionTypeName[i], () => {
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

describe('async actions '+${name_upper}.FETCH.REQUEST, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() =>{
    nock('https://jsonplaceholder.typicode.com/todos?userId=1')
  })

  it('creates when fetching todos has been done', () => {
    const expected = [
      { type: ${name_upper}.FETCH.REQUEST, payload: true },
      { type: ${name_upper}.FETCH.SUCCESS, payload: data }
    ]
    const store = mockStore({ ${name}: {} })
    const recieved = store.getActions()

    return store.dispatch(fetch${name_pascal}())
      .then(() => { // return of async actions
        expect(recieved).toEqual(expected)
      })
  })
})

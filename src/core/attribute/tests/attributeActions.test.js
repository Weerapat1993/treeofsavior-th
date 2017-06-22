import nock from 'nock'
import { mockStore } from '../../store'

// import { API } from '../../constants'
// import { ATTRIBUTE } from '../../constants';
import { ATTRIBUTE } from '../attributeActionTypes';
import { actionRequest, actionSuccess } from '../../../utils'
import { fetchAttribute } from '../attributeActions';
import { data } from './data'

const payload = {
  id: 1,
  title: 'Attribute 101',
  completed: false
}

const actionName = [
  actionRequest(payload, ATTRIBUTE.FETCH.REQUEST),
  actionRequest(payload, ATTRIBUTE.CREATE.REQUEST),
  actionRequest(payload, ATTRIBUTE.UPDATE.REQUEST),
  actionRequest(payload, ATTRIBUTE.DELETE.REQUEST),
  actionSuccess(payload, ATTRIBUTE.FETCH.SUCCESS),
  actionSuccess(payload, ATTRIBUTE.CREATE.SUCCESS),
  actionSuccess(payload, ATTRIBUTE.UPDATE.SUCCESS),
  actionSuccess(payload, ATTRIBUTE.DELETE.SUCCESS),
]

const actionTypeName = [
  ATTRIBUTE.FETCH.REQUEST,
  ATTRIBUTE.CREATE.REQUEST,
  ATTRIBUTE.UPDATE.REQUEST,
  ATTRIBUTE.DELETE.REQUEST,
  ATTRIBUTE.FETCH.SUCCESS,
  ATTRIBUTE.CREATE.SUCCESS,
  ATTRIBUTE.UPDATE.SUCCESS,
  ATTRIBUTE.DELETE.SUCCESS,
]

describe('Attribute Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should Attribute Action '+actionTypeName[i], () => {
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

describe('async actions '+ATTRIBUTE.FETCH.REQUEST, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() =>{
    nock('https://jsonplaceholder.typicode.com/todos?userId=1')
  })

  it('creates when fetching todos has been done', () => {
    const expected = [
      { type: ATTRIBUTE.FETCH.REQUEST, payload: true },
      { type: ATTRIBUTE.FETCH.SUCCESS, payload: data }
    ]
    const store = mockStore({ attribute: {} })
    const recieved = store.getActions()

    return store.dispatch(fetchAttribute())
      .then(() => { // return of async actions
        expect(recieved).toEqual(expected)
      })
  })
})

import nock from 'nock'
import { mockStore } from '../../store'

// import { API } from '../../constants'
// import { SKILL } from '../../constants';
import { SKILL } from '../skillActionTypes';
import { actionRequest, actionSuccess } from '../../../utils'
import { fetchSkill } from '../skillActions';
import { data } from './data'

const payload = {
  id: 1,
  title: 'Skill 101',
  completed: false
}

const actionName = [
  actionRequest(payload, SKILL.FETCH.REQUEST),
  actionRequest(payload, SKILL.CREATE.REQUEST),
  actionRequest(payload, SKILL.UPDATE.REQUEST),
  actionRequest(payload, SKILL.DELETE.REQUEST),
  actionSuccess(payload, SKILL.FETCH.SUCCESS),
  actionSuccess(payload, SKILL.CREATE.SUCCESS),
  actionSuccess(payload, SKILL.UPDATE.SUCCESS),
  actionSuccess(payload, SKILL.DELETE.SUCCESS),
]

const actionTypeName = [
  SKILL.FETCH.REQUEST,
  SKILL.CREATE.REQUEST,
  SKILL.UPDATE.REQUEST,
  SKILL.DELETE.REQUEST,
  SKILL.FETCH.SUCCESS,
  SKILL.CREATE.SUCCESS,
  SKILL.UPDATE.SUCCESS,
  SKILL.DELETE.SUCCESS,
]

describe('Skill Actions', () => {
  for (let i = 0; i < actionName.length; i++) {
    it('should Skill Action '+actionTypeName[i], () => {
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

describe('async actions '+SKILL.FETCH.REQUEST, () => {
  afterEach(() => {
    nock.cleanAll()
  })

  beforeEach(() =>{
    nock('https://jsonplaceholder.typicode.com/todos?userId=1')
  })

  it('creates when fetching todos has been done', () => {
    const expected = [
      { type: SKILL.FETCH.REQUEST, payload: true },
      { type: SKILL.FETCH.SUCCESS, payload: data }
    ]
    const store = mockStore({ skill: {} })
    const recieved = store.getActions()

    return store.dispatch(fetchSkill())
      .then(() => { // return of async actions
        expect(recieved).toEqual(expected)
      })
  })
})

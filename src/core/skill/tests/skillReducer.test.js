// import { SKILL } from '../../constants';
import { SKILL } from '../skillActionTypes';
import { skillReducer } from '../skillReducer'
import { loadingData, fetchData, createData, updateData, deleteData } from '../../../utils'

const initialState = {
  loading: false,
  data: [
    {
      id: 1,
      title: 'Skill 101',
      completed: true
    }
  ]
}

const payload = {
  request: true,
  failure: false,
  fetch: initialState,
  create: { id: 2, title: 'Skill 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: 'Skill 107', completed: false },
  delete: 1
}

const actionTypeName = [
  SKILL.FETCH.REQUEST,
  SKILL.FETCH.FAILURE,
  SKILL.FETCH.SUCCESS,
  SKILL.CREATE.SUCCESS,
  SKILL.UPDATE.SUCCESS,
  SKILL.UPDATE.SUCCESS,
  SKILL.DELETE.SUCCESS,
]

const expected_array = [
  loadingData,
  loadingData,
  fetchData,
  createData,
  updateData,
  updateData,
  deleteData,
]

const type = ['request','failure','fetch','create','completed','update','delete']

describe('Skill Reducers', () => {
  for (let i = 0; i < actionTypeName.length; i++) {
    it('should Skill Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = skillReducer(initialState, action)
      const expected = expected_array[i](initialState, action)
      expect(recieved).toEqual(expected)
    });
  }
});

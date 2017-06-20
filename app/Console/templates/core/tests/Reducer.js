// import { ${name_upper} } from '../../constants';
import { ${name_upper} } from '../${name}ActionTypes';
import { ${name}Reducer } from '../${name}Reducer'
import { loadingData, fetchData, createData, updateData, deleteData } from '../../../utils'

const initialState = {
  loading: false,
  data: [
    {
      id: 1,
      title: '${name_pascal} 101',
      completed: true
    }
  ]
}

const payload = {
  request: true,
  failure: false,
  fetch: initialState,
  create: { id: 2, title: '${name_pascal} 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: '${name_pascal} 107', completed: false },
  delete: 1
}

const actionTypeName = [
  ${name_upper}.FETCH.REQUEST,
  ${name_upper}.FETCH.FAILURE,
  ${name_upper}.FETCH.SUCCESS,
  ${name_upper}.CREATE.SUCCESS,
  ${name_upper}.UPDATE.SUCCESS,
  ${name_upper}.UPDATE.SUCCESS,
  ${name_upper}.DELETE.SUCCESS,
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

describe('${name_pascal} Reducers', () => {
  for (let i = 0; i < actionTypeName.length; i++) {
    it('should ${name_pascal} Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = ${name}Reducer(initialState, action)
      const expected = expected_array[i](initialState, action)
      expect(recieved).toEqual(expected)
    });
  }
});

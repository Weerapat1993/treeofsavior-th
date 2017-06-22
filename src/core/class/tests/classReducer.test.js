// import { CLASS } from '../../constants';
import { CLASS } from '../classActionTypes';
import { classReducer } from '../classReducer'
import { loadingData, fetchData, createData, updateData, deleteData } from '../../../utils'

const initialState = {
  loading: false,
  data: [
    {
      id: 1,
      title: 'Class 101',
      completed: true
    }
  ]
}

const payload = {
  request: true,
  failure: false,
  fetch: initialState,
  create: { id: 2, title: 'Class 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: 'Class 107', completed: false },
  delete: 1
}

const actionTypeName = [
  CLASS.FETCH.REQUEST,
  CLASS.FETCH.FAILURE,
  CLASS.FETCH.SUCCESS,
  CLASS.CREATE.SUCCESS,
  CLASS.UPDATE.SUCCESS,
  CLASS.UPDATE.SUCCESS,
  CLASS.DELETE.SUCCESS,
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

describe('Class Reducers', () => {
  for (let i = 0; i < actionTypeName.length; i++) {
    it('should Class Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = classReducer(initialState, action)
      const expected = expected_array[i](initialState, action)
      expect(recieved).toEqual(expected)
    });
  }
});

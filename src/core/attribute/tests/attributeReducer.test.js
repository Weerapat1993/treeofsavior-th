// import { ATTRIBUTE } from '../../constants';
import { ATTRIBUTE } from '../attributeActionTypes';
import { attributeReducer } from '../attributeReducer'
import { loadingData, fetchData, createData, updateData, deleteData } from '../../../utils'

const initialState = {
  loading: false,
  data: [
    {
      id: 1,
      title: 'Attribute 101',
      completed: true
    }
  ]
}

const payload = {
  request: true,
  failure: false,
  fetch: initialState,
  create: { id: 2, title: 'Attribute 102', completed: false },
  completed: { key: 1, completed: true },
  update: { id: 1, title: 'Attribute 107', completed: false },
  delete: 1
}

const actionTypeName = [
  ATTRIBUTE.FETCH.REQUEST,
  ATTRIBUTE.FETCH.FAILURE,
  ATTRIBUTE.FETCH.SUCCESS,
  ATTRIBUTE.CREATE.SUCCESS,
  ATTRIBUTE.UPDATE.SUCCESS,
  ATTRIBUTE.UPDATE.SUCCESS,
  ATTRIBUTE.DELETE.SUCCESS,
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

describe('Attribute Reducers', () => {
  for (let i = 0; i < actionTypeName.length; i++) {
    it('should Attribute Reducer : '+actionTypeName[i], () => {
      const action = {
        type: actionTypeName[i],
        payload: payload[type[i]]
      }
      const recieved = attributeReducer(initialState, action)
      const expected = expected_array[i](initialState, action)
      expect(recieved).toEqual(expected)
    });
  }
});

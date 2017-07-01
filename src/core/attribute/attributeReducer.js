import { ATTRIBUTE } from './attributeActionTypes'
import { 
  reducerFetchAttributeRequest, reducerFetchAttributeSuccess, reducerFetchAttributeFailure,
  reducerCreateAttributeRequest, reducerCreateAttributeSuccess, reducerCreateAttributeFailure,
  reducerUpdateAttributeRequest, reducerUpdateAttributeSuccess, reducerUpdateAttributeFailure,
  reducerDeleteAttributeRequest, reducerDeleteAttributeSuccess, reducerDeleteAttributeFailure
} from './attributeFunction'

const initialState = {
  data: [],
  isFetching: false,
  error: false
};

export const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_ATTRIBUTE_SUCCESS: ================================
    case ATTRIBUTE.FETCH.REQUEST:
      return reducerFetchAttributeRequest(state, action)
    case ATTRIBUTE.FETCH.SUCCESS:
      return reducerFetchAttributeSuccess(state, action)
    case ATTRIBUTE.FETCH.FAILURE:
      return reducerFetchAttributeFailure(state, action)
    // CREATE_ATTRIBUTE: ================================
    case ATTRIBUTE.CREATE.REQUEST:
      return reducerCreateAttributeRequest(state, action)
    case ATTRIBUTE.CREATE.SUCCESS:
      return reducerCreateAttributeSuccess(state, action)
    case ATTRIBUTE.CREATE.FAILURE:
      return reducerCreateAttributeFailure(state, action)
    // UPDATE_ATTRIBUTE_SUCCESS: ================================
    case ATTRIBUTE.UPDATE.REQUEST:
      return reducerUpdateAttributeRequest(state, action)
    case ATTRIBUTE.UPDATE.SUCCESS:
      return reducerUpdateAttributeSuccess(state, action)
    case ATTRIBUTE.UPDATE.FAILURE:
      return reducerUpdateAttributeFailure(state, action)
    // UPDATE_ATTRIBUTE_SUCCESS: ================================
    case ATTRIBUTE.DELETE.REQUEST:
      return reducerDeleteAttributeRequest(state, action)
    case ATTRIBUTE.DELETE.SUCCESS:
      return reducerDeleteAttributeSuccess(state, action)
    case ATTRIBUTE.DELETE.FAILURE:
      return reducerDeleteAttributeFailure(state, action)
    // DEFAULT: ================================
    default:
      return state
  }
}

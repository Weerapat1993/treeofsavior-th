import { ${name_upper} } from './${name}ActionTypes'
import { 
  reducerFetch${name_pascal}Request, reducerFetch${name_pascal}Success, reducerFetch${name_pascal}Failure,
  reducerCreate${name_pascal}Request, reducerCreate${name_pascal}Success, reducerCreate${name_pascal}Failure,
  reducerUpdate${name_pascal}Request, reducerUpdate${name_pascal}Success, reducerUpdate${name_pascal}Failure,
  reducerDelete${name_pascal}Request, reducerDelete${name_pascal}Success, reducerDelete${name_pascal}Failure
} from './${name}Function'

const initialState = {
  data: [],
  isFetching: false,
  error: false
};

export const ${name}Reducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_${name_upper}_SUCCESS: ================================
    case ${name_upper}.FETCH.REQUEST:
      return reducerFetch${name_pascal}Request(state, action)
    case ${name_upper}.FETCH.SUCCESS:
      return reducerFetch${name_pascal}Success(state, action)
    case ${name_upper}.FETCH.FAILURE:
      return reducerFetch${name_pascal}Failure(state, action)
    // CREATE_${name_upper}: ================================
    case ${name_upper}.CREATE.REQUEST:
      return reducerCreate${name_pascal}Request(state, action)
    case ${name_upper}.CREATE.SUCCESS:
      return reducerCreate${name_pascal}Success(state, action)
    case ${name_upper}.CREATE.FAILURE:
      return reducerCreate${name_pascal}Failure(state, action)
    // UPDATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.UPDATE.REQUEST:
      return reducerUpdate${name_pascal}Request(state, action)
    case ${name_upper}.UPDATE.SUCCESS:
      return reducerUpdate${name_pascal}Success(state, action)
    case ${name_upper}.UPDATE.FAILURE:
      return reducerUpdate${name_pascal}Failure(state, action)
    // UPDATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.DELETE.REQUEST:
      return reducerDelete${name_pascal}Request(state, action)
    case ${name_upper}.DELETE.SUCCESS:
      return reducerDelete${name_pascal}Success(state, action)
    case ${name_upper}.DELETE.FAILURE:
      return reducerDelete${name_pascal}Failure(state, action)
    // DEFAULT: ================================
    default:
      return state
  }
}

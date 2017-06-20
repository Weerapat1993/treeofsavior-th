import { loadingData, fetchData, createData, updateData, deleteData } from '../../utils'
// import { ${name_upper} } from '../constants'
import { ${name_upper} } from './${name}ActionTypes'

const initialState = {
  data: [],
  loading: true
};

export const ${name}Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ${name_upper}.FETCH.REQUEST:
    case ${name_upper}.CREATE.REQUEST:
    case ${name_upper}.UPDATE.REQUEST:
    case ${name_upper}.DELETE.REQUEST:
    case ${name_upper}.FETCH.FAILURE:
    case ${name_upper}.CREATE.FAILURE:
    case ${name_upper}.UPDATE.FAILURE:
    case ${name_upper}.DELETE.FAILURE:
      return loadingData(state, action)
    // FETCH_${name_upper}_SUCCESS: ================================
    case ${name_upper}.FETCH.SUCCESS:
      return fetchData(state,action)
    // CREATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.CREATE.SUCCESS:
      return createData(state,action)
    // UPDATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.UPDATE.SUCCESS:
      return updateData(state,action)
    // CREATE_${name_upper}_SUCCESS: ================================
    case ${name_upper}.DELETE.SUCCESS:
      return deleteData(state,action)
    // DEFAULT: ================================
    default:
      return state
  }
}


/**
 * LOADING DATA
 * @param {*} state
 * @param {*} action
 */
export function loadingData(state, action) {
  return {
    data: state.data,
    loading: action.payload,
    error: false
  }
}

/**
 * FETCH API DATA
 * @param {*} state
 * @param {*} action
 */
export function fetchData(state,action) {
  return {
    loading: false,
    data: action.payload,
    error: false
  }
}

/**
 * Create new data
 * @param {*} state
 * @param {*} action
 */
export function createData(state,action) {
  return {
    loading: false,
    data: [
      ...state.data,
      action.payload,
    ],
    error: false
  }
}

/**
 * Update Data (item.key)
 * @param {*} state
 * @param {*} action
 */
export function updateData(state,action) {
  let news = state.data.filter((item) => action.payload.id === item.id)
  let newData = Object.assign({}, news[0], action.payload)
  let newState = state.data
  newState.forEach((item,i) => {
    if(newData.id === item.id){
      newState[i] = newData
    }
  })
  return {
    loading: false,
    data: newState,
    error: false
  };
}

/**
 * Remove Data (item.key)
 * @param {*} state
 * @param {*} action
 */
export function deleteData(state,action) {
  return {
    loading: false,
    data: state.data.filter((item) => action.payload !== item.id),
    error: action.error.message
  }
}

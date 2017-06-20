
export const actionRequest = (payload, type) => ({ payload, type })
export const actionSuccess = (payload, type) => ({ payload, type })
export const actionFailure = (payload, type) => ({ payload, type })

export const fetchActions = (data) => (dispatch, getState) => {
  dispatch(actionRequest(true, data.type.REQUEST))
  return fetch(data.API)
    .then(res => res.json())
    .then(res => dispatch(actionSuccess(res, data.type.SUCCESS)))
    .catch(error => dispatch(actionFailure(false, data.type.FAILURE, error)))
}

export const payloadActions = (data) => (dispatch, getState) => {
  dispatch(actionRequest(true, data.type.REQUEST))
  dispatch(actionSuccess(data.payload, data.type.SUCCESS))
}

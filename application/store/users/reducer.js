import * as types from './types'

const initialState = {
  data: [],
  info: { page: 0, seed: null },
  loadError: null,
  loadMoreError: null,
  loadingData: false,
  loadingMore: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_OK:
      return {
        ...state,
        data: action.response.results,
        info: action.response.info,
        loadError: null,
        loadingData: false
      }
    case types.FETCH_USERS_ERR:
      return {
        ...state,
        loadError: action.error.message,
        loadingData: false
      }
    case types.FETCH_USERS_NEXT_OK:
      return {
        ...state,
        data: [ ...state.data, ...action.response.results ],
        info: action.response.info,
        loadingMore: false
      }
    case types.FETCH_USERS_NEXT_ERR:
      return {
        ...state,
        loadMoreError: action.error.message
      }
    case types.FETCHING_USERS:
      return {
        ...state,
        loadingData: true
      }
    case types.FETCHING_USERS_NEXT:
      return {
        ...state,
        loadingMore: true
      }
    case types.REFRESH_USERS:
      return {
        ...state,
        info: { ...state.info, page: 0 }
      }
    default:
      return state
  }
}

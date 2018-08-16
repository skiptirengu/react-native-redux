const initialState = {
  data: [],
  info: {},
  loadError: null,
  loadMoreError: null,
  loadingData: false,
  loadingMore: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_OK':
      return {
        ...state,
        data: action.response.results,
        info: action.response.info,
        loadError: null,
        loadingData: false
      }
    case 'FETCH_USERS_ERR':
      return {
        ...state,
        loadError: action.error.message,
        loadingData: false
      }
    case 'FETCH_USERS_NEXT_OK':
      return {
        ...state,
        data: [
          ...state.data,
          ...action.response.results
        ]
      }
    case 'FETCH_USERS_NEXT_ERR':
      return {
        ...state,
        loadMoreError: action.error.message
      }
    case 'FETCHING_USERS':
      return {
        ...state,
        loadingData: true
      }
    case 'FETCHING_USERS_NEXT':
      return {
        ...state,
        loadingMore: true
      }
    default:
      return state
  }
}

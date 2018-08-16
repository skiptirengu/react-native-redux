import api from '../../api'
import * as types from './types'

const fetchUsersOK = (response, type) => ({
  type,
  response
})

const fetchUsersErr = (error, type) => ({
  type,
  error
})

const fetchingUsers = (type) => ({
  type
})

const isFirstFetch = (state) => {
  return state.info.page === 0
}

const isLoadingData = (state) => {
  return state.loadingData || state.loadingMore
}

/**
 * Fetch the fist page of users
 * @param dispatch
 * @param state
 * @return {Promise<void>}
 */
async function fetchFirstPage (dispatch, state) {
  try {
    dispatch(fetchingUsers(types.FETCHING_USERS))
    dispatch(fetchUsersOK(await api.users.fetchUsers(1), types.FETCH_USERS_OK))
  } catch (error) {
    dispatch(fetchUsersErr(error, types.FETCH_USERS_ERR))
  }
}

/**
 * Fetch the next page of users
 * @param dispatch
 * @param state
 * @return {Promise<void>}
 */
async function fetchNextPage (dispatch, state) {
  const { page, seed } = state.info

  try {
    dispatch(fetchingUsers(types.FETCHING_USERS_NEXT))
    dispatch(fetchUsersOK(await api.users.fetchUsers(page + 1, seed), types.FETCH_USERS_NEXT_OK))
  } catch (error) {
    dispatch(fetchUsersErr(error, types.FETCH_USERS_NEXT_ERR))
  }
}

export const getUsers = () => async (dispatch, getState) => {
  const { users } = getState()

  if (isLoadingData(users)) {
    return Promise.resolve()
  }

  if (isFirstFetch(users)) {
    return fetchFirstPage(dispatch, users)
  } else {
    return fetchNextPage(dispatch, users)
  }
}

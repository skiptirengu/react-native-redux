import api from '../../api'

const usersOK = (response) => ({
  type: 'FETCH_USERS_OK',
  response
})

const usersErr = (error) => ({
  type: 'FETCH_USERS_ERR',
  error
})

const fetchingUsers = () => ({
  type: 'FETCHING_USERS'
})

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(fetchingUsers())
    const response = await api.users.fetchUsers()
    dispatch(usersOK(response))
  } catch (error) {
    dispatch(usersErr(error))
  }
}

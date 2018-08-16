import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
import UsersContainer from './containers/users'

export default () => {
  return (
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  )
}

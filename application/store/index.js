import { applyMiddleware, compose, createStore } from 'redux'
import { logger } from 'redux-logger'
import rootReducer from './reducers.js'
import thunk from 'redux-thunk'

const middleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default compose(applyMiddleware(...middleware))(createStore)(rootReducer)

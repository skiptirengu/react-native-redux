import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers.js'
import thunk from 'redux-thunk'

export default createStore(rootReducer, applyMiddleware(thunk))

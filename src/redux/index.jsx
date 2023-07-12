import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userInfoReducer from './userInfo'
import panelReducer from './panel'

export default createStore(combineReducers({
  userInfoReducer,
  panelReducer
}), applyMiddleware(thunk))
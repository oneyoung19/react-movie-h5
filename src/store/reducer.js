import { combineReducers } from 'redux'
import goodsReducer from '../Mall/store/reducer'
const defaultState = {
  initValue: '111'
}

const globalReducer = (state = defaultState, action) => {
  console.log({state})
  return state
}

//  combineReducers函数需要传入的是一个对象
export default combineReducers({
  globalReducer,
  goodsReducer
})

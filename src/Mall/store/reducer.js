import { SETGOODSINFO } from './actionTypes'

const defaultState = {
  // 当前选中卖品的信息
  goodsInfo: {}
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === SETGOODSINFO) {
    newState.goodsInfo = action.value
    return newState
  }
  return newState
}

import { SETGOODSINFO, SETTOTALMONEY } from './actionTypes'

const defaultState = {
  // 当前选中卖品的信息
  goodsInfo: {},
  // 金额
  totalMoney: 0
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === SETGOODSINFO) {
    newState.goodsInfo = action.value
    return newState
  }
  if (action.type === SETTOTALMONEY) {
    newState.totalMoney += action.value
    return newState
  }
  return newState
}

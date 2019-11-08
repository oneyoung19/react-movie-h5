import { SETGOODSINFO, SETTOTALMONEY, MINUSTOTALMONEY, PLUSTOTALMONEY } from './actionTypes'

// 创建一个函数，内部返回对象，之所以这样做是为了对所有的action统一管理，方便维护
export const setGoodsInfo = (value) => {
  // action是一个对象
  return {
    type: SETGOODSINFO,
    value
  }
}

export const setTotalMoney = (value) => {
  // action是一个对象
  return {
    type: SETTOTALMONEY,
    value
  }
}

export const minusTotalMoney = (value) => {
  // action是一个对象
  return {
    type: MINUSTOTALMONEY,
    value
  }
}

export const plusTotalMoney = (value) => {
  // action是一个对象
  return {
    type: PLUSTOTALMONEY,
    value
  }
}

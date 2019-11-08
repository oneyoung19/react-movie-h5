import { SETGOODSINFO } from './actionTypes'

// 创建一个函数，内部返回对象，之所以这样做是为了对所有的action统一管理，方便维护
export const setGoodsInfo = (value) => {
  // action是一个对象
  return {
    type: SETGOODSINFO,
    value
  }
}

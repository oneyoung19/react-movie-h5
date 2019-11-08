import axios from '../utils/http'

// 热映电影
export function getHitFilms (params) {
  return axios({
    method: 'get',
    url: '/getHitFilms',
    params
  })
}

// 预售电影
export function getFutureFilms (params) {
  return axios({
    method: 'get',
    url: '/getFutureFilms',
    params
  })
}

// 广告位
export function getAds (data) {
  return axios({
    method: 'post',
    url: '/getAds',
    data
  })
}

// 活动页列表
export function getActivities (data) {
  return axios({
    method: 'post',
    url: '/getActivities',
    data
  })
}

// 卖品列表
export function getGoods (data) {
  return axios({
    method: 'post',
    url: '/getGoods',
    data
  })
}

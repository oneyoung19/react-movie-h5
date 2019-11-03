import axios from '../utils/http'

export function getHitFilms (params) {
  return axios({
    method: 'get',
    url: '/getHitFilms',
    params
  })
}

export function getFutureFilms (params) {
  return axios({
    method: 'get',
    url: '/getFutureFilms',
    params
  })
}




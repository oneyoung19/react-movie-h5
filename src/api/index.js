import axios from '../utils/http'

export function getHitFilms (data) {
  return axios({
    method: 'get',
    url: '/getHitFilms',
    data
  })
}




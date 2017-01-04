// this is aliased in webpack config based on server/client build
// import api from 'create-api'

import axios from 'axios'

const apiBase = 'http://localhost:8081/v1/chat'
// const apiBase = 'https://agile-plains-95079.herokuapp.com/v1/chat'

export function fetchResponse (message) {
  return axios.get(`${apiBase}?message=${message}`)
    .catch(error => {
      console.log(error)
    })
}

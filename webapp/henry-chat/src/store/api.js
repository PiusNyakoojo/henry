// this is aliased in webpack config based on server/client build
// import api from 'create-api'

import axios from 'axios'

const apiBase = 'https://agile-plains-95079.herokuapp.com/v1/chat'

export function fetchResponse (message) {
  return axios.get(`${apiBase}?message=${message}`)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

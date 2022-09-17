import axios from 'axios'

const api = axios.create({

  baseURL: 'https://ligasp2as2.herokuapp.com/api',
  timeout: 1550000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  },
})

export default api
import axios from 'axios'

const request1 = axios.create({
  baseURL: 'http://127.0.0.1',
  method: 'get'
})

export default { request1 }

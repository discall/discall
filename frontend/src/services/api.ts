import axios from 'axios'
import { BASE_URL } from './base'
import { getToken } from './localStorage'

const api = axios.create({ baseURL: `${BASE_URL}/api` })

api.interceptors.request.use(config => {
  const token = getToken()
  return {
    ...config,
    headers: token
      ? { ...config.headers, Authorization: `Bearer ${token}` }
      : config.headers,
  }
})

export default api

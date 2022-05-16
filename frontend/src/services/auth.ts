import axios from 'axios'
import { User } from '../utils/types'
import { BASE_URL } from './base'
import { getToken } from './localStorage'

const auth = axios.create({ baseURL: `${BASE_URL}/auth` })

auth.interceptors.request.use(config => {
  const token = getToken()
  return {
    ...config,
    headers: token
      ? { ...config.headers, Authorization: `Bearer ${token}` }
      : config.headers,
  }
})

interface SignUpReq {
  name: string
  email: string
  password: string
  resume: string
}

interface UserRes {
  user: User
}

export const signUp = async (userData: SignUpReq) => {
  const { data } = await auth.post<UserRes>('/signup', userData)
  return data.user
}

export interface SignInReq {
  email: string
  password: string
}

interface TokenRes {
  token: string
}

export const signIn = async (userData: SignInReq) => {
  console.log(userData)
  const { data } = await auth.post<TokenRes & UserRes>('/signin', userData)
  return data
}

export const refreshToken = async () => {
  const { data } = await auth.post<TokenRes>('/refresh')
  return data.token
}

export const me = async () => {
  const { data } = await auth.post<UserRes>('/me')
  return data.user
}

const authService = {
  signUp,
  signIn,
  refreshToken,
  me,
}

export default authService

import { User } from '../utils/types'

export const getToken = () => {
  const token = localStorage.getItem('user.token')
  return token
}

export const setToken = (token: string) => {
  localStorage.setItem('user.token', token)
}

export const clearToken = () => {
  localStorage.removeItem('user.token')
}

export const getUserData = () => {
  const userData = localStorage.getItem('user.data')
  return userData ? (JSON.parse(userData) as User) : null
}

export const setUserData = (userData: User) => {
  localStorage.setItem('user.data', JSON.stringify(userData))
}

export const clearUserData = () => {
  localStorage.removeItem('user.data')
}

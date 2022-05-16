import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService, { SignInReq } from '../services/auth'
import {
  clearToken,
  clearUserData,
  getUserData,
  setToken,
  setUserData,
} from '../services/localStorage'
import { User } from '../utils/types'

interface AuthContext {
  user: User | null
  signIn: (userData: SignInReq) => Promise<void>
}

export const authContext = createContext({} as AuthContext)

interface Props {
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(getUserData())

  const navigate = useNavigate()

  const signIn = async (userData: SignInReq) => {
    const { user, token } = await authService.signIn(userData)
    setToken(token)
    setUser(user)
    setUserData(user)
  }

  useEffect(() => {
    if (!user) {
      clearToken()
      clearUserData()
      navigate('/')
    }
  }, [navigate, user])

  return (
    <authContext.Provider value={{ user, signIn }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext)

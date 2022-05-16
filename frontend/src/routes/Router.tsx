import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import RegisterPage from '../pages/RegisterPage'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<LoginPage />} path="/" />
          <Route path="main">
            <Route index element={<MainPage />} />
            <Route path=":groupId" element={<MainPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Router

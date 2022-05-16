import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<MainPage />} path="/main" />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas

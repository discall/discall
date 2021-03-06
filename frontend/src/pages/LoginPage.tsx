import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useAuth } from '../contexts/AuthContext'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn } = useAuth()

  const navigate = useNavigate()

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault()
    setError('')

    try {
      await signIn({ email, password })
      navigate('/main')
    } catch (error) {
      setError('Email ou senha incorretos')
    }
  }

  return (
    <>
      <Header />
      <div
        style={{
          width: '100%',
          backgroundColor: '#091C32',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            borderRadius: '20px',
            marginTop: '100px',
            padding: '40px',
            backgroundColor: '#223C5B',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1 style={{ color: 'white', textAlign: 'center' }}>Login</h1>
          {error && (
            <p style={{ color: '#c95243', textAlign: 'center' }}>{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label style={{ color: 'white', fontSize: '22px' }}>
                  Email
                </label>
              </div>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ borderRadius: '5px', height: '30px', width: '100%' }}
              />
            </div>
            <div>
              <div>
                <label style={{ color: 'white', fontSize: '22px' }}>
                  Senha
                </label>
              </div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  borderRadius: '5px',
                  height: '30px',
                }}
              ></input>
              <button
                type="submit"
                style={{
                  color: 'white',
                  backgroundColor: '#4A6488',
                  borderRadius: '5px',
                  height: '40px',
                  width: '100%',
                  marginTop: '20px',
                  fontSize: '22px',
                }}
              >
                Entrar
              </button>
              <Link to="/register" style={{ color: 'white', fontSize: '16px' }}>
                Cadastre-se
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default App

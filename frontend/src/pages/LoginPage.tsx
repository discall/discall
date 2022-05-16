import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div
        style={{
          height: '900px',
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
            height: '340px',
            width: '500px',
            backgroundColor: '#223C5B',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
          }}
        >
          <h1 style={{ color: 'white', textAlign: 'center' }}>Login</h1>
          <form action="">
            <div>
              <div>
                <label style={{ color: 'white', fontSize: '22px' }}>
                  Email
                </label>
              </div>
              <input
                style={{ borderRadius: '5px', height: '30px', width: '100%' }}
              ></input>
            </div>
            <div>
              <div>
                <label style={{ color: 'white', fontSize: '22px' }}>
                  Senha
                </label>
              </div>
              <input
                type={'password'}
                style={{
                  width: '100%',
                  borderRadius: '5px',
                  height: '30px',
                }}
              ></input>
              <button
                onClick={() => navigate('/main')}
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
              <a href="" style={{ color: 'white', fontSize: '16px' }}>
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default App

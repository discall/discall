import React from 'react'
import './App.css'
import Message from './components/Message'

function App() {
  return (
    <div>
      {/* <Header/>
        <div style={{height:'900px',width:'100%', backgroundColor:'#091C32', justifyContent:'center', display:'flex'}}>
          <div style={{borderRadius:'20px',marginTop:'100px', height:'340px',width:'500px', backgroundColor:'#223C5B', display:'flex', flexDirection:'column', padding:'30px'}}>
          <h1 style={{color:'white', marginLeft:'210px'}}>Login</h1>
          <form action="">
            <div>
            <div><label style={{color:'white', fontSize:'22px'}}>Email</label></div>
            <input style={{borderRadius:'5px', height: '30px', width:'500px'}}></input>
            </div>
            <div>
            <div><label style={{color:'white', fontSize:'22px'}}>Senha</label></div>
            <input type={'password'} style={{borderRadius:'5px', height: '30px', width:'500px'}}></input>
            <button style={{color:'white',backgroundColor:'#4A6488',borderRadius:'5px', height: '40px', width:'508px', marginTop:'20px', fontSize:'22px'}}>Entrar</button>
            <a href="" style={{color:'white', fontSize:'16px'}}>Cadastre-se</a>
            </div>


          </form>
          </div>

        </div> */}
      <Message
        username={'alfredo'}
        message={'sadiojasdfoidsjfoijsdiofjsoidfjiosdfjiosdfjoisfjoisdfj'}
      />
    </div>
  )
}
export default App

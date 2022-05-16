import React from 'react';
import logo from '../assets/logo.png';

function Header(){
    return(
        <div style={{height:'90px',width:'100%', backgroundColor:'#4A6488', justifyContent:'center', display:'flex'}}>
            <img src={logo} style={{height:'110px'}}/>
            <h1 style={{color:'white',fontFamily:''}}>Discall</h1>
        </div>
    )
}
export default Header;
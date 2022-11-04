import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login'>
        <div className='login-container'>
            <img className='login-logo' src='./Apple-logo.png' alt='' />
            <p className='login-name'>WD</p>
            <button className='login-btn'>
                <img src='./google-logo.png' alt='Google Login' />
                Login With Google
            </button>
        </div>
    </div>
  )
}

export default Login
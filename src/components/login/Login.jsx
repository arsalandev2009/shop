import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mailIcon from '../../assets/mail-icon.png'
import passwordIcon from '../../assets/password-icon.png'
import welcomehandIcon from '../../assets/welcome-hand-icon.png'
import './Login.css'

function Login() {

  return (
   <div class="right">
        <div class="right-content1">
          <p class="right-content1-1">
            Welcome Back
            <img src={welcomehandIcon} alt="" width="50px" />
          </p>
          <p class="right-content1-2">Login to continue to your account</p>
        </div>

        <form class="right-content2">
          <label>Email Address</label>
          <div class="input">
            <img src={mailIcon} alt="" width="25px" />
            <input type="email" placeholder="Enter your email" required />
          </div>
          <label>Password</label>
          <div class="input">
            <img src={passwordIcon} alt="" width="25px" />
            <input type="password" placeholder="Enter your password" required />
          </div>
          <Link to="/forget" className='Link'>Forgot Password !</Link>
         <Link to="/home" className='btn'>
        Login
         </Link>

        </form>

        <div class="right-content3">
          <Link to="/signup" className='Link'>
            Don't have an account ? Click here
          </Link>
        </div>
      </div>
  )
}

export default Login
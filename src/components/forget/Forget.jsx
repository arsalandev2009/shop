import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mailIcon from '../../assets/mail-icon.png'
import welcomehandIcon from '../../assets/welcome-hand-icon.png'
import './Forget.css'

function Forget() {
  return (
    <div>
       <div className="right">
        <div className="right-content1">
          <p className="right-content1-1">
            Forgot Password
            <img src={welcomehandIcon} alt="" width="50px" />
          </p>
          <p className="right-content1-2">
            Enter your detail to forget your password
          </p>
        </div>

        <form className="right-content2">
          <label>Email your Address</label>
          <div className="input">
            <img src={mailIcon} alt="" width="25px" />
            <input type="email" placeholder="Enter your email" required />
          </div>
          {/* <!-- <label>Password</label>
            <div class="input"><img src="/assets/password-icon.png" alt="" width="25px"> <input type="password" placeholder="Enter password" required></div> --> */}
          <Link to="/otp" className='btn'>Click here</Link>
        </form>

        {/* <!-- <div class="right-content3">
          <a href="/index.html"> You have an account ? Click here </a>
        </div> --> */}
      </div>
    </div>
  )
}

export default Forget

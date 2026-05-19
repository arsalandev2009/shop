import React from 'react'
import { Link } from 'react-router-dom'
import mailIcon from '../../assets/mail-icon.png'
import welcomehandIcon from '../../assets/welcome-hand-icon.png'
import './Otp.css'
function Otp() {
  return (
    <div>
        <div className="right">
        <div className="right-content1">
          <p className="right-content1-1">
            OTP
            <img src={welcomehandIcon} alt="" width="50px" />
          </p>
          <p className="right-content1-2">Enter your otp to forget your password</p>
        </div>

        <form className="right-content2">
          <label>Email your OTP</label>
          <div className="input">
            <img src={mailIcon} alt="" width="25px" />
            <input type="number" placeholder="Enter your otp" required />
          </div>
          {/* <!-- <label>Password</label>
            <div class="input"><img src="/assets/password-icon.png" alt="" width="25px"> <input type="password" placeholder="Enter password" required></div> --> */}
          <Link className='btn' to='/setnewpassword'>Click here</Link>
        </form>

        {/* <!-- <div class="right-content3">
          <a href="/index.html"> You have an account ? Click here </a>
        </div> --> */}
      </div>
    </div>
  )
}

export default Otp

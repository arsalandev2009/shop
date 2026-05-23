import React from 'react'
import { Link } from 'react-router-dom'
import mailIcon from '../../assets/mail-icon.png'
import welcomehandIcon from '../../assets/welcome-hand-icon.png'
import './Otp.css'

function Otp() {
  return (
    <div>

      <div className="pink-otp-container">

        <div className="pink-otp-content1">

          <p className="pink-otp-content1-title">
            OTP
            <img src={welcomehandIcon} alt="" width="45px" />
          </p>

          <p className="pink-otp-content1-subtitle">
            Enter your OTP to reset your password
          </p>

        </div>

        <form className="pink-otp-form">

          <label>Enter Your OTP</label>

          <div className="pink-otp-input">

            <img src={mailIcon} alt="" width="22px" />

            <input
              type="number"
              placeholder="Enter your OTP"
              required
            />

          </div>

          <Link className='pink-otp-btn' to='/setnewpassword'>
            Verify OTP
          </Link>

        </form>

      </div>

    </div>
  )
}

export default Otp
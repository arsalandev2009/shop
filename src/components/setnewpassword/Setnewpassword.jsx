import React from 'react'
import { Link } from 'react-router-dom'
import passwordIcon from '../../assets/password-icon.png'
import welcomehandIcon from '../../assets/welcome-hand-icon.png'
import './Setnewpassword.css'

function Setnewpassword() {
  return (
    <div>

      <div className="setnewpassword-container-right">

        <div className="setpassword-content1">

          <p className="setpassword-content1-title">
            Set Your Password
            <img src={welcomehandIcon} alt="" width="45px" />
          </p>

          <p className="setpassword-content1-subtitle">
            Enter your new password to continue
          </p>

        </div>

        <form className="setpassword-form">

          <label>Enter New Password</label>

          <div className="setpassword-input">

            <img src={passwordIcon} alt="" width="22px" />

            <input
              type="password"
              placeholder="Enter your new password"
              required
            />

          </div>

          <Link className='setpassword-btn' to='/home'>
            Update Password
          </Link>

        </form>

      </div>

    </div>
  )
}

export default Setnewpassword
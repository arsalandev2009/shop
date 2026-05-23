import React from 'react'
import { Link } from 'react-router-dom'
import passwordIcon from '../../assets/password-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import welcomehandIcon from '../../assets/welcome-hand-icon.png'
import nameIcon from '../../assets/name-icon.png'
import './Signup.css'

function Signup() {
  return (
    <>

      <div className="signup-container-right">

        <div className="signup-content1">

          <p className="signup-content1-title">
            Create Account
            <img src={welcomehandIcon} alt="" width="45px" />
          </p>

          <p className="signup-content1-subtitle">
            Sign up to get started
          </p>

        </div>

        <form className="signup-form">

          <label>First Name</label>

          <div className="signup-input">
            <img src={nameIcon} alt="" width="20px" />
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <label>Email Address</label>

          <div className="signup-input">
            <img src={mailIcon} alt="" width="22px" />
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <label>Phone Number</label>

          <div className="signup-input">
            <img src={mailIcon} alt="" width="22px" />
            <input
              type="number"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <label>Password</label>

          <div className="signup-input">
            <img src={passwordIcon} alt="" width="22px" />
            <input
              type="password"
              placeholder="Enter password"
              required
            />
          </div>

          <Link className='signup-btn' to="/login">
            Sign Up
          </Link>

        </form>

        <div className="signup-content3">

          <Link to="/">
            You already have an account? Click here
          </Link>

        </div>

      </div>

    </>
  )
}

export default Signup
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
        <div className="right">
        <div className="right-content1">
          <p className="right-content1-1">
            Create account
            <img src={welcomehandIcon} alt="" width="50px" />
          </p>
          <p className="right-content1-2">Sign up to get started</p>
        </div>

        <form className="right-content2">
          <label>First name</label>
          <div className="input">
            <img src={nameIcon} alt="" width="20px" />
            <input type="text" placeholder="Enter your name" required />
          </div>
          <label>Email Address</label>
          <div className="input">
            <img src={mailIcon} alt="" width="25px" />
            <input type="email" placeholder="Enter your email" required />
          </div>
          <label>Phone number</label>
          <div className="input">
            <img src={mailIcon} alt="" width="25px" />
            <input type="number" placeholder="Enter your phone number" required  m/>
          </div>
          <label>Password</label>
          <div className="input">
            <img src={passwordIcon} alt="" width="25px" />
            <input type="password" placeholder="Enter password" required />
          </div>
          <Link className='btn' to="/login">Sign up</Link>
        </form>

        <div className="right-content3">
          <Link to="/"> You have an account ? Click here </Link>
        </div>
      </div>
    </>
  )
}

export default Signup

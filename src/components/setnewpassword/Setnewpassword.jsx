import React from 'react'
import { Link } from 'react-router-dom'
import passwordIcon from '../../assets/password-icon.png'
import welcomehandIcon from '../../assets/welcome-hand-icon.png'
import './Setnewpassword.css'
function Setnewpassword() {
  return (
    <div>
       <div class="right">
        <div class="right-content1">
          <p class="right-content1-1">
            Set your password
            <img src={welcomehandIcon} alt="" width="50px" />
          </p>
          <p class="right-content1-2">
            Enter your new password to continue
          </p>
        </div>

        <form class="right-content2">
          <label>Email your new password</label>
          <div class="input">
            <img src={passwordIcon} alt="" width="25px" />
            <input type="password" placeholder="Enter your new password" required />
          </div>
          {/* <!-- <label>Password</label>
            <div class="input"><img src="/assets/password-icon.png" alt="" width="25px"> <input type="password" placeholder="Enter password" required></div> --> */}
          <Link className='btn' to='/home'>Click here</Link>
        </form>

        {/* <!-- <div class="right-content3">
          <a href="/index.html"> You have an account ? Click here </a>
        </div> --> */}
      </div>
    </div>
  )
}

export default Setnewpassword

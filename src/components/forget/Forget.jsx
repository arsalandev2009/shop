import React, { useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "../../assets/mail-icon.png";
import welcomehandIcon from "../../assets/welcome-hand-icon.png";
import "./Forget.css";

function Forget() {
  return (
    <div>
      <div className="forget-container-right">
        <div className="forget-content1">
          <p className="forget-content1-1">
            Forgot Password
            <img src={welcomehandIcon} alt="" width="50px" />
          </p>

          <p className="forget-content1-2">
            Enter your detail to forget your password
          </p>
        </div>

        <form className="forget-content2">
          <label>Email your Address</label>

          <div className="forget-input">
            <img src={mailIcon} alt="" width="25px" />
            <input type="email" placeholder="Enter your email" required />
          </div>

          <Link to="/otp" className="forget-btn">
            Click here
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Forget;

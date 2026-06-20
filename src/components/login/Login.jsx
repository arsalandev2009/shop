import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import mailIcon from "../../assets/mail-icon.png";
import passwordIcon from "../../assets/password-icon.png";
import welcomehandIcon from "../../assets/welcome-hand-icon.png";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [emailData, setEmailData] = useState();

  const handleEmailChange = (e) => {
    setEmailData(e.target.value.trim());
  };
  const [passwordData, setPasswordData] = useState();

  const handlePasswordChange = (e) => {
    setPasswordData(e.target.value.trim());
  };

  const handleSubmit = () => {
    if (emailData == "arsalan@gmail.com" && passwordData == "arsalan1234") {
      navigate("/home");
      localStorage.setItem("token", "arsalan_demo_token_123");
    } else {
      alert("wrong password");
    }
  };
  return (
    <>
      <div className="login-container-right">
        <div className="right-content1">
          <p className="right-content1-1">
            Welcome Back
            <img src={welcomehandIcon} alt="" width="50px" />
          </p>
          <p className="right-content1-2">Login to continue to your account</p>
        </div>

        <form className="right-content2" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <div className="input">
            <img src={mailIcon} alt="" width="25px" />
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={handleEmailChange}
            />
          </div>
          <label>Password</label>
          <div className="input">
            <img src={passwordIcon} alt="" width="25px" />
            <input
              type="password"
              placeholder="Enter your password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <Link to="/forget" className="Link">
            Forgot Password !
          </Link>
          <button type="submit" to="/home" className="btn">
            Login
          </button>
        </form>

        <div className="right-content3">
          <Link to="/signup" className="Link">
            Don't have an account ? Click here
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>
            
            <strong> Email :</strong>   arsalan@gmail.com
          </p>
          <p>
          <strong>Password :</strong>    arsalan1234
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

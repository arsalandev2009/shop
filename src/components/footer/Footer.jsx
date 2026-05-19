import React from 'react'
import { Link } from 'react-router-dom'
import facebookImage from '../../assets/facebook.png'
import tiktokImage from '../../assets/tik-tok.png'
import instaImage from '../../assets/instagram.png'
import logo from '../../assets/logo.png'
import './Footer.css'
{/* <div id="contact-us">
 <div className="contact-us-child">
   <h1 className='h1'>
     Shop with peace of mind knowing that every product is
     original,sourced from well-known brands you already love and trust.
   </h1>

   <h2 className='h2'>Follow us on :</h2>

   <div className="reference">
     <span className="links">
       <br />
       <a href="https://www.facebook.com/share/1FR8shMW52/"><img src={facebookImage} alt="" width="35px"/></a>
       <a href="https://www.tiktok.com/@thepinkshop.official?_r=1&_t=ZS-93TPkEyZ3TN"><img src={tiktokImage} alt="" width="35px"/></a>
       <a href="https://www.instagram.com/thepinkshop.official?utm_source=qr&igsh=cHJ2NGlsdDlwMWV5"><img src={instaImage} alt="" width="35px"/></a>
     </span>

     <h3>
       © 2026 The Pink Shop. All rights reserved. Designed by
       Arsalan.😊❤️
     </h3>
   </div>
 </div>
</div> */}
function Footer() {
  return (
    <div>



<footer id="contact-us">

  <div className="footer-container">

    {/* LEFT SIDE */}
    <div className="footer-brand">

      <img src={logo} alt="logo" className="footer-logo"/>

      <h1>The Pink Shop</h1>

      <p>
        Shop with peace of mind knowing that every product is original,
        sourced from trusted brands you already love.
      </p>

    </div>

    {/* CENTER */}
    <div className="footer-links">

      <h2>Quick Links</h2>

      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/aboutus">About</Link>
      <Link to="/contactus">Contact</Link>

    </div>

    {/* RIGHT SIDE */}
    <div className="footer-social">

      <h2>Follow Us</h2>

      <div className="social-icons">

        <a href="https://www.facebook.com/share/1FR8shMW52/">
          <img src={facebookImage} alt=""/>
        </a>

        <a href="https://www.instagram.com/thepinkshop.official">
          <img src={instaImage} alt=""/>
        </a>

        <a href="https://www.tiktok.com/@thepinkshop.official">
          <img src={tiktokImage} alt=""/>
        </a>

      </div>

    </div>

  </div>

  {/* BOTTOM */}
  <div className="footer-bottom">
    <h3>
      © 2026 The Pink Shop. All rights reserved. Designed by Arsalan 😊❤️
    </h3>
  </div>

</footer>

    </div>
  )
}

export default Footer

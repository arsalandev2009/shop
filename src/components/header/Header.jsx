// import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../../assets/logo.png'
// import shoppingCart from '../../assets/shopping-cart.png'
// import cancel from '../../assets/cancel.png'
// import heartIcon from '../../assets/wishlist.png'
// import searchIcon from '../../assets/searchicon.png'
// import nameIcon from '../../assets/name-icon.png'
// import menu from '../../assets/menu.png'
// import logout from '../../assets/logout.png'
// import checkout from '../../assets/checkout.png'

// function Header() {
//   const [account, setAccount] = useState(false)
//   const [hide, setHide] = useState(true)

//   let dropdown = () => {
//     setAccount(!account)
//     setTimeout(() => setAccount(false), 5000)
//   }

//   let disable = () => {
//     setHide(false)
//     setTimeout(() => setHide(true), 10000)
//   }

//   return (
//     <div>
//       <div
//         style={{
//           width: '100%',
//           background: '#ffffff',
//           boxShadow: '0 6px 20px rgba(255, 105, 180, 0.15)',
//           position: 'fixed',

//           top: 0,
//           height: 'auto',
//           right: 0,
//           zIndex: 1000,
//           borderBottom: '1px solid #ffe0ef',
//         }}
//       >
//         {hide && (
//           <div
//             style={{
//               width: '100%',
//               background: 'linear-gradient(90deg, #ff4fa3, #ff7ac3)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               padding: '8px 15px',
//             //   position: 'relative',
//             }}
//           >
//             <p
//               style={{
//                 color: 'black',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 letterSpacing: '0.3px',
//                 width: '15%',
//                 display:'flex',

//               }}
//             >
//               Order above 3000 to get free shipping
//             </p>

//             <button
//               onClick={disable}
//               style={{
//                 position: 'absolute',
//                 right: '15px',
//                 background: 'transparent',
//                 border: 'none',
//                 width: '5%',
//                 cursor: 'pointer',
//                 transition: '0.2s ease',
//               }}
//             >
//               <img src={cancel} alt="" width="20px" />
//             </button>
//           </div>
//         )}

//         <div
//           style={{
//             width: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             padding: '5px 50px',
//           }}
//         >
//           <div
//             style={{
//               width: '40%',
//               display: 'flex',
//               alignItems: 'start',
//             }}
//           >
//             <Link to="/home">
//               <img src={logo} className="logo" alt="" width="80px" />
//             </Link>
//           </div>

//           <ul
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               width: '30%',
//               gap: '30px',
//               listStyle: 'none',
//             }}
//           >
//             <li>
//               <Link
//                 to="/home"
//                 style={{
//                   textDecoration: 'none',
//                   color: '#333',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                 }}
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/products"
//                 style={{
//                   textDecoration: 'none',
//                   color: '#333',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                 }}
//               >
//                 All Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contactus"
//                 style={{
//                   textDecoration: 'none',
//                   color: '#333',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                 }}
//               >
//                 Contact us
//               </Link>
//             </li>
//           </ul>

//           <div
//             style={{
//               display: 'flex',
//               gap: '20px',
//               width: '30%',
//               justifyContent: 'end',
//               alignItems: 'center',
//             }}
//           >
//             <div
//               style={{
//                 gap: '10px',
//                 borderRadius: '5px',
//                 boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
//                 border: '1px solid pink',
//                 display: 'flex',
//                 padding: '0px 0px 0px 10px',
//                 alignItems: 'center',
//               }}
//             >
//               <img src={searchIcon} alt="" width="20px" />
//               <input
//                 type="search"
//                 placeholder="Search /"
//                 style={{
//                   border: 'none',
//                   fontSize: '16px',
//                   color: 'black',
//                   background: 'none',
//                   padding: '10px 0px',
//                   outline: 'none',
//                 }}
//               />
//             </div>

//             <Link
//               to="/cart"
//               style={{
//                 background: 'linear-gradient(135deg, #ff4fa3, #ff7ac3)',
//                 width: '45px',
//                 height: '45px',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 6px 15px rgba(255, 79, 163, 0.3)',
//                 transition: '0.3s ease',
//               }}
//             >
//               <img src={shoppingCart} alt="" className="cart-img" width="30px" />
//             </Link>

//             <div style={{ position: 'relative', display: 'inline-block' }}>
//               <p
//                 className="account-icon"
//                 onClick={dropdown}
//                 style={{
//                   backgroundColor: '#ff3886',
//                   width: '45px',
//                   height: '45px',
//                   borderRadius: '50%',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   boxShadow: '0 6px 15px rgba(255, 79, 163, 0.3)',
//                   transition: '0.3s ease',
//                 }}
//               >
//                 <img src={menu} alt="" className="cart-img" width="30px" />
//               </p>

//               {account && (
//                 <div

//                   style={{
//                     position: 'absolute',
//                     top: '60px',
//                     right: '0',
//                     background: 'white',
//                     padding: '20px 10px',
//                     width: '200px',
//                     display: 'grid',
//                     gap: '10px',
//                     borderRadius: '10px',
//                     border: '1px solid #ddd',
//                     boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
//                     zIndex: 999,
//                     color: 'black',
//                   }}
//                 >
//                   <Link
//                     to="/myaccount"
//                     style={{
//                       textDecoration: 'none',
//                       color: 'black',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '10px',
//                       padding: '5px 0px 5px 20px',
//                     }}
//                   >
//                     <img src={nameIcon} width="20px" />
//                     My account
//                   </Link>

//                   <hr />

//                   <Link
//                     to="/wishlist"
//                     style={{
//                       textDecoration: 'none',
//                       color: 'black',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '10px',
//                     padding: '5px 0px 5px 20px',

//                     }}
//                   >
//                     <img src={heartIcon} width="20px" />
//                     Wishlist
//                   </Link>

//                   <Link
//                     to="/myorder"
//                     style={{
//                       textDecoration: 'none',
//                       color: 'black',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '10px',
//                       padding: '5px 0px 5px 20px',

//                     }}
//                   >
//                     <img src={checkout} width="20px" />
//                     My Orders
//                   </Link>

//                   <Link
//                     to="/"
//                     style={{
//                       textDecoration: 'none',
//                       color: 'black',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '10px',
//                       padding: '5px 0px 5px 20px',

//                     }}
//                   >
//                     <img src={logout} width="20px" />
//                     Log out
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header

import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import shoppingCart from "../../assets/shopping-cart.png";
import cancel from "../../assets/cancel.png";
import heartIcon from "../../assets/wishlist.png";
import searchIcon from "../../assets/searchicon.png";
import nameIcon from "../../assets/name-icon.png";
import menu from "../../assets/menu.png";
import logout from "../../assets/logout.png";
import checkout from "../../assets/checkout.png";
import "./Header.css";

function Header() {

  const[haswishlist,setHaswishlist]=useState(false)

    useEffect(() => {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
if (savedWishlist.length>0) {
  setHaswishlist(false)
  
}else{
  setHaswishlist(true)

}
    }, []);




  const [account, setAccount] = useState(false);
  const [hide, setHide] = useState(true);

  const dropdown = () => {
    setAccount(!account);
    setTimeout(() => setAccount(false), 5000);
  };

  const disable = () => {
    setHide(false);
    setTimeout(() => setHide(true), 10000);
  };

  return (
    <header className="pink-header">
      {/* Top Banner */}
      {hide && (
        <div className="pink-topbar">
          <p>Order above 3000 to get free shipping</p>
          <button onClick={disable} className="pink-topbar-close">
            <img src={cancel} alt="close" width="20px" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="pink-header-main">
        {/* Logo */}
        <div className="pink-logo">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Nav */}
        <div className="pink-nav">

  <img src={searchIcon} alt="" width="20px"/>
         <input type="Search" placeholder="Search here" />


  
          </div>

        {/* Right Section */}
        <div className="pink-actions">
          {/* Search */}
       

          {/* Cart */}

          {/* Account */}
          <div className="pink-account-wrapper">
            <div className="pink-account-btn" onClick={dropdown} style={{display:'flex',alignSelf:'center',justifySelf:'end', position:'absolute'}}>
                <div style={{position:'absolute',backgroundColor:haswishlist ? 'none':'red', width:'10px',height:'10px',zIndex:'999',top:'0',left:'0',borderRadius:'50%'}}></div>

              <img src={menu} alt="menu"  style={{transform: account ? 'rotate(90deg)' : 'rotate(0deg)'}}/>
            </div>

            {account && (
              <div className="pink-dropdown">
                <Link to="/myaccount">
                  <img src={nameIcon} width="20px"/> My Account
                </Link>
                <hr />
                <Link to="/wishlist">
                  <img src={heartIcon} width="20px"/> My Wishlist
                </Link>

                <Link to="/myorder">
                  <img src={checkout} width="20px"/> My Orders
                </Link>
                <Link to="/cart" style={{display:'flex',flexDirection:'column',alignItems:'start',position:'relative'}}>
                <div style={{position:'absolute',backgroundColor:haswishlist? 'none':'red', width:'10px',height:'10px',borderRadius:'50%'}}></div>
                 <p style={{display:'flex',alignItems:'center',gap:'10px'}}> <img src={shoppingCart} alt="cart" width="20px"/> My Cart</p>
                </Link>
                <Link to="/">
                  <img src={logout} width="20px"/> Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

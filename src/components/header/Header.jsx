import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import shoppingCart from '../../assets/shopping-cart.png'
import cancel from '../../assets/cancel.png'
import heartIcon from '../../assets/favourite-icon.png'
import searchIcon from '../../assets/searchicon.png'
import nameIcon from '../../assets/name-icon.png'
import './Header.css'

function Header() {

const [account,setAccount]=useState(false);

let dropdown =()=>{
    setAccount(!account)
    setTimeout(()=>{
    setAccount(false)
},5000)
}
const [hide, setHide] = useState(true);
let disable = () => {
    setHide(false)
setTimeout(()=>{
    setHide(true)
},10000)
};

  return (
    <div>
        <div className="header">
           {hide && (
             <div className="header-upper">
                <p>Order above 3000 to get free shipping </p>
                <button onClick={disable}><img src={cancel} alt=""  width="20px"/></button>
            </div>
           )}
            <div className="header-child">
                <div className='logocont'>
                    <Link to="/home"><img src={logo} className="logo" alt="" width="80px"/></Link>
                </div>

                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/products">All Products</Link></li>
                    <li><Link to="/contactus">Contact us</Link></li>
                </ul>
               <div className='cart-favourite'>
                <div className='inputbox'><img src={searchIcon} alt="" width="20px"/><input type="search" placeholder='Search /' /> </div>
                <Link to='/favourite' className="cart-icon"> 
                    <img src={heartIcon} alt="" className="cart-img" width="30px" />
                </Link> 
                 <Link to='/cart' className="cart-icon"> 
                    <img src={shoppingCart} alt="" className="cart-img" width="30px" />
                    
                </Link>    
                <div style={{  
                    position: "relative",
                    display: "inline-block"}}>
                    <p className="account-icon" onClick={dropdown}> 
                    <img src={nameIcon} alt="" className="cart-img" width="30px" />                    
                    </p>    
                {account && (
                    <div style={{
        position: "absolute",
        top: "60px",
        right: "0",
        background: "white",
        padding: "10px",
        width:"200px",
        display:"grid",
        gap:"10px",
        borderRadius:"10px",
        
        border: "1px solid #ddd",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
        zIndex: 999,
        color:"black"
      }}>
                    <Link style={{textDecoration:"none",color:"black"}}>My account</Link>
                    <hr />
                    <Link style={{textDecoration:"none",color:"black"}}>My account</Link>
                    <Link style={{textDecoration:"none",color:"black"}}>My account</Link>
                    <Link style={{textDecoration:"none",color:"black"}}>My account</Link>
                    <Link style={{textDecoration:"none",color:"black"}}>My account</Link>
                    <Link style={{textDecoration:"none",color:"black"}}>My account</Link>
                    </div>
                )}
                </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Header

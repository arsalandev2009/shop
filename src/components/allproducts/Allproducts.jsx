import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import heartIcon from '../../assets/favourite-icon.png'
import Categorymenu from '../../assets/menu.png';
import Productscard from '../products/Productscard'
import { productsdata } from '../../data/index'
import Header from '../header/Header'
import Footer from '../footer/Footer'
// import Category from '../category/Category'
import './Allproducts.css'

function Allproducts() {
   const [hideandshow, setHideandshow] = useState(false);
    
      const toggle = () => {
        setHideandshow(!hideandshow);
    
        setTimeout(() => {
          setHideandshow(false);
        }, 10000);
      };
  return (
    <>
<Header/>


  <div className='allproducts-main-cont'>

      <div className="allproducts-categorycontainer">
      <button className="categorybtn" onClick={toggle}>
        <img
          src={Categorymenu}
          alt=""
          className={hideandshow ? "rotate" : ""}
            
        />
      </button>

      {hideandshow && (
        <div className="categorymenu">
          <Link className="categorylink" to="/">Makeup</Link>
          <Link className="categorylink" to="/">Hair care</Link>
          <Link className="categorylink" to="/">Skin care</Link>
          <Link className="categorylink" to="/">Fragrance</Link>
          <Link className="categorylink" to="/">Personal care</Link>
        </div>
      )}


      </div>

      <div className="allproducts-items-container" id="items-container" style={{ position: "relative" }}>
      <Productscard />

      </div>

  </div>
   
<Footer/>
</>    
  )
}

export default Allproducts
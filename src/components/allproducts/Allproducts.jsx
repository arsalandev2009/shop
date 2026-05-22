import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import heartIcon from '../../assets/wishlist.png'
import Categorymenu from '../../assets/menu.png';
import dropdown from '../../assets/dropdown.png';
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


  <div className='allproducts-main-cont' style={{ marginTop:'120px'}}>

      <div className="allproducts-categorycontainer">
      <button className="categorybtn" onClick={toggle}>
        <p>Categories</p>
        <img
          src={dropdown}
          alt=""
          // className={hideandshow ? "rotate" : ""}
          style={{
              transition: 'transform 0.3s ease',

              transform: hideandshow ? 'rotate(180deg)' : 'rotate(0deg)',

          }}
            
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

      <div style={{ position: "relative" ,width:'87vw',padding:'0px', display:'flex', justifySelf:'end' }}>

      <Productscard />

      </div>

  </div>
   
<Footer/>
</>    
  )
}

export default Allproducts
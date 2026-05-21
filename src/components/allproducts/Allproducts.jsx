import React from 'react'
import { Link } from 'react-router-dom'
import heartIcon from '../../assets/favourite-icon.png'
import productsdata from '../../data/index'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Category from '../category/Category'
import './Allproducts.css'

function Allproducts() {
  return (
    <>
<Header/>


    <Category/>
    <div className="allproducts-items-container" id="items-container" style={{ position: "relative" }}>
      {productsdata.map((item) => (
        <Link className="boxes" key={item.id}>
          <div className="image">
            {/* <div className="favourite">
              <img src={heartIcon} alt="" width="20px" />
            </div> */}

            <img src={item.image} alt="" width="100%"/>
          </div>

          <div className="title">
            <p>{item.name}</p>
          </div>

          <div className="description">
            <p>{item.desc}</p>
          </div>
        <div className="price">
          <p>Rs: {item.saleprice}</p>
          <del><p>{item.price}</p></del>
        </div>

          </Link>
      ))}

    </div>
   
<Footer/>
</>    
  )
}

export default Allproducts
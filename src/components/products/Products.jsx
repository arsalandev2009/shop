import React from 'react'
import { Link } from 'react-router-dom'
import heartIcon from '../../assets/favourite-icon.png'
import products from '../../data/index'
import './Products.css'

function Products() {
  return (
    <div className="items-container" id="items-container" style={{ position: "relative" }}>
      {products.map((item) => (
        <div className="boxes" key={item.id}>
          <div className="image">
            <div className="favourite">
              <img src={heartIcon} alt="" width="20px" />
            </div>

            <img src={item.image} alt="" />
          </div>

          <div className="title">
            <p>{item.name}</p>
          </div>

          <div className="description">
            <p>{item.desc}</p>
          </div>

          <div className="button">
            <button>Click for more details</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
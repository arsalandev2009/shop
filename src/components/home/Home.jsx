import React from 'react'
import Products from '../products/Products'
import Category from '../category/Category'
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
        <Category />
        <Products />
    
    </div>
  )
}

export default Home

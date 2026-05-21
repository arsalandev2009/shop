import React from 'react'
import Homeproducts from '../products/Homeproducts'
import Category from '../category/Category'
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
        <Category />
        <Homeproducts />

      
    
    </div>
  )
}

export default Home

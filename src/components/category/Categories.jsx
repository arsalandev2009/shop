import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesdata } from '../../data/index'
import './Categories.css'
function Categories() {
  return (
    <div className='categories-main-container'>
       <div className="categories-container" id="items-container">
         {categoriesdata.map((item) => (
           <Link className="categories-boxes" key={item.id}>
             <div className="categories-image">
               <img src={item.image} alt="" width="100%"/>
             </div>
   
             <div className="categories-title">
               <p>{item.name}</p>
             </div>
   
             <div className="categories-description">
               <p>{item.desc}</p>
             </div>
             </Link>
         ))}
   
       </div>
    </div>
  )
}

export default Categories

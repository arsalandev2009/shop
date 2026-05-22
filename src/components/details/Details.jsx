import React from 'react'
import { useParams } from 'react-router-dom'
import { productsdata } from '../../data/index'
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Details() {

  const { id } = useParams();

  const singleProduct = productsdata[id]

  return (
    // name: "Aloe Face Wash",
    // desc: "Refreshing cleanser with soothing aloe vera.",
    // price: 2100,
    // saleprice: 1700,
    <div
    style={{display:"grid", gap:"50px", fontFamily:"sans-serif"
 }}>
        <Header/>
        <div
        style={{
            display:"flex",
            justifyContent:"center",
             gap:"50px"
        }}
        >
            <div style={{width:"40%",borderRadius:"10px",overflow:"hidden",height:"50vh",display:"flex"}}>
                <img src={singleProduct.image} width="100%"/>
            </div>
 
            <div style={{width:"40%", display:"flex",gap:"30px",padding:"10px 0px", flexDirection:"column", alignItems:"start"}}>
                <div >
                    <p style={{color:"black",fontSize:"35px",fontWeight:"600"}}>{singleProduct.name}</p>
                </div>
                <div>
                    <p style={{color:"black",fontSize:"20px"}}>{singleProduct.desc}</p>
                </div>
                <div style={{display:"flex",gap:"20px"}}>
                    <p style={{color:"black",fontWeight:"600",fontSize:"30px"}}>Rs: {singleProduct.price}/-</p>
                    <del style={{fontSize:"20px"}}>Rs: {singleProduct.saleprice}</del>
                </div>
                <button style={{padding:"10px 20px",fontSize:"20px",cursor:"pointer",backgroundColor:"#ff6eba",color:"#000000",border:"none", borderRadius:"10px" }}>Add to cart </button>

            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Details
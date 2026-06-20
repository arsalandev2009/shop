import React from 'react'
import { dealsdata } from '../../data/index'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import heartIcon from '../../assets/wishlist.png'
import heartFilled from '../../assets/filled-wishlist.png'

function Dealscard({ids}) {

const [wishlist, setWishlist] = useState([]);
const change = (item) => {
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
let exists = wishlist.find((product)=>product.id === item.id);
if(exists){
  wishlist= wishlist.filter((product)=>product.id !== item.id);
} else{
  wishlist.push(item);
}
  localStorage.setItem("wishlist",JSON.stringify(wishlist));

setWishlist(wishlist.map(product=>product.id))
}



// const [wishlist, setWishlist] = useState([]);

// const change = (item) => {
//   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//   const exists = wishlist.find((product) => product.id === item.id);

//   if (exists) {
//     wishlist = wishlist.filter((product) => product.id !== item.id);
//   } else {
//     wishlist.push(item);
//   }

//   localStorage.setItem("wishlist",JSON.stringify(wishlist));

//   setWishlist(wishlist.map(product => product.id));
// };


  const [hover,setHover]=useState(false);


  let dealsdataselect;
  if(ids){
    dealsdataselect = dealsdata.filter((item)=>ids.includes(item.id))
  }else{
    dealsdataselect=dealsdata
  }
  
 return (
     <div
       style={{
         margin: '50px auto 50px 0px',
         display: 'flex',
         flexDirection: 'column',
         width:"100%"
       }}
     >
 
       <div
         id="items-container"
         style={{
           display: 'flex',
           flexWrap: 'wrap',
           gap: '10px',
           margin: '0px 0px 20px 0px',
           padding: '0px 20px',
           width: '100%',
           justifyContent: 'start',
           boxSizing: 'border-box',
         }}
       >
         {dealsdataselect.map((item) => (
           <div
                        
           onMouseEnter={(e) => e.currentTarget.style.transform="translateY(-5px)"}
           onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0px)"}
           
             key={item.id}
             style={{
               width: '200px',
               height: '280px',
               borderRadius: '10px',
               boxShadow: '0px 0px 8px rgba(0,0,0,0.15)',
               display: 'flex',
               flexDirection: 'column',
               justifyContent:"space-between",
               overflow: 'hidden',
               backgroundColor: 'white',
               cursor: 'pointer',
               textDecoration: 'none',
               color: 'black',
               flexShrink: 0,
               transition: '0.3s',
             }}
           >
            <button style={{position:'absolute',display:'flex', alignSelf:'end', margin:'10px', background:'none', border:'none'}}>
              <img     src={wishlist.includes(item.id) ? heartFilled : heartIcon}
    onClick={() => change(item)} alt=""  width="20px"/>
            </button>
             <Link to={`/details/${item.id}`}
               style={{
                 width: '100%',
                 height: '120px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 overflow: 'hidden',
                 padding: '0px',
                 boxSizing: 'border-box',
               }}
             >
               <img
                 src={item.image}
                 alt=""
                 
                 style={{
                   width: '95%',
                   height: '95%',
                   objectFit: 'contain',
                 }}
               />
             </Link>
 
             <Link to={`/details/${item.id}`}
               style={{
                 fontSize: '18px',
                 fontFamily: 'Arial, Helvetica, sans-serif',
                 fontWeight: 'bold',
                 color:'black',
                 textDecoration:'none',
                 textAlign: 'start',
                 padding: '15px 15px 5px 15px',
                 
               }}
             >
               <p>{item.name}</p>
             </Link>
 
             <Link to={`/details/${item.id}`}
               style={{
                color:'black',
                 textDecoration:'none',
                 textAlign: 'start',
                 fontSize: '12px',
                 fontFamily: 'Arial, Helvetica, sans-serif',
                 color: '#555',
                 lineHeight: '15px',
                 padding: '0px 15px',
                 marginTop:"-10px",
 
          
               }}
             >
               <p>{item.desc}</p>
             </Link>
 
             <div
               style={{
                 display: 'flex',
                 alignItems: 'center',
                 gap: '10px',
                 padding: '0px 15px 15px 15px',
                 fontSize: '18px',
                 color: 'red',
                 fontFamily: 'Arial, Helvetica, sans-serif',
               }}
             >
               <p>Rs: {item.saleprice}</p>
 
               <del
                 style={{
                   color: 'gray',
                   fontSize: '14px',
                 }}
               >
                 <p>{item.price}</p>
               </del>
             </div>
           </div>
         ))}
       </div>
     </div>
  )
}

export default Dealscard

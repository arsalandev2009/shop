// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Categorymenu from '../../assets/menu.png';
// import dropdown from '../../assets/dropdown.png';
// import Categories from '../category/Categories'
// import Products from '../products/Productscard'

// function Home() {
// const [hover, setHover] =useState(false);
//   const [hideandshow, setHideandshow] = useState(false);

//   const toggle = () => {
//     setHideandshow(!hideandshow);

//     setTimeout(() => {
//       setHideandshow(false);
//     }, 10000);
//   };

//   return (
//     <div style={{ marginTop:'120px'}}>

//       <div
//         style={{
//           margin: 0,
//           position:'absolute',
//           zIndex:'999',
//           width: '15vw',
//           padding: '20px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           gap: '8px',
//         }}
//       >

//         <button
//           onClick={toggle}
//            onMouseEnter={()=>setHover(true)}
//           onMouseLeave={()=>setHover(false)}
//           style={{
//             width: 'fit-content',
//             border: 'none',
//             cursor: 'pointer',
//             padding: '6px 14px',
//             background: 'linear-gradient(135deg, #ff60b0, #ff2d7a)',
//             color: 'black',
//             boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
//             borderRadius: '6px',
//             display:'flex',
//             gap:'5px',
//             alignItems:'center',
//             fontSize:'18px',
//             transition: '0.2s ease',
//             transform: hover? 'scale(1.02)':'scale(1)'
//           }}
//         >
//           <p>Categories</p>
//           <img
//             src={dropdown}
//             alt=""
//             style={{
//               width: '30px',
//               transition: 'transform 0.3s ease',
//               transform: hideandshow ? 'rotate(180deg)' : 'rotate(0deg)',
//             }}
//           />
//         </button>

//         {hideandshow && (
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               width: '80%',
//               padding: '8px 0',
//               boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
//               borderRadius: '8px',
//               background: 'white',
//             }}
//           >
//             <Link
//               to="/"
//               style={{
//                 textDecoration: 'none',
//                 color: 'black',
//                 width: '100%',
//                 textAlign: 'center',
//                 padding: '8px',
//                 transition: '0.2s ease',
//                 boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
//                 borderRadius: '4px',
//                 margin: '2px 0',
//               }}
//             >
//               Makeup
//             </Link>

//             <Link
//               to="/"
//               style={{
//                 textDecoration: 'none',
//                 color: 'black',
//                 width: '100%',
//                 textAlign: 'center',
//                 padding: '8px',
//                 transition: '0.2s ease',
//                 boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
//                 borderRadius: '4px',
//                 margin: '2px 0',
//               }}
//             >
//               Hair care
//             </Link>

//             <Link
//               to="/"
//               style={{
//                 textDecoration: 'none',
//                 color: 'black',
//                 width: '100%',
//                 textAlign: 'center',
//                 padding: '8px',
//                 transition: '0.2s ease',
//                 boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
//                 borderRadius: '4px',
//                 margin: '2px 0',
//               }}
//             >
//               Skin care
//             </Link>

//             <Link
//               to="/"
//               style={{
//                 textDecoration: 'none',
//                 color: 'black',
//                 width: '100%',
//                 textAlign: 'center',
//                 padding: '8px',
//                 transition: '0.2s ease',
//                 boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
//                 borderRadius: '4px',
//                 margin: '2px 0',
//               }}
//             >
//               Fragrance
//             </Link>

//             <Link
//               to="/"
//               style={{
//                 textDecoration: 'none',
//                 color: 'black',
//                 width: '100%',
//                 textAlign: 'center',
//                 padding: '8px',
//                 transition: '0.2s ease',
//                 boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
//                 borderRadius: '4px',
//                 margin: '2px 0',
//               }}
//             >
//               Personal care
//             </Link>

//           </div>
//         )}
//       </div>

//       <div
//         style={{
//           margin: '10px 0px 100px 0px',
//           display: 'flex',
//           // backgroundColor:'aqua',
//           position:'relative',
//           width:"87vw",   
//           flexDirection: 'column',
//           justifySelf:'end',  // ***********//
//           alignItems: 'center',
//         }}
//       >

//         <div style={{  
//           display:"flex",
//           alignSelf:'start',
//           flexDirection:'column',
//            margin:"50px 0px 0px 0px",
//            width:'100%'
          
//         }}>
         
//           <p style={{
//                   color:"#ff3d8b",
//             textAlign:"start",
//             fontSize:"30px" ,
//             fontWeight:"500", 
//             margin:"0px 0px -30px 20px"
//             }}>Hot items</p>
//           <Products ids={[9,10,15,20]} />
//              <Link
//           to="/products"
//           onMouseEnter={()=>setHover(true)}
//           onMouseLeave={()=>setHover(false)}
//           style={{
//             color: 'black',
//             textDecoration: 'none',
//             borderRadius: '5px',
//             padding: '5px 30px',
//             fontSize: '20px',
//             transition:"all 0.2s",
//             width:'fit-content',
//             alignSelf:'center',
//             display:"inline-block",
//             boxShadow: '0px 0px 5px 0px rgb(0,0,0)',  
//             transform:hover ? "scale(1.1)": "scale(1)"
//           }}
//         >
//           <span>See more</span>
//         </Link>
//         </div>
//             <div
//   style={{
//     width: '100%',
//     display: 'flex',
//     flexDirection:"column",
//     padding:"50px 50px 0px 0px",
//     justifyContent: 'center',
//   }}
// >
//   <p style={{
//             textAlign:"start",
//                   color:"#ff3d8b",
//             fontSize:"30px" ,
//             fontWeight:"500", 
//             margin:"100px 0px -30px 20px"
//             }}>Categories</p>
//   <Categories />
// </div>
      

     

//       </div>
//     </div>
//   )
// }

// export default Home
















import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dropdown from '../../assets/dropdown.png'
import searchIcon from '../../assets/searchicon.png'
import Categories from '../category/Categories'
import Products from '../products/Productscard'
import './Home.css'

function Home() {

  const [hover, setHover] = useState(false)
  const [hideandshow, setHideandshow] = useState(false)

  const toggle = () => {

    setHideandshow(!hideandshow)

    setTimeout(() => {
      setHideandshow(false)
    }, 10000)

  }

  return (

    <div className="home-main-container">

      {/* ========================= */}
      {/* CATEGORY DROPDOWN */}
      {/* ========================= */}

      <div className="home-category-wrapper">

        <button
          onClick={toggle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="home-category-btn"
          style={{
            transform: hover ? 'scale(1.02)' : 'scale(1)'
          }}
        >

          <p>Categories</p>

          <img
            src={dropdown}
            alt=""
            className="home-dropdown-icon"
            style={{
              transform: hideandshow
                ? 'rotate(180deg)'
                : 'rotate(0deg)'
            }}
          />

        </button>

        {
          hideandshow && (

            <div className="home-category-dropdown">

              <Link to="/">Makeup</Link>

              <Link to="/">Hair Care</Link>

              <Link to="/">Skin Care</Link>

              <Link to="/">Fragrance</Link>

              <Link to="/">Personal Care</Link>

            </div>

          )
        }

      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="home-content-wrapper">

        {/* HOT ITEMS */}

        <div className="home-hotitems-section">

          <p className="home-heading">
            Hot Items
          </p>

          <Products ids={[9, 10, 15, 20]} />

          <Link
            to="/products"
            className="home-seemore-btn"
          >
            See More
          </Link>

        </div>

        {/* CATEGORIES */}

        <div className="home-categories-section">

          <p className="home-heading">
            Categories
          </p>

          <Categories />

        </div>

      </div>


<div className="home-search-wrapper">
  <img src={searchIcon} alt=""  width="15px"/>
  <input type="search" placeholder='Search here'/>
</div>


    </div>

  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Categorymenu from '../../assets/menu.png';
import Categories from '../category/Categories'
import Products from '../products/Productscard'

function Home() {
const [hover, setHover] =useState(false);
  const [hideandshow, setHideandshow] = useState(false);

  const toggle = () => {
    setHideandshow(!hideandshow);

    setTimeout(() => {
      setHideandshow(false);
    }, 10000);
  };

  return (
    <div
      style={{
        display: 'flex',
      }}
    >

      <div
        style={{
          margin: 0,
          width: '15%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
        }}
      >

        <button
          onClick={toggle}
          style={{
            width: 'fit-content',
            border: 'none',
            cursor: 'pointer',
            padding: '6px 14px',
            background: 'linear-gradient(135deg, #ff60b0, #ff2d7a)',
            color: 'black',
            boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
            borderRadius: '6px',
            transition: '0.2s ease',
          }}
        >
          <img
            src={Categorymenu}
            alt=""
            style={{
              width: '30px',
              transition: 'transform 0.3s ease',
              transform: hideandshow ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          />
        </button>

        {hideandshow && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '80%',
              padding: '8px 0',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              borderRadius: '8px',
              background: 'white',
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'black',
                width: '100%',
                textAlign: 'center',
                padding: '8px',
                transition: '0.2s ease',
                boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
                borderRadius: '4px',
                margin: '2px 0',
              }}
            >
              Makeup
            </Link>

            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'black',
                width: '100%',
                textAlign: 'center',
                padding: '8px',
                transition: '0.2s ease',
                boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
                borderRadius: '4px',
                margin: '2px 0',
              }}
            >
              Hair care
            </Link>

            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'black',
                width: '100%',
                textAlign: 'center',
                padding: '8px',
                transition: '0.2s ease',
                boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
                borderRadius: '4px',
                margin: '2px 0',
              }}
            >
              Skin care
            </Link>

            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'black',
                width: '100%',
                textAlign: 'center',
                padding: '8px',
                transition: '0.2s ease',
                boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
                borderRadius: '4px',
                margin: '2px 0',
              }}
            >
              Fragrance
            </Link>

            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'black',
                width: '100%',
                textAlign: 'center',
                padding: '8px',
                transition: '0.2s ease',
                boxShadow: '0 0px 2px rgba(255,20,147,0.2)',
                borderRadius: '4px',
                margin: '2px 0',
              }}
            >
              Personal care
            </Link>

          </div>
        )}
      </div>

      <div
        style={{
          margin: '10px 0px 100px 0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        <div style={{  
           margin:"50px 0px 0px 0px"
        }}>
         
          <p style={{
                  color:"#ff3d8b",
            textAlign:"start",
            fontSize:"30px" ,
            fontWeight:"500", 
            margin:"0px 0px -30px 20px"
            }}>Hot items</p>
          <Products ids={[2,1,5,7,9,10,15,20]} />
             <Link
          to="/products"
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
          style={{
            color: 'black',
            textDecoration: 'none',
            borderRadius: '5px',
            padding: '5px 30px',
            fontSize: '20px',
            transition:"all 0.2s",
            display:"inline-block",
            boxShadow: '0px 0px 5px 0px rgb(0,0,0)',  
            transform:hover ? "scale(1.1)": "scale(1)"
          }}
        >
          <span>See more</span>
        </Link>
        </div>
            <div
  style={{
    width: '100%',
    display: 'flex',
    flexDirection:"column",
    padding:"50px 50px 0px 0px",
    justifyContent: 'center',
  }}
>
  <p style={{
            textAlign:"start",
                  color:"#ff3d8b",
            fontSize:"30px" ,
            fontWeight:"500", 
            margin:"100px 0px -30px 20px"
            }}>Categories</p>
  <Categories />
</div>
      

     

      </div>
    </div>
  )
}

export default Home
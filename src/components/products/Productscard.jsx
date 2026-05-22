import React from 'react'
import { Link } from 'react-router-dom'
import { productsdata } from '../../data/index'

function Homeroducts({ids}) {
   let showProducts  ;
   if(ids){
   showProducts = productsdata.filter((item) => ids.includes(item.id));
   }else{
   showProducts = productsdata;
   }
  
  return (
    <div
      style={{
        margin: '50px auto 50px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >

      <div
        id="items-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          margin: '0px 0px 20px 0px',
          padding: '20px',
          width: '100%',
          justifyContent: 'flex-start',
          boxSizing: 'border-box',
        }}
      >
        {showProducts.map((item) => (
          <Link
          to={`/details/${item.id}`}
            key={item.id}
            style={{
              width: '220px',
              height: '300px',
              borderRadius: '12px',
              boxShadow: '0px 0px 8px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              backgroundColor: 'white',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'black',
              flexShrink: 0,
              transition: '0.3s',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '150px',
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
                width="100%"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div
              style={{
                fontSize: '18px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: 'bold',
                textAlign: 'start',
                padding: '15px 15px 5px 15px',
                minHeight: '55px',
              }}
            >
              <p>{item.name}</p>
            </div>

            <div
              style={{
                textAlign: 'start',
                fontSize: '12px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#555',
                lineHeight: '20px',
                padding: '0px 15px',
                minHeight: '60px',
              }}
            >
              <p>{item.desc}</p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 15px 15px 15px',
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
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Homeroducts
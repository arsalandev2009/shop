import React from "react";
import { Link } from "react-router-dom";
import { productsdata } from "../../data/index";
import { useState } from "react";
function Homeroducts({ ids }) {
  const [hover, setHover] = useState(false);

  let showProducts;
  if (ids) {
    showProducts = productsdata.filter((item) => ids.includes(item.id));
  } else {
    showProducts = productsdata;
  }

  return (
    <div
      style={{
        margin: "50px auto 50px 0px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        transform: hover ? "scale(1.05)" : "scale(1)",
      }}
    >
      <div
        id="items-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          margin: "0px 0px 20px 0px",
          padding: "0px 20px",
          width: "100%",
          justifyContent: "start",
          boxSizing: "border-box",
        }}
      >
        {showProducts.map((item) => (
          <div
            onMouseEnter={(e) => e.currentTarget.style.transform="translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform="translateY(1px)"}
            key={item.id}
            style={{
              width: "200px",
              height: "280px",
              borderRadius: "10px",
              boxShadow: "0px 0px 8px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              backgroundColor: "white",
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
              flexShrink: 0,
              transition: "0.3s",
            }}
          >
            <Link
              to={`/details/${item.id}`}
              style={{
                width: "100%",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "0px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  width: "95%",
                  height: "95%",
                  objectFit: "contain",
                }}
              />
            </Link>

            <Link
              to={`/details/${item.id}`}
              style={{
                fontSize: "18px",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bold",
                textAlign: "start",
                padding: "15px 15px 5px 15px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <p>{item.name}</p>
            </Link>

            <Link
              to={`/details/${item.id}`}
              style={{
                textAlign: "start",
                fontSize: "12px",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "#555",
                lineHeight: "15px",
                padding: "0px 15px",
                marginTop: "-10px",
                textDecoration: "none",
              }}
            >
              <p>{item.desc}</p>
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "0px 15px 15px 15px",
                fontSize: "18px",
                color: "red",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              <p>Rs: {item.saleprice}</p>

              <del
                style={{
                  color: "gray",
                  fontSize: "14px",
                }}
              >
                <p>{item.price}</p>
              </del>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homeroducts;

import React, { useState, useEffect } from "react";

function Cart() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  return (
    <div>
      <h2>Wishlist Items</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item, index) => (
          <div key={index}>
 
              <>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </>
         
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const img_url = "https://shemhyrax.alwaysdata.net/static/images/";
  
  
  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.product_cost * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">🛒 Shop Now</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
  <div
    className="col-md-3 mb-4"
    key={item.product_id}
  >
    <div className='card shadow card-margin h-100'>

      {/* 🖼️ IMAGE */}
      <img
        className='mt-2 product_img'
        src={img_url + item.product_photo}
        alt={item.product_name}
        style={{ height: "180px", objectFit: "cover" }}
      />

      {/* 📄 BODY */}
      <div className='card-body'>

        <h6 className='mt-2'>{item.product_name}</h6>

        <p className='text-muted small'>
          {item.product_description.substring(0, 60)}...
        </p>

        <b className='text-success'>
          Ksh.{item.product_cost}
        </b>

        <p className="mt-1 small">
          Quantity: <b>{item.quantity}</b>
        </p>

        {/* ❌ REMOVE BUTTON */}
        <button
          className='btn btn-danger btn-sm w-100 mt-2'
          onClick={() => {
            const updatedCart = cart.filter(
              (c) => c.product_id !== item.product_id
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            window.location.reload();
          }}
        >
          Remove Item
        </button>

      </div>

    </div>
  </div>
))}

          <h4 className="text-center"><b>Total: Ksh {total}</b></h4>

          {/* 💳 PAY ALL BUTTON */}
          <button
            className="btn btn-success w-100 mt-3"
            onClick={() =>
              navigate("/makepayment", { state: { total } })
            }
          >
            Shop Now (Pay All)
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
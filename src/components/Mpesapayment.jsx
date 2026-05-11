import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

const Mpesapayment = () => {

  // ✅ supports BOTH product & total
  const { product, total } = useLocation().state || {};

  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const img_url = "https://shemhyrax.alwaysdata.net/static/images/"

  const handleSubmit = async (e) => {
    e.preventDefault()

    setMessage("Please wait as we process the transaction...")
    setError("")

    try {

      const formData = new FormData()
      formData.append("phone", phone)

      // ✅ handles BOTH cart total and single product
      formData.append(
        "amount",
        total ? total : product.product_cost
      )

      const response = await axios.post(
        "https://shemhyrax.alwaysdata.net/api/mpesa_payment",
        formData
      )

      console.log(response.data)
      setMessage("Payment request sent successfully!")

    } catch (error) {
      setError(error.message)
      setMessage("")
    }
  }

  return (
    <div className='row justify-content-center md-4'>
      <h1>LIPA NA MPESA</h1>

      <div className='col-md-6 card shadow card-margin p-3'>

        {/* 🖼️ SHOW PRODUCT ONLY IF EXISTS */}
        {product && (
          <>
            <img
              src={img_url + product.product_photo}
              alt={product.product_name}
            />

            <p>
              <b>Product Name:</b> {product.product_name}
            </p>

            <p className='text-warning'>
              Product Cost: Ksh {product.product_cost}
            </p>
          </>
        )}

        {/* 💰 TOTAL DISPLAY (FROM CART) */}
        {total && (
          <div className="mb-3">
                    
              <p className='text-warning'>
                Total Amount: Ksh {total}
              </p>
          
          </div>
        )}

        {/* 📢 MESSAGES */}
        {message && <p className="text-success">{message}</p>}
        {error && <p className="text-danger">{error}</p>}

        {/* 📱 PHONE + PAYMENT FORM */}
        <form onSubmit={handleSubmit}>

          <label><b>Phone Number</b></label>

          <input
            type="tel"
            placeholder='Enter Phone number'
            className='form-control'
            onChange={(e) => setPhone(e.target.value)}
          />

          <br />

          <button className='btn btn-dark w-100'>
            Make Payment
          </button>

        </form>

      </div>
    </div>
  )
}

export default Mpesapayment
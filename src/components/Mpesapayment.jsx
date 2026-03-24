import React, { useEffect, useState } from 'react'
import image from '../logo.svg'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
const Mpesapayment = () => {
  // Declaring the state variable
  const{product}=useLocation().state ||{};
  const[phone,setPhone]=useState("")
  const[message,setMessage]=useState("")
  const[error,setError]=useState("")

  // image url
  const img_url ="https://shemhyrax.alwaysdata.net/static/images/"

  const handleSubmit =async(e)=>{
    e.preventDefault()

    setMessage("Please wait as we proccess the transaction")
    try {
      
      // retriving user,payment details and product details
      const formData= new FormData()
      formData.append("phone",phone)
      formData.append("amount",product.product_cost)

      // addimg our base url
      const response=await axios.post("https://shemhyrax.alwaysdata.net/api/mpesa_payment",formData)
      console.log(response.data)

    } catch (error) {
      setError(error.message)
      
    }
  }
 
  return (
    <div className=' row justify-content-center  md-4 '>
      <h1>LIPA NA MPESA</h1> 
    <div className=' col-md-6 card shadow card-margin  '>
       
     <img src={img_url+product.product_photo} alt="product.product_photo" />
     <p>Product Name:{product.product_name}</p>
     <p className='text-warning'>Product.cost :ksh.{product.product_cost}</p>
     {/* bind variables */}
     {phone}
     {message}
     {error}

     {/* phone input */}
     <form action=""onSubmit={handleSubmit}>
      <label htmlFor=""><b>Phone number</b></label>
      <input type="tel"
      placeholder='Enter Phone number'
      className='form-control'
      onChange={(e)=>setPhone(e.target.value)}/> <br /> <br />

      <button className='btn btn-dark'>Make payment</button>
     </form>
    </div>
    </div>
  )
}

export default Mpesapayment
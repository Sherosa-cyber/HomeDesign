import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Addfurnishings = () => {
  //declaring state variables
  const[product_name,setProductName]=useState("")
  const[product_description,setProductDescription]=useState("")
  const[product_cost,setProductCost]=useState("")
  const[product_photo,setProductPhoto]=useState("")
  // status messages
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  

  // fonction add products database
  const handlesubmit= async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    try {
      // retriving product details
      const formData=new FormData();
      formData.append("product_cost",product_cost)
      formData.append("product_description",product_description)
      formData.append("product_photo",product_photo)
      formData.append("product_name",product_name)

      // adding the base url to post data
      const response= await axios.post("https://shemhyrax.alwaysdata.net/api/add_product",formData)
      setLoading()
      setSuccess(response.data.success)

    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='row justify-content-center' id='addproduct'>
      <div className='col-md-6 card shadow m-2 p-4 'id='background'>
      <i>  <h1>Add Furnishings</h1></i> <br />

      {/* binging variables */}
      {loading}
      {error}
      {success}
      <nav>
        <Link to="/" className='btn btn-dark'>GET ALL FURNISH</Link>
      </nav> <br />
        <form action="" id='products'onSubmit={handlesubmit}>
          <label htmlFor=""><h5>Product name</h5></label>
          <input type="text"
          placeholder='Product name'
          className='form-control'onChange={(e)=>setProductName(e.target.value)}
          required/> <br />

          <label htmlFor=""><h5>Product description</h5></label>
          <input type="textarea"
          placeholder='Product Description'
           className='form-control' onChange={(e)=>setProductDescription(e.target.value)}
           required/> <br />

          <label htmlFor=""><h5>Product cost</h5></label>
          <input type="number"
           placeholder='Product cost'
           className='form-control' onChange={(e)=>setProductCost(e.target.value)}
           required/> <br />

          <label htmlFor=""><h5>Product photo </h5></label>
          <input type="file"
          className='form-control' onChange={(e)=>setProductPhoto(e.target.files[0])}
          required/> <br />

          <input type="submit"
           value="Add product"
            className='btn btn-secondary' />

        </form>
      </div>
       <footer class=" backgroundcolor text-light bg-dark text-center p-2">
                    <h5> <marquee behavior="" direction="">Developed by Sherosa &copy ;2026.All rights reserved for more infomation visit the "About tab"</marquee> </h5>
                  </footer>
    </div>
  )
}

export default Addfurnishings
import React, { useEffect, useState } from 'react'
import image from'../logo.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Mycarousel from './Mycarousel';
const Getfurnishings = () => {
  
  // declaring state variables
  const [prodcuts,setProducts]= useState([]);
  const [loading,setLoading]=useState("");
  const[error,setError]=useState("")

  // image url
  const img_url="https://shemhyrax.alwaysdata.net/static/images/"

  // navigation
  const navigate = useNavigate()

  // function to call products
  const Getfurnishings= async()=>{
    setLoading("Please wait as we retrive products")
    try {
      const response= await axios.get("http://shemhyrax.alwaysdata.net/api/get_products_details")
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)
    }
  }
  
  // usEffect to retrive product automatically
  useEffect(()=>{
   Getfurnishings()
  },[])
  return (
    <div className='row'> <br /> <br />
      
        <h1><b>Available Products</b></h1> <br /> <br />
        <Mycarousel/>
        {loading}
        {error}

        {/* designing the product card */}
        {prodcuts.map((product)=>(
        <div className='col-md-3 justify-content-centered md-4'
        key={product.product_id}>

          <div className='card shadow card-margin'>

            <img  className='mt-2 product_img'src={img_url +product.product_photo} alt={product.product_photo} />

            {/* the prodcut details */}
            <div className='card-body'>

              <h5 className='mt-2'>{product.product_name}</h5>

              <p className='text-muted'>{product.product_description}</p>

              <b className='text-success'>Ksh.{product.product_cost}</b><br /> <br />

              <button className='btn btn-dark mb-3 w-100' onClick={()=>navigate("/makepayment",{state:{product}})}>Purchase Now</button>

            </div>

          </div>

        </div>

       ) )}
        <footer class="text-light bg-dark text-center p-2">
                    <h5> <marquee behavior="" direction="">Developed by Sherosa &copy ;2026.All rights reserved for more infomation visit the "About tab"</marquee> </h5>
                  </footer>
    </div>
    
  )
}

export default Getfurnishings
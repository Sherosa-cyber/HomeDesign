import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Signin= () => {
  //declarering satate varaibles
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  //state messages
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("")

  //navigation
  const navigate=useNavigate()

  //submitting
  const handleSignin= async(e)=>{
    e.preventDefault()
    setLoading("Please wait..")
    try{
      //retriving user data
      const formData=new FormData();

      formData.append("email",email)
      formData.append("password",password)

      //adding base url
      const response = await axios.post("https://shemhyrax.alwaysdata.net/api/signin",formData);
      if(response.data.user){
        setSuccess(response.data.success)
        setLoading("")
        localStorage.setItem("user",JSON.stringify(response.data.user))
        //navigation on successfull signin
        navigate("/")
      }
    }catch(error){
      setError(error)

    }
   
  }
  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow mt-2 p-4'id='background'>
       <b> <h1 className=''>Sign in</h1></b> <br />
       <b><i><h3>Welcome to the Home design site</h3></i></b>
        {/*Binding */}
        
        {loading} <br />
        {error} <br />
        {success} <br />
        <form action="" onSubmit={handleSignin}>
          <label htmlFor=""><b>Email address</b></label>
          <input type="email"placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br /> <br />
          <label htmlFor=""><b>Password</b></label>
          <input type="password"placeholder='Enter password' className='form-control'onChange={(e)=>setPassword(e.target.value)} /> <br />
          <input type="submit" value="Login now"className='btn btn-secondary' /><br />
          <Link to="/signup">You dont have an account ? Signup</Link>
        </form>
        </div>  

         <footer class="text-light bg-dark text-center p-2">
                    <h5> <marquee behavior="" direction="">Developed by Sherosa &copy ;2026.All rights reserved for more infomation visit the "About tab"</marquee> </h5>
                  </footer>
    </div>
  )
}

export default Signin


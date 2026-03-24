import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  //declaring state variable
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState()
  //status messages
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("")

  //function to submit
   const handleSubmit =async(e)=>{
    e.preventDefault();
    setLoading("Please wait...");
    try {
      //retrieving user details
      const formData=new FormData();
      formData.append("username",username)
      formData.append("email",email)
      formData.append("phone",phone )
      formData.append("password",password)

      //adding a base url
      const response= await axios.post("https://shemhyrax.alwaysdata.net/api/signup",formData)
      setSuccess(response.data.success)
    } catch (error) {
      setError(error)
      
    }
   }
  
  return (
    <div className='row justify-content-center'id='signupbox'>
      <div className='col-md-6 card shadow m-2 p-4'id='background'>
        <h1 className='signup'>Sign up</h1>
        <h2>Let's Get Started </h2>
        <h3>Create an account</h3>
        {/*Binding values from form*/ }
        {loading} <br />
        {error} <br />
        {success} <br />
        {/*signup form */}
        <form  className='form' onSubmit={handleSubmit} >
          <fieldset  >
            <lable><b>Username</b></lable>
            <input type="text" placeholder='Enter username'  className='form-control' onChange={(e)=>setUsername(e.target.value)}/><br />
            <lable><b>Email</b></lable>
            <input type="email" placeholder='Enter email'className='form-control'onChange={(e)=>setEmail(e.target.value)} /><br />
            <lable><b>Phone number</b></lable>
            <input type="tel" placeholder='Enter Phone number(254XXXXXXXX)'className='form-control'onChange={(e)=>setPhone(e.target.value)} /><br />
            <lable><b>password</b></lable>
            <input type="password" placeholder='Enter password' className='form-control'onChange={(e)=>setPassword(e.target.value)} /><br />
            <input type="submit"value="Signup"className='btn btn-info' />
          </fieldset><br /> 
          {/*incase someone has already an account*/}
          <Link to ='/signin'>Already have an account? Signin</Link>
        </form>
      </div>

       <footer class="text-light bg-dark text-center p-2">
                    <h5> <marquee behavior="" direction="">Developed by Sherosa &copy ;2026.All rights reserved for more infomation visit the "About tab"</marquee> </h5>
                  </footer>
    </div>
  )
}

export default Signup
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  // declaring state variables
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState()

  // status messages
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate();

  // function to submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");

    try {
      // retrieving user details
      const formData = new FormData();
      formData.append("username", username)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("password", password)

      // API call
      const response = await axios.post(
        "https://shemhyrax.alwaysdata.net/api/signup",
        formData
      )

      // ✅ GET USER DATA FROM RESPONSE
      const userData = response.data;

      // ✅ STORE USER IN LOCALSTORAGE (LOGIN STATE)
      localStorage.setItem("user", JSON.stringify(userData));

      setSuccess("Signup successful!");

      // optional redirect after signup
      navigate("/");

    } catch (error) {
      setError("Signup failed. Try again.");
    }
  }

  return (
    <div className='row justify-content-center' id='signupbox'>
      <div className='col-md-6 card shadow m-2 p-4' id='background'>
        <h1 className='signup'>Sign up</h1>
        <h2>Let's Get Started</h2>
        <h3>Create an account</h3>

        {loading} <br />
        {error} <br />
        {success} <br />

        <form className='form' onSubmit={handleSubmit}>
          <fieldset>

            <label><b>Username</b></label>
            <input type="text" className='form-control'
              onChange={(e) => setUsername(e.target.value)} /><br />

            <label><b>Email</b></label>
            <input type="email" className='form-control'
              onChange={(e) => setEmail(e.target.value)} /><br />

            <label><b>Phone number</b></label>
            <input type="tel" className='form-control'
              onChange={(e) => setPhone(e.target.value)} /><br />

            <label><b>Password</b></label>
            <input type="password" className='form-control'
              onChange={(e) => setPassword(e.target.value)} /><br />

            <input type="submit" value="Signup" className='btn btn-info' />

          </fieldset><br />

          <Link to='/signin'>
            Already have an account? Signin
          </Link>

        </form>
      </div>

      
    </div>
  )
}

export default Signup
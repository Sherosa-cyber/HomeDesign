import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
import Getfurnishings from './components/Getfurnishings';
import Addfurnishings from './components/Addfurnishings';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Mpesapayment from './components/Mpesapayment';
import Footer from './components/Fotter';
import { Component as images } from 'react';
function App() {
  return (
    <Router>
    <div className="App">
      <div className='App-header'>
        <h1 className='text-dark'>Welcome To <i> Homedesigns</i></h1>
      </div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">

      {/* Brand */}
      <Link to="/" className="navbar-brand fw-bold mx-auto">
        Furnishings
      </Link>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Links */}
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarcollapse"
      >
        <div className="navbar-nav text-center">

          <Link to="/signup" className="nav-link fw-bold text-dark">
            Signup
          </Link>

          <Link to="/signin" className="nav-link fw-bold text-dark">
            Signin
          </Link>

          <Link to="/" className="nav-link fw-bold text-dark">
            Get Furnishings
          </Link>

          <Link to="/Addfurnishings" className="nav-link fw-bold text-dark">
            Add Furnishings
          </Link>

        </div>
      </div>

    </nav>

       <br />
      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/' element={<Getfurnishings/>}/>
        <Route path='/Addfurnishings' element={<Addfurnishings/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>
      </Routes>
      <Footer/>
      <images/>
    </div>
    </Router>
    
  );
}

export default App;

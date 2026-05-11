import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Mpesapayment from './components/Mpesapayment';
import Footer from './components/Fotter';
import Cartitems from './components/Cartitems'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Furniturehub from './components/Furniturehub';
import Uploadfurniture from './components/Uploadfurniture';
import Aboutus from './components/Aboutus';
import { HousePlus } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { UserLock } from 'lucide-react';
import { LayersPlus } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { BookCheck } from 'lucide-react';



function App() {
  return (
    <Router>
    <div className="App">
      
<nav
  className="navbar navbar-expand-md navbar-dark luxury-navbar"
>

  {/* BRAND (LOGO + NAME + GLOW) */}
  <Link
    to="/"
    className="navbar-brand d-flex align-items-center gap-2 brand-glow"
  >

    {/* Logo */}
    <div className="logo-box">
      🪑
    </div>

    {/* Brand Name */}
    <span className="brand-text">
      Furniture Hub
    </span>

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
    <div className="navbar-nav text-center gap-3">

      <Link className="lux-link" to="/">Home <HousePlus/> </Link>
      <Link className="lux-link" to="/signup">Signup <LogIn/> </Link>
      <Link className="lux-link" to="/signin">Signin <UserLock/> </Link>
      <Link className="lux-link" to="/Uploadfurniture">Upload Furniture <LayersPlus/> </Link>
      <Link className="lux-link" to="/Cartitems">Cart <ShoppingCart/> </Link>
      <Link className="lux-link" to="/Aboutus">About Us <BookCheck/> </Link>


    </div>
  </div>

</nav>
       <br />
      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/' element={<Furniturehub/>}/>
        <Route path='/Uploadfurniture' element={<Uploadfurniture/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>
        <Route path='/Cartitems' element={<Cartitems/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>

        
        
      </Routes>
      <Footer/>
      <images/>
    </div>
    </Router>
    
  );
}

export default App;
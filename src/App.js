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

function App() {
  return (
    <Router>
    <div className="App">
      <div className='App-header'>
        <h1 className='text-dark'>Welcome To <i> Homedesigns</i></h1>
      </div>

       <br /><nav id='buttons'>
        <Link to="/Signup" className='btn btn-outline-secondary ms-2'>Sign up</Link>
        <Link to="/signin" className='btn btn-outline-secondary ms-2'>Sign in</Link>
        <Link to="/addfurnishings" className='btn btn-outline-secondary ms-2' >Add Furnishings</Link>
        <Link to="/" className='btn btn-outline-secondary ms-2'>Get Furnishings </Link>
        


      </nav>

      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/' element={<Getfurnishings/>}/>
        <Route path='/Addfurnishings' element={<Addfurnishings/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;

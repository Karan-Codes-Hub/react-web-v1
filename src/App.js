
import './App.css';
import React  from 'react';
import  Navbar   from './Navbar';
import Footer from './footer';
import Home from './home';
import SignUp from './sign-up';
import Switch from 'react-switch'
import Cards from './Cards';
import HeroSection from './HeroSection';
import Login from './login';
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>    
       <Navbar />
       <HeroSection />
       <Cards />
      
       
       <Footer />
      </Router>

    </>
     
     
  );
}

export default App;

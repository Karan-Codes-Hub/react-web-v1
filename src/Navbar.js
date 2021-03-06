import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  const [show, handleshow] =  useState(false)
  useEffect(() => {
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 1000)
          {
              handleshow(true);
          }
          else handleshow(false);
      });
      
      
      return() =>{
          window.removeEventListener('scroll');
      };
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={`navbar ${show && "nav__black"}`}>
        
        
        <div className='navbar-container'>
          
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TechMaestro
            <i class='fas fa-laptop-code' />
            
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            
            
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Practice'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Practice
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Opportunity'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Opportunitiies/Job
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Contact
              </Link>
            </li>
            
            

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN In</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
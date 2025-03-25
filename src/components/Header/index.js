import React from 'react';
import { Button } from '@mui/material'; 

function Header() {
  return (
    <>
    <div className="header">
      {/* Logo / Site Name */}
      <div className="logo-container">
        <img 
          src=""  // Replace with your logo URL
          alt="Logo" 
          className="logo"
        />
      </div>

      {/* Navigation Bar */}
      <div className="nav">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#Accessories">Accessories</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Search and Button */}
      <div className="cta">
        <input type="text" placeholder="Search..." className="search-input" />
        <Button variant="contained" color="primary" className="cta-button">
          Get Started
        </Button>
      </div>
    </div>


    </>
  )
   

}

export default Header;

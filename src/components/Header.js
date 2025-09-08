import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <i className="fas fa-faucet logo-icon"></i>
          <div className="logo-text">JAKPAN DYNAMIC CONCEPT LIMITED</div>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#audio">Audio Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
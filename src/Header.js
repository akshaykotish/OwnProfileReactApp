import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Website Logo" />
      </div>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  );
}

export default Header;
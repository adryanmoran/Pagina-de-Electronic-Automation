import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul id="menu" className={menuOpen ? 'show-menu' : ''}>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#carrusel" onClick={closeMenu}>Galería</a></li>
          <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#videos" onClick={closeMenu}>Videos</a></li>
          <li><a href="#facebook-reel" onClick={closeMenu}>Facebook Reel</a></li>
          <li><a href="#contact-container" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

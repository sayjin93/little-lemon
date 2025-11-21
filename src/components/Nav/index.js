import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav aria-label="Main navigation">
        <img src="/images/Logo.svg" alt="Little Lemon Logo" className="logo" />
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul 
          id="main-menu"
          className={isMenuOpen ? 'active' : ''}
          role="menu"
        >
          <li role="none"><Link to="/" onClick={() => setIsMenuOpen(false)} role="menuitem">HOME</Link></li>
          <li role="none"><Link to="/about" onClick={() => setIsMenuOpen(false)} role="menuitem">ABOUT</Link></li>
          <li role="none"><Link to="/menu" onClick={() => setIsMenuOpen(false)} role="menuitem">MENU</Link></li>
          <li role="none"><Link to="/booking" onClick={() => setIsMenuOpen(false)} role="menuitem">RESERVATIONS</Link></li>
          <li role="none"><Link to="/order" onClick={() => setIsMenuOpen(false)} role="menuitem">ORDER ONLINE</Link></li>
          <li role="none"><Link to="/login" onClick={() => setIsMenuOpen(false)} role="menuitem">LOGIN</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

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
      <nav>
        <img src="/images/Logo.svg" alt="Little Lemon Logo" className="logo" />
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link></li>
          <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>MENU</Link></li>
          <li><Link to="/booking" onClick={() => setIsMenuOpen(false)}>RESERVATIONS</Link></li>
          <li><Link to="/order" onClick={() => setIsMenuOpen(false)}>ORDER ONLINE</Link></li>
          <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>LOGIN</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

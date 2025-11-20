import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/Logo.svg" alt="Little Lemon Logo" />
        </div>
        
        <div className="footer-navigation">
          <h4>Doormat Navigation</h4>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <address>
            <p>Address:<br />123 Main Street<br />Chicago, IL 60601</p>
            <p>Phone:<br />(312) 555-1234</p>
            <p>Email:<br />info@littlelemon.com</p>
          </address>
        </div>

        <div className="footer-social">
          <h4>Social Media Links</h4>
          <nav>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

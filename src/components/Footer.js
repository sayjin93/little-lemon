import './Footer.css';

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/Logo.svg" alt="Little Lemon Logo" />
        </div>

        <div className="footer-navigation">
          <h4 id="footer-nav-title">Doormat Navigation</h4>
          <nav aria-labelledby="footer-nav-title">
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
          <h4 id="contact-title">Contact</h4>
          <address aria-labelledby="contact-title">
            <p>Address:<br />123 Main Street<br />Chicago, IL 60601</p>
            <p>Phone:<br /><a href="tel:+13125551234" aria-label="Call us at (312) 555-1234">(312) 555-1234</a></p>
            <p>Email:<br /><a href="mailto:info@littlelemon.com" aria-label="Email us at info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>

        <div className="footer-social">
          <h4 id="social-title">Social Media Links</h4>
          <nav aria-labelledby="social-title">
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">Twitter</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

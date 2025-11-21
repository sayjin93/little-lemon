import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className='hero-container'>
        <div className="hero-content">
          <h1 id="hero-title">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" aria-label="Reserve a table at Little Lemon">
            <button className="reserve-button">Reserve a Table</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/restauranfood.jpg" alt="Delicious Mediterranean dish from Little Lemon restaurant" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

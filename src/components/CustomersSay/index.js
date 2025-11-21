import './CustomersSay.css';

const CustomersSay = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria',
      rating: 5,
      photo: '/user1.jpg',
      review: 'Great food and excellent service! Highly recommend the Greek salad.'
    },
    {
      id: 2,
      name: 'John',
      rating: 5,
      photo: '/user2.jpg',
      review: 'Best Mediterranean restaurant in Chicago. The lemon dessert is amazing!'
    },
    {
      id: 3,
      name: 'Sarah',
      rating: 5,
      photo: '/user3.jpg',
      review: 'Authentic recipes with a modern twist. Loved every dish we tried.'
    },
    {
      id: 4,
      name: 'David',
      rating: 5,
      photo: '/user4.jpg',
      review: 'Wonderful atmosphere and delicious food. A must-visit in Chicago!'
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">Testimonials</h2>
      <div className="testimonials-grid" role="list">
        {testimonials.map(testimonial => (
          <article key={testimonial.id} className="testimonial-card" role="listitem">
            <div className="rating" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>{renderStars(testimonial.rating)}</div>
            <div className="user-info">
              <img src={testimonial.photo} alt={`${testimonial.name}'s profile photo`} className="user-photo" />
              <h3>{testimonial.name}</h3>
            </div>
            <p className="review">{testimonial.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;

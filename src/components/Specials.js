import './Specials.css';

const Specials = () => {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: '/images/greek salad.jpg'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: '/images/bruchetta.svg'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: '/images/lemon dessert.jpg'
    }
  ];

  return (
    <section className="specials" aria-labelledby="specials-title">
      <div className="specials-header">
        <h2 id="specials-title">Specials</h2>
        <button className="online-menu-button" aria-label="View online menu">Online Menu</button>
      </div>
      <div className="specials-cards" role="list">
        {specials.map(special => (
          <article key={special.id} className="special-card" role="listitem">
            <img src={special.image} alt={`${special.name} - ${special.description.slice(0, 50)}...`} />
            <div className="special-content">
              <div className="special-header">
                <h3>{special.name}</h3>
                <span className="price" aria-label={`Price: ${special.price}`}>{special.price}</span>
              </div>
              <p>{special.description}</p>
              <a href="/order" className="order-link" aria-label={`Order ${special.name} for delivery`}>Order a delivery</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;

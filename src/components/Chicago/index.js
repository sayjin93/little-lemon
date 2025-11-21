import './Chicago.css';

const Chicago = () => {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about-content">
        <h2 id="about-title">Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non
          enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi
          etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae.
        </p>
      </div>
      <div className="about-images" role="img" aria-label="Little Lemon chefs Mario and Adrian">
        <img src="/images/Mario and Adrian A.jpg" alt="Chef Adrian and Chef Mario working in the kitchen" className="chef-photo" />
        <img src="/images/Mario and Adrian b.jpg" alt="Chef Adrian and Chef Mario preparing dishes" className="chef-photo" />
      </div>
    </section>
  );
};

export default Chicago;

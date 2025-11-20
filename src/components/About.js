import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non 
          enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi 
          etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare 
          quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae.
        </p>
      </div>
      <div className="about-images">
        <img src="/images/Mario and Adrian A.jpg" alt="Adrian and Mario in the kitchen" className="chef-photo" />
        <img src="/images/Mario and Adrian b.jpg" alt="Adrian and Mario cooking" className="chef-photo" />
      </div>
    </section>
  );
};

export default About;

import React from "react";

function About() {
  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img
              className="about-hero-image"
              src="images/about_img.png"
              alt="Children learning"
            />
          </div>
          <div className="about-text">
            <h1 className="about-heading">About Us</h1>
            <p className="about-description">
              Welcome to Chota Vakil, where we are dedicated to making a
              difference in the lives of children across India by empowering
              them with knowledge about their rights and the legal system.
            </p>
            <button className="about-cta-button">Learn More</button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="section-heading">Our Mission</h2>
            <p className="section-description">
              Our mission is simple yet profound: to increase legal literacy and
              awareness among children in India. We believe that every child
              deserves to know their rights and have the tools to protect and
              advocate for themselves.
            </p>
          </div>
          <div className="mission-gallery">
            <div className="gallery-image">
              <img src="images/abt2_img1.png" alt="Mission visual 1" />
            </div>
            <div className="gallery-image">
              <img src="images/abt2_img2.png" alt="Mission visual 2" />
            </div>
            <div className="gallery-image">
              <img src="images/abt2_img3.png" alt="Mission visual 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Children's Rights Section */}
      <section className="why-rights-section">
        <div className="rights-content">
          <div className="rights-text">
            <h2 className="section-heading">Why Children's Rights?</h2>
            <p className="section-description">
              In India, where one of the world's largest child populations
              resides, understanding and safeguarding children's rights is of
              utmost importance. Unfortunately, many children are unaware of
              their rights or lack access to resources that can help them
              navigate the complexities of the legal system.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="solution-section">
        <div className="solution-content">
          <div className="solution-text">
            <h2 className="section-heading">Our Solution</h2>
            <p className="section-description">
              To address this critical need, we have developed a cutting-edge
              gamified platform that makes learning about children's rights
              engaging, fun, and accessible to all. Our platform combines the
              power of technology with the principles of education to create an
              immersive experience that children love.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="unique-features-section">
        <h2 className="section-heading centered">What Sets Us Apart?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3 className="feature-title">Gamification</h3>
            <p className="feature-description">
              Through engaging games, interactive challenges, and rewarding
              experiences, we transform what might otherwise be a mundane
              educational journey into something exciting and immersive. This
              not only captures children's attention but also keeps them
              motivated to explore and learn about their rights.
            </p>
            <div className="feature-image">
              <img src="images/gamification.png" alt="Gamification" />
            </div>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Accessibility</h3>
            <p className="feature-description">
              Our platform is designed with inclusivity in mind, making it
              accessible to children from all walks of life. We have worked
              tirelessly to create a user-friendly platform that accommodates a
              wide range of devices and internet connectivity levels.
            </p>
            <div className="feature-image">
              <img src="images/accesibility.png" alt="Accessibility" />
            </div>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Empowerment</h3>
            <p className="feature-description">
              Our mission extends beyond mere education; it centers on
              empowerment. We equip children with the confidence, skills, and
              awareness they need to stand up for their rights and advocate for
              themselves and their peers.
            </p>
            <div className="feature-image">
              <img src="images/empowerment.png" alt="Empowerment" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-heading">Join Us in Making a Difference</h2>
          <p className="cta-description">
            Together, we can create a future where every child in India is aware
            of their rights and empowered to protect them.
          </p>
          <button className="cta-button">Get Involved</button>
        </div>
      </section>
    </div>
  );
}

export default About;

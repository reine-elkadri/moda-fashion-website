import React from 'react';

function About() {
  return (
    <div>

      <div className="page-header">
        <h1>About Moda</h1>
        <p>OUR STORY AND MISSION</p>
      </div>

      <div className="about-section">

        <div className="about-row">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Moda is a fashion brand inspired by Spanish and Arabic culture, representing a modern, simple fashion store targeting young women.</p>
            <p>Founded with the vision of bringing elegant yet accessible style to every woman, we focus on soft aesthetics, quality fabrics, and timeless designs.</p>
          </div>
          <div className="about-image">
            <img src="/images/about.png" alt="About Moda" />
          </div>
        </div>

        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>To empower women through fashion that feels elegant, simple, and modern every day.</p>
        </div>

      </div>

    </div>
  )
}

export default About;
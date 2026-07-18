import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">about me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            3rd-year CS &amp; Applied Math student at UC Santa Cruz.
            I work on GPU programming, high-performance computing, and
            computational graphics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">about me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I am currently a 3rd year Computer Science and Applied Math student at the
            University of California, Santa Cruz. My areas of interest include GPU
            Programming, High Performance Computing, and Computational Graphics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

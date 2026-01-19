import React from 'react';
import AsciiImage from './ascii_image.js';
import aboutMe from '../images/profile.jpeg';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">about me</h2>
      
      <div className="about-content">
        <div className="about-ascii">
          {/* <AsciiImage file={aboutMe} id="about_me" /> */}
        </div>
        
        <div className="about-text">
          <p>
            I am currently a sophomore Computer Science and Applied Math student at the University of California, Santa Cruz. 
            My areas of interest include GPU Programming, and High Performance Computing, and Computational Graphics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
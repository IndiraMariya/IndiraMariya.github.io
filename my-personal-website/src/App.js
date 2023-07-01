import React, { useEffect } from 'react';
import './App.css';
import Typed from 'typed.js';
import AsciiImage from './ascii_image.js';
import linkedinImage from './images/linkedin.png';
import githubImage from './images/github.png';
import emailImage from './images/email.png';
import arenaImage from './images/arena.png';

function App() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["a Coder.", "a Designer.", "Indira Mariya."],
      typeSpeed: 150,
      backSpeed: 170,
      loop: true
    });

    return () => {
      typed.destroy(); // Cleanup when the component is unmounted
    };
  }, []);

  return (
    <div className="App">


      <header className="App-header">
        <div className="container">
          <h1>
            I'm <span className="auto-type"></span>
          </h1>
        </div>
      </header>
      {/* <AsciiImage /> */}

      <main>
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
          <p>Introduce yourself and highlight your skills and expertise here.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>Provide information about yourself, your background, and your experience.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of the project.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of the project.</p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Provide contact information and a contact form for visitors to reach out to you.</p>
        </section>

      </main>


      <footer>
        <a href="https://www.linkedin.com/in/indira-m/">
          <img src={linkedinImage} alt="LinkedIn" style={{ width: '35px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }} />
        </a>
        <a href="https://www.linkedin.com/in/indira-m/">
          <img src={emailImage} alt="Email" style={{ width: '35px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }} />
        </a>
        <a href="https://github.com/IndiraMariya">
          <img src={githubImage} alt="Github" style={{ width: '35px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }} />
        </a>
        <a href="https://github.com/IndiraMariya">
          <img src={arenaImage} alt="Arena" style={{ width: '40px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }} />
        </a>
        <p style={{ paddingBottom: '15px', }}>&copy; 2023 Indira Mariya</p>
      </footer>


    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Typed from 'typed.js';
import AsciiImage from './ascii_image.js';
import ScrollPercent from './ScrollPercent.js';
import linkedinImage from './images/linkedin.png';
import githubImage from './images/github.png';
import emailImage from './images/email.png';
import arenaImage from './images/arena.png';
import aboutMe from './images/profile.jpeg';
import contact from './images/contact.png';
import ProjectTitle from './ProjectTitle.js';
import DarkModeToggle from './DarkModeToggle.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const name = "Indira Mariya."
    const typed = new Typed(".auto-type", {
      strings: ["a Coder.", "a Designer.", name.italics()],
      typeSpeed: 100,
      backSpeed: 120,
      loop: true
    });

    return () => {
      typed.destroy(); // Cleanup when the component is unmounted
    };
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">

        {/* some kind of logo/home button teop left corner */}
        <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} id="toggle"/>
        <div className="nav">
          <a href="#about">About</a>
          <span>&#x2022;</span>
          <br></br>
          <br></br>
          <a href="#projects">Projects</a>
          <span>&#x2022;</span>
          <br></br>
          <br></br>
          <a href="#contact">Contact Me</a>
          <span>&#x2022;</span>
          <br></br>
          <br></br>
        </div>

        <div className="container">
          <h1>
            I'm <span className="auto-type"></span>
          </h1>
        </div>

        <ScrollPercent />
      </header>

      <main>
        <h2 id="aboutHead">about me</h2>
        <section id="about">
          <AsciiImage file={aboutMe} id="about_me" />
          <p>I am a current freshman Computer Science student at the University of California, Santa Cruz. My areas of interest include Machine Learning, Astrophysics, and Graphics.</p>

          </section>

        <div id="divider"> </div>


        <section id="skills">
          <h2>My Skills</h2>
          <div class="skills-grid">
            <div class="skill-box">
              {/* <div class="icon">🎯</div> */}
              {/* <AsciiImage file={java} id="icon"></AsciiImage> */}
              <p>Java</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">🐍
              </div> */}
              <p>Python</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">🔧</div> */}
              <p>C</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">💻</div> */}
              <p>Bash</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">📊</div> */}
              <p>Pandas</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">🔢</div> */}
              <p>Matlab</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">🖥️</div> */}
              <p>JavaScript</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">🌐</div> */}
              <p>HTML</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">🎨</div> */}
              <p>CSS</p>
            </div>
            <div class="skill-box">
              {/* <div class="icon">🧠</div> */}
              <p>Machine Learning</p>
            </div>
          </div>
        </section>





        <div id="divider"> </div>

        <section id="projects">
          {/* <h1 style={{ fontSize: '40px' }}>Recent <br></br> Projects</h1> */}
          <ProjectTitle></ProjectTitle>

          {/* <a href="/double.js" target="_blank" rel="noopener noreferrer"> */}
          <div className="project">
            <h2>The Double Scoop</h2>
            
            <p>An app made with machine learning to detects media bias, present a diverse range of American news articles to users.</p>
          </div>
          

          <div className="project">
            <h2>Solar Flare Prediction</h2>
            <p>Predict solar flares to provide early warnings, helping to protect Earth’s electrical infrastructure.
            </p>
          </div>

          <div className="project">
            <h2>Shaders</h2>
            <p>Exploring various graphics techniques such as dithering, ASCII art, fractals, and more using Python.
            </p>

            </div>

          <div className="project">
            <h2>LOX</h2>
            <p>Conceptualized, designed, prototyped, and tested a productto help students stay focused during remote learning from the COVID-19 pandemic. 
            </p>
          </div>

          <div className="project">
            <h2>Coming Soon</h2>
            <p> A work in progress...</p>          
          </div>

        </section>


        <div id="divider"> </div>

        <section id="contact">
          <h2>contact me</h2>
          <p>Get in touch with me. @indira.mariya@gmail.com</p>
        </section>

        {/* <AsciiImage file={java}></AsciiImage> */}
      </main>

      <footer>
        <a href="https://www.linkedin.com/in/indira-m/">
          <img src={linkedinImage} alt="LinkedIn" style={{ width: '35px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }} />
        </a>
        <a href="https://indira.mariya@gmail.com">
          <img src={emailImage} alt="Email" style={{ width: '35px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }} />
        </a>
        <a href="https://github.com/IndiraMariya">
          <img src={githubImage} alt="Github" style={{ width: '35px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }} />
        </a>
        <a href="https://www.are.na/indira-m">
          <img src={arenaImage} alt="Arena" style={{ width: '40px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }} />
        </a>
        <p style={{ paddingBottom:'15px'}}>&copy; 2023 Indira Mariya. All rights reserved. | Crafted with passion.</p>
      </footer>
    </div>
  );
}

export default App;

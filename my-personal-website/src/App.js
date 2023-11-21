import React, { useEffect } from 'react';
import './App.css';
import Typed from 'typed.js';
import AsciiImage from './ascii_image.js';
import ScrollPercent from './ScrollPercent.js';
import linkedinImage from './images/linkedin.png';
import githubImage from './images/github.png';
import emailImage from './images/email.png';
import arenaImage from './images/arena.png';
import aboutMe from './images/profile.jpeg';
import notMe from './images/me2.jpeg';
import me from './images/me.png';
import one from './images/one.jpg';
import two from './images/two.png';
import contact from './images/contact.png';
import ProjectTitle from './ProjectTitle.js';

function App() {
  useEffect(() => {
    const name = "Indira Mariya."
    const typed = new Typed(".auto-type", {
      strings: ["a Coder.", "a Designer.", name.italics()],
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

        {/* some kind of logo/home button teop left corner */}

        <div className="nav">
          <a href="#home">Home</a>
          <span>&#x2022;</span>
          <br></br>
          <br></br>
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

        <section id="home">
          <h4 id="center">Dive into my portfolio — a digital realm where ideas take shape through the magic of coding.</h4>
          {/* <p>Introduce yourself and highlight your skills and expertise here.</p> */}
        </section>

        <div id="divider"> </div>

        <h2 id="aboutHead">about me</h2>
        <section id="about">

          <AsciiImage file={aboutMe} id="about_me" />
          <p>Hello! I'm a high school coder with a focus on web development. I enjoy building websites and applications, turning ideas into functional code. Outside of coding, I like exploring new technologies and staying updated on industry trends.</p>
        </section>

        <div id="divider"> </div>

        <section id="skills">
          <h2>my skills:</h2>
          <p>java, python, swift, bash, react, c++, javascript, css, html</p>
        </section>

        <div id="divider"> </div>

        <section id="projects">
          {/* <h1 style={{ fontSize: '40px' }}>Recent <br></br> Projects</h1> */}
          <ProjectTitle></ProjectTitle>

          <div className="project">
            <h2>The Double Scoop</h2>
            {/* <div id="filler"></div> */}
            {/* <AsciiImage file={two} /> */}
            <p>An app made with machine learning to detects media bias, present a diverse range of American news articles to users.</p>
          </div>

          <div className="project">
            <h2>Magic Mirror</h2>
            {/* <AsciiImage file={one} /> */}
            <p>A customized fork of the Magic Mirror project, this enhanced version offers a captivating smart mirror experience with personalized widgets.</p>
          </div>

          <div className="project">
            <h2>Shopping-Cart Detection</h2>
            {/* <div id="filler"></div> */}
            {/* <AsciiImage file={two} /> */}
            <p>Detect ghosted shopping carts, leveraging Jetson Nano and real-time image detection for proactive e-commerce optimization.</p>
          </div>

          <div className="project">
            <h2>Solar Flare Prediction</h2>
            {/* <div id="filler"></div> */}
            {/* <AsciiImage file={two} /> */}
            <p>Detect ghosted shopping carts, leveraging Jetson Nano and real-time image detection for proactive e-commerce optimization.</p>
          </div>

          <div className="project">
            <h2>LOX</h2>
            {/* <div id="filler"></div> */}
            {/* <AsciiImage file={two} /> */}
            <p>Detect ghosted shopping carts, leveraging Jetson Nano and real-time image detection for proactive e-commerce optimization.</p>
          </div>

        </section>


        <div id="divider"> </div>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Get in touch with me.</p>
          <div>
            {/* <AsciiImage file={contact} /> */}
            <form action="/submit-form" method="POST">
              <span id="required"> *</span>
              <label htmlFor="name">name:</label>
              <input type="text" id="name" name="name" required />
              <br></br>
              <span id="required">&nbsp;</span>
              <label htmlFor="email">email:</label>
              <input type="email" id="email" name="email" required />
              <br></br>
              <span id="required">&nbsp;</span>
              <label htmlFor="phone">phone:</label>
              <input type="number" id="phone" name="phone" />
              <br></br>
              <span id="required"> *</span>
              <label htmlFor="message">message:</label>
              <textarea id="message" name="message" rows="1" required></textarea>
              <br></br>
              <br></br>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
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
        <p style={{ paddingBottom:'15px'}}>&copy; 2023 Indira Mariya. All rights reserved. | Crafted with passion and a touch of <span role="img" aria-label="heart">❤️</span></p>
      </footer>

    </div>
  );
}

export default App;

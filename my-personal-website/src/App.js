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
import me from './images/me.png';
import one from './images/one.jpg';
import two from './images/two.png';
import contact from './images/contact.png';

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
          <h1>Welcome to My Portfolio</h1>
          <p>Introduce yourself and highlight your skills and expertise here.</p>
        </section>

        <div id="divider"> </div>

        <h2 id="aboutHead">About Me</h2>
        <section id="about">

          <AsciiImage file={aboutMe} id="about_me" />
          <p>I'm a dedicated and passionate software engineer with a strong background in web development. I have a keen eye for detail and a drive for delivering high-quality, efficient, and user-friendly solutions. With several years of experience in the industry, I have worked on a wide range of projects, from small startups to large-scale enterprise applications. My expertise lies in front-end development, where I enjoy crafting intuitive user interfaces using modern web technologies. I thrive in collaborative environments and value teamwork, communication, and continuous learning. Outside of coding, I love exploring the outdoors, playing the guitar, and immersing myself in a good book.</p>
        </section>

        <div id="divider"> </div>

        <section id="skills">
          <h2>I have these skills:</h2>
        </section>

        <div id="divider"> </div>

        <section id="projects">
          <h1>Projects</h1>

          <div class="project">
            <h3>Magic Mirror</h3>
            <AsciiImage file={one} />
            <p>Description of the project.</p>
          </div>

          <div class="project">
            <h3>Shopping-Cart Detection</h3>
            {/* <div id="filler"></div> */}
            <AsciiImage file={two} />
            <p>Description of the project.</p>
          </div>
        </section>


        <div id="divider"> </div>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Provide contact information and a contact form for visitors to reach out to you.</p>
          <div>
            <AsciiImage file={contact} />
            <form action="/submit-form" method="POST">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <span id="required"> *</span>
              <br></br>
              <br></br>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <span id="required"> *</span>
              <br></br>
              <br></br>
              <label for="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
              <span id="required"> *</span>
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

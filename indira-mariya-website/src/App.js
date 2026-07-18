import { useState } from 'react';
import './App.css';
import './components/sections.css';
import AsciiImage from './components/ascii_image.js';
import star from './images/star.png';
import book from './images/book.png';
import contact from './images/contact.png';

// import DarkModeToggle from './components/DarkModeToggle.js';
import Header from './components/Header.js';
import Divider from './components/Divider.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <section id="home"></section>

        <About />
        <Divider />
        <div className="section-row">
          {/* <AsciiImage file={book} id="book_img" /> */}
          <Education />
        </div>
        <Divider />
        <div className="section-row-fill">
          <div className="flex-fill">
            <Skills />
          </div>
          <div style={{ flexShrink: 0 }}>
            {/* <AsciiImage file={star} id="star_img" style={{ width: '80px', height: '80px' }} /> */}
          </div>
        </div>
        <Divider />
        <Projects />
        <Divider />
        <div className="section-row">
          {/* <AsciiImage file={contact} id="contact_img" /> */}
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
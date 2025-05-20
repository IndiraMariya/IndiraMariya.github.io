import { useState } from 'react';
import './App.css';
import AsciiImage from './components/ascii_image.js';
import star from './images/star.png';
import book from './images/book.png';
import contact from './images/contact.png';

import DarkModeToggle from './components/DarkModeToggle.js';
import Header from './components/Header';
import Divider from './components/Divider.js';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education.js';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
          <div style={{ flex: 1 }}>
            <Skills />
          </div>
          <div style={{ flexShrink: 0 }}>
            <AsciiImage file={star} id="star_img" style={{ width: '80px', height: '80px' }} />
          </div>
        </div>

        <Divider />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '66px' }}>
          <AsciiImage file={book} id="book_img" />
          <Education />
        </div>

        <Divider />
        <Projects />
        <Divider />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '66px' }}>
          <AsciiImage file={contact} id="contact_img" />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

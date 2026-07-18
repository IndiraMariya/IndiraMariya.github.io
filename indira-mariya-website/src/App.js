import { useState } from 'react';
import './App.css';
import './components/sections.css';

import DarkModeToggle from './components/DarkModeToggle.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <section id="home"></section>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

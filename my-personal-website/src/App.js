import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import DarkModeToggle from './components/DarkModeToggle.js';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
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

        <Skills />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

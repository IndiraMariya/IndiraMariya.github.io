import React, { useRef } from 'react';
import DarkModeToggle from './DarkModeToggle';
import Nav from './Nav';
import Name from './Name';
import AsciiParticles from './AsciiParticles';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
  const heroRef = useRef(null);

  return (
    <header className="App-header">
      <AsciiParticles nameRef={heroRef} />
      {/* <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} id="toggle" /> */}
      {/* <Nav /> */}

      <div className="hero-content" ref={heroRef}>
        <Name />

        <p className="hero-tagline">
            Computer Science &amp; Applied Mathematics student at UC Santa Cruz.
            I work on GPU programming, high-performance computing, and
            computational graphics.
        </p>

        <div className="hero-cta">
          <a
            className="hero-btn hero-btn-primary"
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ↓ Download Résumé
          </a>
          <a className="hero-btn hero-btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

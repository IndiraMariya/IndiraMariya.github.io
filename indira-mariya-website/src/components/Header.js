import React, { useRef } from 'react';
import DarkModeToggle from './DarkModeToggle';
import Nav from './Nav';
import Name from './Name';
import AsciiParticles from './AsciiParticles';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
  const nameRef = useRef(null);

  return (
    <header className="App-header">
      <AsciiParticles nameRef={nameRef} />
      {/* <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} id="toggle" /> */}
      {/* <Nav /> */}
      <Name nameRef={nameRef} />
    </header>
  );
}

export default Header;
import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import Nav from './Nav';
import Name from './Name';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="App-header">
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} id="toggle" />
      <Nav />
      <Name />
    </header>
  );
}

export default Header;

// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, I'm Indira Mariya</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hi, I'm John Doe, a passionate web developer. I love building
            interactive websites using the latest web technologies.
          </p>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: john@example.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 John Doe</p>
      </footer>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import Typed from 'typed.js';

function App() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["a Coder.", "a Designer.", "Indira Mariya."],
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
        <div className="container">
          <h1>
            I'm <span className="auto-type"></span>
          </h1>
        </div>
      </header>
      <main>
        {/* Rest of your code */}
      </main>
      <footer>
        <p>&copy; 2023 Indira Mariya</p>
      </footer>
    </div>
  );
}

export default App;

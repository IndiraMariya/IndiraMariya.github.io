import React from 'react';
import './DarkModeToggle.css';

function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button
      className="dark-toggle"
      onClick={onToggle}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Light mode' : 'Dark mode'}
    >
      {darkMode ? (
        // Closed eye — night: curved closed lid + downward lashes
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 9c3 3.5 15 3.5 18 0" />
          <line x1="5.5" y1="11.3" x2="4" y2="14" />
          <line x1="9" y1="12.6" x2="8" y2="15.5" />
          <line x1="12" y1="13" x2="12" y2="16" />
          <line x1="15" y1="12.6" x2="16" y2="15.5" />
          <line x1="18.5" y1="11.3" x2="20" y2="14" />
        </svg>
      ) : (
        // Open eye — day
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );
}

export default DarkModeToggle;

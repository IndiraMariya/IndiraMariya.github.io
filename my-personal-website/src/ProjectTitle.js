import React, { useState } from 'react';

const ProjectTitle = () => {
  const [arrowOpacity, setArrowOpacity] = useState(0);

  const titleContainerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const arrowStyle = {
    opacity: arrowOpacity,
    transition: 'opacity 0.3s ease-in-out',
    position: 'absolute',
    top: '70%', // Place the arrow below the text
    left: '50%', // Center the arrow horizontally
    transform: 'translateX(-50%)', // Center the arrow horizontally
    display: 'inline-block',
    fontSize: '70px',
    fontWeight: '100',
  };

  const sameStyle = {
    opacity: arrowOpacity,
    transition: 'opacity 0.3s ease-in-out',
    position: 'absolute',
    top: '122%', // Place the arrow below the text
    left: '15%', // Center the arrow horizontally
    transform: 'translateX(-50%)', // Center the arrow horizontally
    display: 'inline-block',
    fontSize: '10px',
    fontWeight: '100',
  };

  const handleHover = () => {
    setArrowOpacity(1);
  };

  const handleLeave = () => {
    setArrowOpacity(0);
  };

  return (
    <h1 style={{ fontSize: '40px', position: 'relative' }}>
      <span
        style={titleContainerStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        recent <br /> projects
        <span style={sameStyle}>see more</span>
        <span style={arrowStyle}>&#10230;</span>
      </span>
    </h1>
  );
};

export default ProjectTitle;

// &#10230;
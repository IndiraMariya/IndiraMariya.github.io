import React from 'react';

function Project({ title, description }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Project;

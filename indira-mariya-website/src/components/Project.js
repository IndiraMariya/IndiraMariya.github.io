import React from 'react';

function Project({ title, description }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;

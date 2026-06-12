import React from 'react';

function Name({ nameRef }) {
  return (
    <div className="name" style={{ position: 'relative', zIndex: 2 }}>
      <h1 ref={nameRef}>Indira Mariya</h1>
    </div>
  );
}

export default Name;
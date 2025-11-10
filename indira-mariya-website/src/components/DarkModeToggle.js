// DarkModeToggle.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => (props.darkMode ? '#ffffff00' : '#ffffff00')};
  color: ${props => (props.darkMode ? '#fff' : '#1a1d64')};
  cursor: pointer;
  font-size: 56px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: 20px;
  transition: background-color 0.3s, color 0.3s;
  border: none; /* Remove border */
`;

const AsciiImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px; /* Adjust the width of the ASCII image */
  height: 20px; /* Adjust the height of the ASCII image */
`;

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <StyledButton darkMode={darkMode} onClick={onToggle}>
      +
    </StyledButton>
  );
};

export default DarkModeToggle;

import React, { useState } from 'react';
import './DarkModeToggle.css';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './DarkModeToggle';
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={handleToggle}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;


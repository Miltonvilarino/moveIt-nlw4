import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ToggleColor: React.FC = () => {
  
  const { ToggleTheme } = useTheme();

  return (
  <div>
    <button type='button' onClick={ToggleTheme}>Tema</button>
  </div>);
}

export default ToggleColor;
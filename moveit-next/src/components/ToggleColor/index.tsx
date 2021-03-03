import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

import { Container } from './styles';

const ToggleColor: React.FC = () => {
  
  const { ToggleTheme, theme } = useTheme();

  return (
  <Container>
    <button type='button' onClick={ToggleTheme}>{theme.title.toUpperCase() === 'DARK' ? 'Light': 'Dark' }</button>
  </Container>);
}

export default ToggleColor;
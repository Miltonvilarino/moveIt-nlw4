import React from 'react';

import { Container } from './styles';

function Button(props) {
  return <Container>
    <button>{props.name}</button>
  </Container>
}

export default Button;
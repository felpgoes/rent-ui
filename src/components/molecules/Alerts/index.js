import React from 'react';

import { Container } from './styles';

function Alerts({ children, type, width, height, display, margin }) {
  return (
    <Container
      width={width}
      type={type}
      height={height}
      display={display}
      margin={margin}
    >
      {children}
    </Container>
  );
}

export default Alerts;

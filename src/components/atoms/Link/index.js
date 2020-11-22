import React from 'react';

import { Container } from './styles';

function Link({
  title,
  login,
  color,
  textDecoration,
  href,
  onClick,
  children,
}) {
  return (
    <Container
      login={login}
      color={color}
      textDecoration={textDecoration}
      href={href}
      onClick={onClick}
      title={title}
    >
      {children}
    </Container>
  );
}

export default Link;

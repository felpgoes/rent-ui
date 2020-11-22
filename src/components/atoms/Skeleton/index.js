import React from 'react';
import EmptyContent from '../../molecules/EmptyContent';

import { Container } from './styles';

function Skeleton({ marginUpDown, marginSides, width, height, marginBottom }) {
  return (
    <Container
      marginUpDown={marginUpDown}
      marginSides={marginSides}
      width={width}
      height={height}
      marginBottom={marginBottom}
    />
  );
}

export default Skeleton;

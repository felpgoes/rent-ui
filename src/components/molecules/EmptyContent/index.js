import React from 'react';

import { ContainerEmptyContent, EmptyRow, EmptyContentText } from './styles';

import Skeleton from '../../atoms/Skeleton';

function EmptyContent({
  children,
  text = 'Nenhum registro localizado',
  display,
  marginTop,
  isLoading,
}) {
  return !isLoading ? (
    <ContainerEmptyContent display={display} marginTop={marginTop}>
      {children ? (
        <EmptyContentText>{children}</EmptyContentText>
      ) : (
        <EmptyContentText>{text}</EmptyContentText>
      )}
      <EmptyRow />
      <EmptyRow />
    </ContainerEmptyContent>
  ) : (
    <ContainerEmptyContent display={display} marginTop={marginTop}>
      <Skeleton height="104px" marginBottom="16" />
      <Skeleton height="40px" marginUpDown="10" />
      <Skeleton height="40px" marginUpDown="10" />
    </ContainerEmptyContent>
  );
}

export default EmptyContent;

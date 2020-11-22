import React from 'react';

import {
  Container,
  CardFilterContentContainer,
  CardFilterHeaderContainer,
  CardFilterFooterContainer,
} from './styles';

function CardFilter({ children, minHeight }) {
  return <Container minHeight={minHeight}>{children}</Container>;
}

const CardFilterContent = ({ children, minHeight }) => {
  return (
    <CardFilterContentContainer minHeight={minHeight}>
      {children}
    </CardFilterContentContainer>
  );
};

const CardFilterHeader = ({ children }) => {
  return <CardFilterHeaderContainer>{children}</CardFilterHeaderContainer>;
};

const CardFilterFooter = ({
  children,
  justifyContent,
  paddingLeft,
  paddingTop,
}) => {
  return (
    <CardFilterFooterContainer
      justifyContent={justifyContent}
      paddingLeft={paddingLeft}
      paddingTop={paddingTop}
    >
      {children}
    </CardFilterFooterContainer>
  );
};

export { CardFilter, CardFilterContent, CardFilterHeader, CardFilterFooter };

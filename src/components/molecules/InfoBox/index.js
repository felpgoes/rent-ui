import React from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Container, IconContainer } from './styles';
import { Text } from '../../atoms/Text';

import theme from '../../../styles/theme';

function InfoBox({ children, type, width, height, display, marginTop, error }) {
  return (
    <Container
      marginTop={marginTop}
      error={error}
      width={width}
      type={type}
      height={height}
      display={display}
    >
      <IconContainer>
        {!error ? (
          <RiErrorWarningLine color={theme.yellowDefault} size="20px" />
        ) : (
          <AiOutlineCloseCircle color={theme.redDefault} size="20px" />
        )}
      </IconContainer>
      <Text
        color={theme.titleGray}
        font="14px calibri"
        padding="12px"
        text={children}
      />
    </Container>
  );
}

export default InfoBox;

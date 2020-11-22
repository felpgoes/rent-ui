import React from 'react';

import { Container } from './styles';

function ButtonConfirm({
  text,
  onClick,
  marginBottom,
  color,
  children,
  padding,
  justifyCenter,
  justifySpaceBetween,
  justifyEnd,
  justifyStart,
  justifySpaceAround,
  justifySpaceEvenly,
  alignStart,
  alignCenter,
  alignEnd,
  display,
  width,
  height,
  marginTop,
  marginSides,
  disabled,
  opacity,
  type,
  borderRadius,
  background,
  border,
  fontFamily,
  marginRight,
  isLoading,
  disableHover,
  marginLeft,
  fontSize,
}) {
  return (
    <Container
      onClick={onClick}
      text={text}
      marginBottom={marginBottom}
      color={color}
      padding={padding}
      justifyCenter={justifyCenter}
      justifySpaceBetween={justifySpaceBetween}
      justifyEnd={justifyEnd}
      justifyStart={justifyStart}
      justifySpaceAround={justifySpaceAround}
      justifySpaceEvenly={justifySpaceEvenly}
      alignStart={alignStart}
      alignCenter={alignCenter}
      alignEnd={alignEnd}
      display={display}
      width={width}
      height={height}
      marginTop={marginTop}
      marginSides={marginSides}
      disabled={disabled || isLoading}
      opacity={opacity}
      type={type}
      borderRadius={borderRadius}
      background={background}
      border={border}
      fontFamily={fontFamily}
      marginRight={marginRight}
      isLoading={isLoading}
      disableHover={disableHover}
      marginLeft={marginLeft}
      fontSize={fontSize}
    >
      {children}
    </Container>
  );
}

export default ButtonConfirm;

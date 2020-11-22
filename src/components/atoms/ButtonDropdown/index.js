import React from 'react';

import { PrimaryButton, SecondaryButton } from './styles';

function ButtonDropdown({
  text,
  onClick,
  marginBottom,
  color,
  padding,
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
  primaryIcon,
  secondaryIcon,
}) {
  return (
    <>
      <PrimaryButton
        onClick={onClick}
        text={text}
        marginBottom={marginBottom}
        color={color}
        padding={padding}
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
        {primaryIcon}
      </PrimaryButton>
      <SecondaryButton
        onClick={onClick}
        color={color}
        type={type}
        background={background}
      >
        {secondaryIcon}
      </SecondaryButton>
    </>
  );
}

export default ButtonDropdown;

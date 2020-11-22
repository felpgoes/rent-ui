import React from 'react';

import { CheckboxContainer, StyledCheckbox, Icon, Text } from './styles';

const Checkbox = ({
  className,
  checked,
  label,
  height,
  width,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <CheckboxContainer
      {...props}
      className={className}
      onClick={(e) => {
        if (!disabled) {
          e.stopPropagation();
          onClick({
            ...e,
            checked,
          });
        }
      }}
    >
      <StyledCheckbox
        checked={checked}
        height={height}
        width={width}
        disabled={disabled}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      {label && <Text>{label}</Text>}
    </CheckboxContainer>
  );
};

export default Checkbox;

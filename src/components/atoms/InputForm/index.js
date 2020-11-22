import produce from 'immer';
import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { Container } from './styles';

const InputForm = ({
  marginTop,
  background,
  border,
  borderRadius,
  opacity,
  color,
  font,
  textAlign,
  name,
  type,
  value,
  handleChange = (a) => a,
  handleClick = (a) => a,
  handleInputKeyDown = (a) => a,
  handleInputOnBlur = (a) => a,
  width,
  height,
  placeholder,
  disabled,
  margin,
  marginLeft,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      ref={inputRef}
      marginLeft={marginLeft}
      margin={margin}
      marginTop={marginTop}
      name={name}
      onChange={(event) => {
        event.stopPropagation();
        handleChange(event);
      }}
      onKeyDown={(event) => {
        event.stopPropagation();
        handleInputKeyDown(event);
      }}
      onBlur={(event) => {
        event.stopPropagation();
        handleInputOnBlur(event);
      }}
      onClick={(event) => {
        event.stopPropagation();
        handleClick(event);
      }}
      value={value}
      type={type}
      border={border}
      background={background}
      borderRadius={borderRadius}
      opacity={opacity}
      color={color}
      font={font}
      textAlign={textAlign}
      width={width}
      height={height}
      placeholder={placeholder}
      disabled={disabled}
      isTyping={!!value}
    />
  );
};

export default InputForm;

import React, { useRef, useEffect } from 'react';
// import { useField } from '@rocketseat/unform';
import { Container } from './styles';

const InputMasked = ({
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
  width,
  height,
  placeholder,
  disabled,
  margin,
  mask,
  onClick = (a) => a,
  useField = (_) => _,
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'props.value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      ref={inputRef}
      margin={margin}
      marginTop={marginTop}
      name={name}
      onChange={(event) => handleChange(event)}
      onClick={(event) => {
        event.stopPropagation();
        onClick(event);
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
      mask={mask}
    />
  );
};

export default InputMasked;

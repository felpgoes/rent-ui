import produce from 'immer';
import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { BiCheckCircle } from 'react-icons/bi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Container, ErrorMessage, IconValidation } from './styles';

const InputFormLogin = ({
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
  errorUsuario,
  showOnBlur,
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
    <>
      <Container
        ref={inputRef}
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
        errorUsuario={errorUsuario}
      />
      {error ? (
        <>
          <IconValidation height="20px" showIconError={error}>
            <RiErrorWarningLine size="24" />
          </IconValidation>
          <ErrorMessage>{error}</ErrorMessage>
        </>
      ) : showOnBlur ? (
        <IconValidation height="20px" showIconError={error}>
          <BiCheckCircle size="24" />
        </IconValidation>
      ) : null}
    </>
  );
};

export default InputFormLogin;

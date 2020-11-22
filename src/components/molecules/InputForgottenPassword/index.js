import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';
import LabelContainer from '../LabelContainer';

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
  labelName,
  labelMarginBottom,
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
      <LabelContainer
        marginTop={marginTop || '20'}
        text={labelName}
        margin="0"
        marginBottom={labelMarginBottom || '0'}
        marginLeft={marginLeft || '0'}
      >
        <Container
          ref={inputRef}
          margin={margin}
          marginTop="9"
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
      </LabelContainer>
    </>
  );
};

export default InputForm;

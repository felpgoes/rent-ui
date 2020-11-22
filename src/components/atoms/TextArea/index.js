import React from 'react';

import { Container } from './styles';

const TextArea = ({
    background,
    border,
    borderRadius,
    opacity,
    color,
    font,
    textAlign,
    letterSpacing,
    width,
    height,
    name,
    value,
}) => (
    <Container
        border={border}
        background={background}
        borderRadius={borderRadius}
        opacity={opacity}
        color={color}
        font={font}
        textAlign={textAlign}
        letterSpacing={letterSpacing}
        width={width}
        height={height}
        name={name}
        value={value}
        multiline
    />
);

export default TextArea;

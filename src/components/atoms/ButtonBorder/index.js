import React from 'react';

import { Container } from './styles';

function ButtonBorder({
    onClick,
    text,
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
    width,
    height,
    marginBottom,
    marginTop,
    marginSides,
    disabled,
    opacity,
    typeAction,
    display,
    type,
    marginLeft,
    marginRight,
    color,
    background
}) {
    return (
        <Container
            onClick={onClick}
            text={text}
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
            width={width}
            height={height}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginTop={marginTop}
            marginSides={marginSides}
            disabled={disabled}
            opacity={opacity}
            typeAction={typeAction}
            display={display}
            type={type}
            marginRight={marginRight}
            color={color}
            background={background}
        >
            {children}
        </Container>
    );
}

export default ButtonBorder;

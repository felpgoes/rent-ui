import React from 'react';

import { Container } from './styles';

function ButtonBorderless({
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
    type,
    onClick,
}) {
    return (
        <Container
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
            type={type}
            onClick={onClick}
        >
            {children}
        </Container>
    );
}

export default ButtonBorderless;

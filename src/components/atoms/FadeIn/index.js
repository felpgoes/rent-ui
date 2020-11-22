import React from 'react';

import { Container } from './styles';

function FadeIn({ children, height, width }) {
    return (
        <Container height={height} width={width}>
            {children}
        </Container>
    );
}

export default FadeIn;

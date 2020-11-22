import React from 'react'

import { Container } from './styles'

const Title = ({
    text,
    gray,
    font,
    textAlign,
    letterSpacing,
    opacity,
    ...props
}) => (
        <Container
            gray={gray}
            font={font}
            textAlign={textAlign}
            letterSpacing={letterSpacing}
            opacity={opacity}      
            {...props}
        >
            {text}
        </Container>
    )

export default Title

import React from 'react';
import { Container } from './styles';

const Input = ({
    name,
    type,
    label,
    percentage,
    percentageMobile,
    logo,
    value,
    handleChange = (a) => a,
    whiteBackground,
}) => (
    <Container
        logo={logo}
        percentage={percentage}
        percentageMobile={percentageMobile}
        whiteBackground={whiteBackground}
    >
        <input
            name={name}
            onChange={(event) => handleChange(event)}
            placeholder={label}
            value={value}
            type={type}
        />
    </Container>
);

export default Input;

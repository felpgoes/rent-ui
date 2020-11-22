import React from 'react';

import { BsTrash } from 'react-icons/bs';

import { Container } from './styles';

const ButtonRemove = ({ onClick }) => {
    return (
        <Container type="button" onClick={onClick}>
            <BsTrash />
        </Container>
    );
};

export default ButtonRemove;

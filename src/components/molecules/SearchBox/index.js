import React from 'react';
import { Container } from './styles';
import InputSearch from '../../atoms/InputSearch/index';

import ButtonFilter from '../../atoms/ButtonFilter/index';

const SearchBox = ({
    value,
    onClick,
    isPressed,
    onChange,
    placeholder,
    onKeyDown,
    type,
    cancelFilterExtendsOpen,
}) => (
    <Container>
        <InputSearch
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            type={type}
        />

        <ButtonFilter
            text="filtros"
            isPressed={isPressed}
            onClick={onClick}
            cancelFilterExtendsOpen={cancelFilterExtendsOpen}
        />
    </Container>
);

export default SearchBox;

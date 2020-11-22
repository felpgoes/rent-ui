import React from 'react';

import { MdSearch } from 'react-icons/md';
import { Container, InputSearchContainer } from './styles';

const InputSearch = ({
    type,
    value,
    onChange = (a) => a,
    placeholder,
    onKeyDown,
}) => {
    return (
        <InputSearchContainer>
            <MdSearch size="20" color="grey" />
            <Container
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                value={value}
                onKeyDown={onKeyDown}
            />
        </InputSearchContainer>
    );
};

export default InputSearch;

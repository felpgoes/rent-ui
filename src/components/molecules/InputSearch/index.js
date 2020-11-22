import React, { useState } from 'react';
import produce from 'immer';
import { MdSearch } from 'react-icons/md';

import { Container, InputSearch, SearchIconContainer } from './styles';

function Inputsearch({
  inputName,
  value,
  handleChange,
  width,
  placeholder,
  margin,
  padding,
  justifyContent,
  backgroundColor,
}) {
  return (
    <Container
      padding={padding}
      justifyContent={justifyContent}
      margin={margin}
      backgroundColor={backgroundColor}
    >
      <InputSearch
        name={inputName}
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        height="40"
      />
      <SearchIconContainer>
        <MdSearch size="20" color="grey" />
      </SearchIconContainer>
    </Container>
  );
}

export default Inputsearch;

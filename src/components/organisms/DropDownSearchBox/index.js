import React, { useState } from 'react';
import produce from 'immer';
import { MdSearch } from 'react-icons/md';

import {
  Container,
  InputSearch,
  DropDownSearch,
  SearchIconContainer,
} from './styles';

function DropDownSearchBox({
  dropdownName,
  inputName,
  params,
  setParams,
  options,
  inputWidth,
  width,
  placeholder,
  marginRight,
  handleInputKeyDown = (_) => _,
  onClick = (_) => _,
}) {
  function handleChange(e) {
    const newParams = produce(params, (draft) => {
      draft[e.target.name] = e.target.value;

      return draft;
    });

    setParams(newParams);
  }

  const handleClick = (e) => {
    const newParams = produce(params, (draft) => {
      draft[e.target.name || e.target.getAttribute('name')] =
        e.target.dataset.text;
      draft[inputName] = '';
      return draft;
    });

    setParams(newParams);
  };

  return (
    <Container marginRight={marginRight}>
      <DropDownSearch
        name={dropdownName}
        params={params}
        setParams={setParams}
        headerText={params[dropdownName]}
        options={options}
        height="40"
        width={width}
        onClick={handleClick}
        overrideClick
      />
      <InputSearch
        name={inputName}
        value={params[inputName]}
        handleInputKeyDown={(e) => {
          if (e.keyCode === 13) e.preventDefault();
          handleInputKeyDown(e);
        }}
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder={placeholder}
        width={inputWidth}
        height="40"
      />
      <SearchIconContainer onClick={(e) => onClick(e)}>
        <MdSearch size="20" color="grey" />
      </SearchIconContainer>
    </Container>
  );
}

export default DropDownSearchBox;

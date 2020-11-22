import React, { useRef } from 'react';

import { DropDownListContainer, Dropdown, Option } from './styles';

import InputSearch from '../../molecules/InputSearch';

import useOutsideClick from '../../../utils/useOutsideClick';

import LoadingIcon from '../../Icons/LoadingIcon';

import { StatusListaRPAEnum } from '../../../enums';

function DropdownRPA({
  options,
  onClick,
  showDropdown,
  borderRadius,
  width,
  minWidth,
  maxHeight,
  nameSearch,
  placeholderSearch,
  handleChangeSearch,
  showInputSearch,
  widthSearch,
  valueSearch,
  display,
  marginLeft,
  marginRight,
  setShowDropdown,
  listas,
  disabled,
}) {
  const refDropdown = useRef();

  useOutsideClick(refDropdown, () => {
    if (showDropdown) setShowDropdown(false);
  });

  return (
    <DropDownListContainer
      display={showDropdown ? display : 'none'}
      width={width}
      borderRadius={borderRadius}
      minWidth={minWidth}
      marginLeft={marginLeft}
      marginRight={marginRight}
      ref={refDropdown}
    >
      <Dropdown disabled={disabled} maxHeight={maxHeight}>
        {showInputSearch ? (
          <>
            <InputSearch
              name={nameSearch}
              placeholder={placeholderSearch}
              width={widthSearch}
              padding="15px"
              justifyContent="center"
              handleChange={handleChangeSearch}
              value={valueSearch}
              backgroundColor="#FFF"
            />
            <>
              {Object.values(options)
                .filter((op) =>
                  op.toLowerCase().includes(valueSearch.toLowerCase())
                )
                .map((op, index) => (
                  <Option onClick={() => onClick(listas, index + 1)}>
                    {op}
                  </Option>
                ))}
            </>
          </>
        ) : (
          <>
            {options.map((op) => (
              <Option disabled={disabled} onClick={disabled ? null : onClick}>
                {op.text}
                {op.loading ? <LoadingIcon size="15px" /> : null}
              </Option>
            ))}
          </>
        )}
      </Dropdown>
    </DropDownListContainer>
  );
}

export default DropdownRPA;

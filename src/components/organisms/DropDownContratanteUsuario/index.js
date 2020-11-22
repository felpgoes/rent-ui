import React from 'react';
import theme from '../../../styles/theme';

import {
  Dropdown,
  DropDownContainer,
  DropDownListContainer,
  Option,
} from '../../molecules/Dropdown';

import InputSearch from '../../molecules/InputSearch';

import { DropDownHeaderContratantes, OptionsContainer } from './styles';

function DropDownContratanteUsuario({
  contratantes,
  onClick,
  headerText,
  maxHeight,
  name,
  disable,
  backgroundColor,
  paddingRight,
  color,
  border,
  cancelActive,
  handleChange,
  value,
}) {
  return (
    <DropDownContainer
      margin="0px"
      disable={disable}
      backgroundColor={backgroundColor}
      width="auto"
    >
      <DropDownHeaderContratantes
        width="fit-content"
        border={border}
        color={color}
        name={name}
        whiteSpace="nowrap"
        cancelActive={cancelActive}
      >
        {headerText}
      </DropDownHeaderContratantes>
      <DropDownListContainer minWidth="490px" width="fit-content">
        <Dropdown maxHeight="232px">
          <InputSearch
            name="contratantes"
            placeholder="Pesquise por código ou nome da contratante"
            width="360px"
            padding="15px"
            justifyContent="center"
            handleChange={handleChange}
            value={value}
          />
          <OptionsContainer maxHeight="150px">
            {contratantes
              .filter((contratante) =>
                contratante.nome.toLowerCase().includes(value.toLowerCase())
              )
              .map((contratante) => (
                <Option
                  color={theme.colorGray}
                  text={contratante.nome}
                  onClick={onClick}
                />
              ))}
          </OptionsContainer>
        </Dropdown>
      </DropDownListContainer>
    </DropDownContainer>
  );
}

export default DropDownContratanteUsuario;

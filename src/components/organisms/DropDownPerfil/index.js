import React from 'react';

import {
  Dropdown,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  Option,
} from '../../molecules/Dropdown';

import LabelContainer from '../../molecules/LabelContainer';

function DropDownPerfil({
  onClick,
  headerText,
  maxHeight,
  perfis,
  name,
  disable,
  backgroundColor,
  marginBottom,
}) {
  return (
    <LabelContainer marginBottom={marginBottom} text="Perfil">
      <DropDownContainer disable={disable} backgroundColor={backgroundColor}>
        <DropDownHeader disable={disable} name={name}>
          {headerText}
        </DropDownHeader>
        <DropDownListContainer>
          <Dropdown maxHeight={maxHeight}>
            {Object.values(perfis).map((perfil, index) => (
              <Option
                key={`${index}_${perfil}`}
                onClick={onClick}
                text={perfil}
              />
            ))}
          </Dropdown>
        </DropDownListContainer>
      </DropDownContainer>
    </LabelContainer>
  );
}

export default DropDownPerfil;

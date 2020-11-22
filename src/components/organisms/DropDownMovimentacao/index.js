import React from 'react';

import {
  Dropdown,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  Option,
} from '../../molecules/Dropdown';

import LabelContainer from '../../molecules/LabelContainer';

function DropDownMovimentacao({ onClick, headerText, maxHeight, tipos, name }) {
  return (
    <LabelContainer marginBottom="6" text="Movimentação">
      <DropDownContainer>
        <DropDownHeader name={name}>{headerText}</DropDownHeader>
        <DropDownListContainer>
          <Dropdown maxHeight={maxHeight}>
            {Object.values(tipos).map((tipo) => (
              <Option onClick={onClick} text={tipo} />
            ))}
          </Dropdown>
        </DropDownListContainer>
      </DropDownContainer>
    </LabelContainer>
  );
}

export default DropDownMovimentacao;

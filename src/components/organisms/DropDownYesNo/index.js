import React from 'react';

import {
  Dropdown,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  Option,
} from '../../molecules/Dropdown';

import LabelContainer from '../../molecules/LabelContainer';

function DropDownYesNo({ onClick, headerText, maxHeight, name, labelText }) {
  return (
    <LabelContainer marginBottom="6" text={labelText}>
      <DropDownContainer width="100px">
        <DropDownHeader name={name} width="100px">
          {headerText}
        </DropDownHeader>
        <DropDownListContainer width="100px">
          <Dropdown maxHeight={maxHeight}>
            <Option key={0} onClick={onClick} text="Todas" />
            <Option key={1} onClick={onClick} text="Sim" />
            <Option key={2} onClick={onClick} text="Não" />
          </Dropdown>
        </DropDownListContainer>
      </DropDownContainer>
    </LabelContainer>
  );
}

export default DropDownYesNo;

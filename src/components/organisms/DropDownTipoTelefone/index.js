import React from 'react';

import {
  Dropdown,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  Option,
} from '../../molecules/Dropdown';

function DropDownTipoTelefone({
  onClick,
  headerText,
  maxHeight,
  tipos,
  name,
  width,
  borderRadius,
  display,
  marginRight,
  marginLeft,
}) {
  return (
    <DropDownContainer
      width={width}
      display={display}
      marginRight={marginRight}
      marginLeft={marginLeft}
    >
      <DropDownHeader width={width} name={name} borderRadius={borderRadius}>
        {headerText}
      </DropDownHeader>
      <DropDownListContainer width={width}>
        <Dropdown maxHeight={maxHeight}>
          {Object.values(tipos).map((tipo, index) => (
            <Option key={`${index}_${tipo}`} onClick={onClick} text={tipo} />
          ))}
        </Dropdown>
      </DropDownListContainer>
    </DropDownContainer>
  );
}

export default DropDownTipoTelefone;

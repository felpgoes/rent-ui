import React from 'react';

import LabelContainer from '../../molecules/LabelContainer';
import DropDownTipoTelefone from '../DropDownTipoTelefone';

function DropDownTipoTelefoneLabel({
  onClick,
  headerText,
  maxHeight,
  tipos,
  name,
  width,
  marginRight,
  borderRadius,
  displayLabel,
}) {
  return (
    <LabelContainer
      text="Tipo de telefone"
      marginRight={marginRight}
      displayText={displayLabel}
    >
      <DropDownTipoTelefone
        onClick={onClick}
        headerText={headerText}
        maxHeight={maxHeight}
        tipos={tipos}
        name={name}
        width={width}
        borderRadius={borderRadius}
      />
    </LabelContainer>
  );
}

export default DropDownTipoTelefoneLabel;

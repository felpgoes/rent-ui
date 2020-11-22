import React from 'react';

import {
    Dropdown,
    DropDownContainer,
    DropDownHeader,
    DropDownListContainer,
    Option,
} from '../../molecules/Dropdown';

import LabelContainer from '../../molecules/LabelContainer';

function DropDownTermos({
    termos,
    headerText,
    onClick,
    disable,
    backgroundColor,
    name,
}) {
    return (
        <LabelContainer marginBottom="6" text="Termos">
            <DropDownContainer
                backgroundColor={backgroundColor}
                disable={disable}
            >
                <DropDownHeader name={name}>{headerText}</DropDownHeader>
                <DropDownListContainer>
                    <Dropdown>
                        {termos.map((termo) =>
                            termo.map((codigoTermo) => (
                                <Option
                                    onClick={onClick}
                                    text={codigoTermo.codigoTermo}
                                />
                            ))
                        )}
                    </Dropdown>
                </DropDownListContainer>
            </DropDownContainer>
        </LabelContainer>
    );
}

export default DropDownTermos;

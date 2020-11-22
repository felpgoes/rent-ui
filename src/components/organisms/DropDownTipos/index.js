import React from 'react';

import {
    Dropdown,
    DropDownContainer,
    DropDownHeader,
    DropDownListContainer,
    Option,
} from '../../molecules/Dropdown';

import LabelContainer from '../../molecules/LabelContainer';

function DropDownTipos({ onClick, headerText, maxHeight, tipos, name }) {
    return (
        <LabelContainer marginBottom="6" text="Tipos">
            <DropDownContainer>
                <DropDownHeader name={name}>{headerText}</DropDownHeader>
                <DropDownListContainer>
                    <Dropdown maxHeight={maxHeight}>
                        {Object.values(tipos).map((tipo, index) => (
                            <Option
                                key={`${index}_${tipo}`}
                                onClick={onClick}
                                text={tipo}
                            />
                        ))}
                    </Dropdown>
                </DropDownListContainer>
            </DropDownContainer>
        </LabelContainer>
    );
}

export default DropDownTipos;

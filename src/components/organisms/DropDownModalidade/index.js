import React from 'react';

import {
    Dropdown,
    DropDownContainer,
    DropDownHeader,
    DropDownListContainer,
    Option,
} from '../../molecules/Dropdown';

import LabelContainer from '../../molecules/LabelContainer';

function DropDownModalidade({
    modalidades,
    onClick,
    headerText,
    maxHeight,
    name,
    disable,
    backgroundColor,
}) {
    return (
        <LabelContainer marginBottom="6" text="Modalidades">
            <DropDownContainer
                disable={disable}
                backgroundColor={backgroundColor}
            >
                <DropDownHeader name={name}>{headerText}</DropDownHeader>
                <DropDownListContainer>
                    <Dropdown maxHeight={maxHeight}>
                        {modalidades.map((modalidade) => (
                            <Option
                                text={modalidade.codigoModalidade}
                                onClick={onClick}
                            />
                        ))}
                    </Dropdown>
                </DropDownListContainer>
            </DropDownContainer>
        </LabelContainer>
    );
}

export default DropDownModalidade;

import React from 'react';

import {
    Dropdown,
    DropDownContainer,
    DropDownHeader,
    DropDownListContainer,
    Option,
} from '../../molecules/Dropdown';

import LabelContainer from '../../molecules/LabelContainer';

function DropDownPermissao({
    onClick,
    headerText,
    maxHeight,
    permissoes,
    name,
    display,
    marginBottom,
}) {
    return (
        <LabelContainer
            marginBottom={marginBottom}
            display={display}
            text="Permissão"
        >
            <DropDownContainer>
                <DropDownHeader name={name}>{headerText}</DropDownHeader>
                <DropDownListContainer>
                    <Dropdown maxHeight={maxHeight}>
                        {Object.values(permissoes).map((permissao, index) => (
                            <Option
                                key={`${index}_${permissao}`}
                                onClick={onClick}
                                text={permissao}
                            />
                        ))}
                    </Dropdown>
                </DropDownListContainer>
            </DropDownContainer>
        </LabelContainer>
    );
}

export default DropDownPermissao;

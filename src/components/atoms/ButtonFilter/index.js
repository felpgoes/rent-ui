import React from 'react';

import { MdFilterList } from 'react-icons/md';
import { Container, IconContainer, PressedContainer } from './styles';

const ButtonFilter = ({
    selected,
    isPressed,
    disabled,
    text,
    onClick = (_) => _,
    cancelFilterExtendsOpen,
}) => {
    return isPressed ? (
        <>
            <PressedContainer
                selected={selected}
                tabIndex="-1"
                isPressed={isPressed}
                disabled={disabled}
                onClick={cancelFilterExtendsOpen ? null : () => onClick()}
            >
                <IconContainer>
                    <MdFilterList size="20" color="grey" />
                </IconContainer>
                {text}
            </PressedContainer>
        </>
    ) : (
        <>
            <Container
                selected={selected}
                tabIndex="-1"
                isPressed={isPressed}
                disabled={disabled}
                onClick={cancelFilterExtendsOpen ? null : () => onClick()}
            >
                <IconContainer>
                    <MdFilterList size="20" color="grey" />
                </IconContainer>
                {text}
            </Container>
        </>
    );
};

export default ButtonFilter;

import React from 'react';

import { Container } from './styles';

const CollapseItem = ({
    children,
    borderBottom,
    noJustify,
    confirmationModal,
    white,
    ...props
}) => (
    <Container
        {...props}
        borderBottom={borderBottom}
        noJustify={noJustify}
        white={white}
    >
        {children}
    </Container>
);

export default CollapseItem;

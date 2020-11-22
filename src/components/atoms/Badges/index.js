import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import {
    BadgesContainer,
    BadgesHeaderContainer,
    BadgesContentContainer,
} from './styles';

function Badges({ children }) {
    return (
        <BadgesContainer>
            {children}
            <AiOutlineClose />
        </BadgesContainer>
    );
}

function BadgesHeader({ children }) {
    return <BadgesHeaderContainer>{children}</BadgesHeaderContainer>;
}

function BadgesContent({ children }) {
    return <BadgesContentContainer>{children}</BadgesContentContainer>;
}

export { Badges, BadgesHeader, BadgesContent };

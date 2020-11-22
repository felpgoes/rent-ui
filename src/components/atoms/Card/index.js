import React from 'react';

import {
    Container,
    CardHeaderContainer,
    CardContentWrapperContainer,
    CardFooterContainer,
} from './styles';

function Card({ children }) {
    return <Container>{children}</Container>;
}

function CardHeader({
    children,
    onClick = (a) => a,
    justifyContent,
    alignItems,
}) {
    return (
        <CardHeaderContainer
            onClick={onClick}
            justifyContent={justifyContent}
            alignItems={alignItems}
        >
            {children}
        </CardHeaderContainer>
    );
}
function CardContent({ children }) {
    return (
        <CardContentWrapperContainer>{children}</CardContentWrapperContainer>
    );
}
function CardFooter({ children }) {
    return <CardFooterContainer>{children}</CardFooterContainer>;
}

export { Card, CardHeader, CardContent, CardFooter };

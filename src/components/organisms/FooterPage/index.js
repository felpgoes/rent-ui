import React from 'react';

import { Container } from './styles';

function FooterPage() {
    return (
        <Container>
            {new Date().getFullYear()} © Unimed Fesp | Sistema MovCad
        </Container>
    );
}

export default FooterPage;

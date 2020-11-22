import React from 'react';

import { Container, Separator } from './styles';

import history from '../../../services/history';

export default function Breadcrumbs({ crumbs, pathName, ...props }) {
    const { pathname } = history.location;

    const path = pathName || pathname?.split('/');

    return (
        <Container>
            {path.map((route) =>
                route ? (
                    <div key={route}>
                        <span to={route}>
                            {route.toLowerCase().replace(/-/g, ' ')}
                        </span>
                        <Separator>/</Separator>
                    </div>
                ) : null
            )}
        </Container>
    );
}

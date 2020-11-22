import React from 'react';

import { Container, FileContainer, CounterContainer } from './styles';

const ProgressBar = (props) => {
    const { completed } = props;
    return (
        <Container>
            <FileContainer completed={completed}>
                <CounterContainer />
            </FileContainer>
        </Container>
    );
};

export default ProgressBar;

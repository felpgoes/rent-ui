import React from 'react';

import {
    Container,
    ContentText,
    ContentTextWrapper,
    ImageWrapper,
} from './styles';
import ImageCard from '../ImageCard';

const CardTipoPerfil = ({ text, onClick, children }) => (
    <Container onClick={onClick}>
        <ImageWrapper>
            <ImageCard
                onClick={onClick}
                borderRadius="0"
                width="60"
                height="60"
                marginBottom="15"
            >
                {children}
            </ImageCard>
        </ImageWrapper>
        <ContentTextWrapper>
            <ContentText>
                {text}
                {/* <Text font="Regular 16px 'unimed_slab'" color={theme.movGray} text={text} textAlign="center" width="104" height="40" /> */}
            </ContentText>
        </ContentTextWrapper>
    </Container>
);

export default CardTipoPerfil;

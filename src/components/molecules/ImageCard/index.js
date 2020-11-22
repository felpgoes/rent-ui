import React from 'react';

import imgPlaceholder from '../../../assets/images/login/unimed-fesp.png';

import { Container } from './styles';

const ImageCard = ({
    imageUrl,
    name,
    disabled,
    translucent,
    marginBottom,
    onClick = (_) => _,
    width,
    height,
    borderRadius,
    children,
    ...props
}) => (
    <Container
        {...props}
        disabled={disabled}
        translucent={translucent}
        marginBottom={marginBottom}
        onClick={(e) => {
            e.stopPropagation();
            !disabled && onClick();
        }}
        width={width}
        height={height}
        borderRadius={borderRadius}
    >
        {imageUrl ? (
            <img src={imageUrl || imgPlaceholder} alt={name} />
        ) : (
            children
        )}
    </Container>
);

export default ImageCard;

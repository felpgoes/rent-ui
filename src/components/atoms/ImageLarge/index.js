import React from 'react'

import { Container } from './styles'

const ImageLarge = ({ src, alt, ...props }) => <Container {...props} src={src} alt={alt} />

export default ImageLarge

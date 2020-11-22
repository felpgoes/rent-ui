import React from 'react'

import { Container } from './styles'

const ContainerMain = ({ children, ...props }) => <Container {...props}>{children}</Container>

export default ContainerMain

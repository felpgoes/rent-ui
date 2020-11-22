import React from 'react'

import { Container, ContainerDescription, ContainerFields } from './styles'

const FormSection = ({ children, description }) => (
  <Container>
    <ContainerDescription>
      <p>{description}</p>
    </ContainerDescription>
    <ContainerFields>
      {children}
    </ContainerFields>
  </Container>
)

export default FormSection

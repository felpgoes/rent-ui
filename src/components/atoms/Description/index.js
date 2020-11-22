import React from 'react'

import { Container } from './styles'

const Description = ({ title, description, complement, desktopOnly, flex, noCapitalize }) => (
  <Container flex={flex} desktopOnly={desktopOnly} noCapitalize={noCapitalize}>
    <span>{title}</span>
    <p>{description}</p>
    {complement && <p>{complement}</p>}
  </Container>
)

export default Description

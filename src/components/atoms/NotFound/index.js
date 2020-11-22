import React from 'react'

import { Container } from './styles'

const NotFound = ({ text, noCapitalize }) => (
  <Container noCapitalize={noCapitalize}>{text}</Container>
)

export default NotFound

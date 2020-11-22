import React from 'react'

import { Container } from './styles'

const TitleMain = ({ text, quantity = 0 }) => (
  <Container>
    {text} {quantity ? `(${quantity})` : ''}
  </Container>
)

export default TitleMain

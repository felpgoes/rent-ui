import React from 'react'

import { Container } from './styles'

const Status = ({ text, smallFont }) => (
  <Container smallFont={smallFont}>
    <span>Status</span>
    <p>{text}</p>
  </Container>
)

export default Status

import React from 'react'

import BackIcon from '../../icons/BackIcon'

import { Container, Text } from './styles'

export default function BreadcumbBackButton({ path, ...props }) {
  return (
    <Container {...props} push to={path}>
      <BackIcon height={18} width={18} style={{ pointerEvents: 'none' }} />
      <Text> Voltar</Text>
    </Container>
  )
}

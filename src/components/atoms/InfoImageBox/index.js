import React from 'react'

import { Container } from './styles'

const InfoImageBox = ({ imageUrl, imgPlaceholder, name, qtd }) => (
  <Container>
    <img src={imageUrl || imgPlaceholder} alt={name} />
    {qtd !== undefined && qtd !== null && <p>{qtd}</p>}
  </Container>
)

export default InfoImageBox

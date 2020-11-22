import React from 'react'

import { Container } from './styles'

import StarIcon from '../../icons/StarIcon'

export default function RatingBox({ rating = 0, decimalPlaces, ...props }) {
  return (
    <Container {...props}>
      <StarIcon />
      {rating.toLocaleString('pt-BR', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces
      })}
    </Container>
  )
}

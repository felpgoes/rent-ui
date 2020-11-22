import React from 'react'

import { Container } from './styles'

const CardHelper = ({ productCard, ...props }) => (
  <Container {...props} productCard={productCard}>
    {productCard ? (
      <>
        <div className="image" />
        <div className="title" />
        <div className="title-2" />
        <div className="subtitle" />
        <div className="price" />
        <div className="box" />
        <div className="subtitle-2" />
      </>
    ) : (
      ''
    )}
  </Container>
)

export default CardHelper

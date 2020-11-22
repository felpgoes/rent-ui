import React from 'react'

import { Container } from './styles'

export default function ImageWrapper({
  imageUrl,
  imgPlaceholder,
  name,
  width,
  height,
  borderRadius,
  ...props
}) {
  return (
    <Container {...props} height={height} width={width} borderRadius={borderRadius}>
      <img
        src={imageUrl || imgPlaceholder}
        alt={name}
        onError={e => {
          e.target.src = imgPlaceholder
        }}
      />
    </Container>
  )
}

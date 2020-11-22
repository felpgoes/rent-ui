import React from 'react'

import { Container } from './styles'

const ImageBox = ({
  imageUrl,
  imgPlaceholder,
  name,
  big,
  small,
  tiny,
  flex,
  marginRight,
  text,
  ...props
}) => (
  <Container {...props} big={big} small={small} flex={flex} marginRight={marginRight} tiny={tiny}>
    <img
      src={imageUrl || imgPlaceholder}
      alt={name}
      onError={e => {
        e.target.src = imgPlaceholder
      }}
    />
    {text && <h1>{text}</h1>}
  </Container>
)

export default ImageBox

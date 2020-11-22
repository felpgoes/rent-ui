import React from 'react'

import { Container } from './styles'

const BrandCardProduct = ({
  text,
  alignCenter,
  translucent,
  flex,
  desktopWidth,
  mobileWidth,
  green,
  icon,
  marginTop,
  cursor,

  ...props
}) => (
  <>
    <Container alignCenter={alignCenter} flex={flex} marginTop={marginTop} {...props}>
      {text}
    </Container>
  </>
)

export default BrandCardProduct

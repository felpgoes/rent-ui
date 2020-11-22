import React from 'react'

import { Container } from './styles'

const TitleCardProduct = ({
  text,
  alignCenter,
  translucent,
  flex,
  desktopWidth,
  mobileWidth,
  green,
  icon,
  margin,
  cursor,

  ...props
}) => (
  <>
    <Container alignCenter={alignCenter} flex={flex} {...props}>
      {text}
    </Container>
  </>
)

export default TitleCardProduct
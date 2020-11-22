import React from 'react'

import { Container } from './styles'

const CardFooter = ({
  children,
  desktopOnly,
  collapse,
  isCollapsed,
  noPaddingRight,
  whiteBackground,
  isHeader,
  onClick = _ => _,
  ...props
}) => (
  <Container
    {...props}
    isHeader={isHeader}
    whiteBackground={whiteBackground}
    desktopOnly={desktopOnly}
    collapse={collapse}
    isCollapsed={isCollapsed}
    noPaddingRight={noPaddingRight}
    onClick={e => {
      e.stopPropagation()
      onClick()
    }}
  >
    {children}
  </Container>
)

export default CardFooter

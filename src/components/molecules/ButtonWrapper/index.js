import React from 'react'

import { Container } from './styles'

const ButtonWrapper = ({
  children,
  isLoading,
  desktopOnly,
  mobileHorizontal,
  center,
  modal,
  fullWidth,
  smallMargin,
  ...props
}) => (
  <Container
    {...props}
    isLoading={isLoading}
    desktopOnly={desktopOnly}
    mobileHorizontal={mobileHorizontal}
    center={center}
    modal={modal}
    fullWidth={fullWidth}
    smallMargin={smallMargin}
  >
    {children}
  </Container>
)

export default ButtonWrapper

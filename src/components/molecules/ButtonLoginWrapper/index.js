import React from 'react'

import { Container } from './styles'

const ButtonLoginWrapper = ({
  children,
  isLoading,
  desktopOnly,
  mobileHorizontal,
  center,
  spaceBetween,
  modal,
  column,
  ...props
}) => (
  <Container
    {...props}
    isLoading={isLoading}
    desktopOnly={desktopOnly}
    mobileHorizontal={mobileHorizontal}
    center={center}
    spaceBetween={spaceBetween}
    modal={modal}
    column={column}
  >
    {children}
  </Container>
)

export default ButtonLoginWrapper

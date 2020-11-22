import React from 'react'

import { Container } from './styles'

const TitleCard = ({
  text,
  alignRight,
  translucent,
  flex,
  desktopWidth,
  mobileWidth,
  green,
  icon,
  margin,
  cursor,
  justifyEnd,
  ...props
}) => (
  <Container
    translucent={translucent}
    alignRight={alignRight}
    flex={flex}
    justifyEnd={justifyEnd}
    cursor={cursor}
    desktopWidth={desktopWidth}
    mobileWidth={mobileWidth}
    green={green}
    margin={margin}
    {...props}
  >
    {icon ? (
      <span>
        <img src={icon} alt="icon" />
        {text}
      </span>
    ) : (
      text
    )}
  </Container>
)

export default TitleCard

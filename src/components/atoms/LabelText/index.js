import React from 'react'

import { Container } from './styles'

import AsteriskIcon from '../../icons/AsteriskIcon'

const LabelText = ({
  red,
  bold,
  label,
  text,
  hidden,
  main,
  capitalize,
  flex,
  noWrap,
  column,
  desktopOnly,
  marginBottom,
  marginRight,
  blackLabel,
  hasAsterisk,
  ...props
}) => (
  <Container
    {...props}
    blackLabel={blackLabel}
    red={red}
    bold={bold}
    label={label}
    text={text}
    hidden={hidden}
    main={main}
    capitalize={capitalize}
    flex={flex}
    noWrap={noWrap}
    column={column}
    desktopOnly={desktopOnly}
    marginBottom={marginBottom}
    marginRight={marginRight}
    hasAsterisk={hasAsterisk}
  >
    <p>
      <span>{label}</span>
      {column && <br />}
      {text}
    </p>
    {hasAsterisk && (
      <AsteriskIcon height={14} width={14} style={{ alignSelf: 'center', marginLeft: 3 }} />
    )}
  </Container>
)

export default LabelText

import React from 'react'

import { Container } from './styles'

const Info = ({
  title,
  text,
  subtitle,
  subtitle2,
  subtext,
  size,
  flex,
  label,
  value,
  desktopOnly,
  textCenter,
  marginBottom,
  noCapitalize,
  highlightSubtitle
}) => (
  <Container
    size={size}
    textCenter={textCenter}
    flex={flex}
    desktopOnly={desktopOnly}
    marginBottom={marginBottom}
    noCapitalize={noCapitalize}
    highlightSubtitle={highlightSubtitle}
  >
    <span title={title}>{typeof title === 'string' && title}</span>
    <p title={text}>{typeof text === 'string' && text}</p>
    {typeof subtitle === 'string' ? <strong>{subtitle}</strong> : ''}
    {typeof value === 'string' ? (
      <strong>
        {label} <span>{value}</span>
      </strong>
    ) : (
      ''
    )}

    {typeof subtitle2 === 'string' ? <strong>{subtitle2}</strong> : ''}
    {typeof subtext === 'string' ? <p>{subtext}</p> : ''}
  </Container>
)

export default Info

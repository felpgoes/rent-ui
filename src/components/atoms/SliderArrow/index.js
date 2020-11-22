import React from 'react'

import arrowDownIcon from '../../../assets/images/grey-collapse-arrow.svg'

import { Container } from './styles'

export default ({ className, to, onClick, style }) => (
  <Container
    // type="button"
    // aria-label={to}
    // className={`button button--text button--icon ${className}`}
    className={className}
    style={{ ...style }}
    onClick={onClick}
  >
    <img src={arrowDownIcon} alt="arrow-down-icon" />
  </Container>
)

import React from 'react'

import { formatTimeLocal } from '../../../utils/date'

import ClockIcon from '../../../assets/images/clock.svg'

import { Container } from './styles'

const Time = ({ date, desktopOnly }) => (
  <Container desktopOnly={desktopOnly}>
    <img src={ClockIcon} alt="time" />
    <span>{formatTimeLocal(date)}</span>
  </Container>
)

export default Time

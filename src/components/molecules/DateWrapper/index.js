import React from 'react'

import { Container } from './styles'
import calendarIcon from '../../../assets/images/calendar-logo.svg'

const DateInputWrapper = ({
  children,
  center,
  onClick = _ => _,
  onBlur = _ => _,
  percentage,
  icon,
  left
}) => (
  <Container
    center={center}
    onClick={() => onClick()}
    onBlur={() => onBlur()}
    percentage={percentage}
    left={left}
  >
    {icon ? <img src={calendarIcon} alt="dateIcon" /> : null}
    {children}
  </Container>
)

export default DateInputWrapper

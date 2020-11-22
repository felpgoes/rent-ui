import React from 'react'

import { getDayLocal, getMonthNameLocal, formatTimeLocal } from '../../../utils/date'

import { Container } from './styles'

const DateBox = ({ date, small, dueDate, text, hideHour }) => (
  <Container small={small} demand={date}>
    {(text || dueDate) && <h6>{text || 'Vencimento'}</h6>}
    <span>{getDayLocal(date)}</span>
    <p>{getMonthNameLocal(date)}</p>
    {!hideHour ? <h6>{formatTimeLocal(date)}</h6> : null}
  </Container>
)

export default DateBox

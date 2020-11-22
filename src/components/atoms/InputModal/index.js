import React from 'react'
import { Container } from './styles'

const Input = ({
  name,
  type,
  placeholder,
  percentage,
  percentageMobile,
  value,
  handleChange = a => a,
  whiteBackground
}) => (
  <Container
    percentage={percentage}
    percentageMobile={percentageMobile}
    whiteBackground={whiteBackground}
  >
    <input
      name={name}
      onChange={event => handleChange(event)}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  </Container>
)

export default Input

import React from 'react'
import CurrencyInput from 'react-currency-input'
import { Container } from './styles'

const InputValue = ({ ...props }) => {
  return (
    <Container>
      <CurrencyInput
        {...props}
        prefix="R$ "
        decimalSeparator=","
        thousandSeparator="."
        fixedDecimalScale
      />
    </Container>
  )
}

export default InputValue

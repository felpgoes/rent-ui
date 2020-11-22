import React from 'react'
import { Field } from 'redux-form'
import { Container } from './styles'

const Input = ({ name, handleBlur = a => a, type, label, validate, percentage, percentageMobile, value, options }) => (
  <Container percentage={percentage} percentageMobile={percentageMobile}>
    <Field
      name={name}
      value={value}
      component='select'
      type={type}
      label={label}
      onBlur={(v) => handleBlur(v)}
      validate={validate}
    >
      <option>{label}</option>
      {Object.keys(options).map(key =>
        (<option value={options[key]}>{key}</option>)
      )}
    </Field>
  </Container>
)

export default Input

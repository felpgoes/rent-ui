/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Container } from './styles'

class RadioButton extends Component {
  render() {
    const {
      id,
      active,
      name,
      noDefaultMargin,
      marginRight,
      onClick = _ => _,
      ...props
    } = this.props
    return (
      <Container htmlFor={id} noDefaultMargin={noDefaultMargin} marginRight={marginRight}>
        <input
          {...props}
          type="radio"
          name={name}
          id={id}
          value={active}
          checked={active}
          className="hidden"
          onClick={onClick}
        />
        <span className="label" />
      </Container>
    )
  }
}

export default RadioButton

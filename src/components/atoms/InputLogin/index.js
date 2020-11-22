import React, { Component } from 'react'

import { Container, InputBox, FormInput } from './styles'

import EyeIcon from '../../icons/EyeIcon'

class InputLogin extends Component {
  state = {
    showPassword: false
  }

  render() {
    const { showPassword } = this.state
    const { label, password, style, ...props } = this.props

    return (
      <Container style={style}>
        <p>{label}</p>

        <InputBox>
          <FormInput type={password ? (showPassword ? 'text' : 'password') : 'text'} {...props} />
          {password && (
            <EyeIcon
              showPassword={password && showPassword}
              onClick={() =>
                this.setState(prevState => ({ showPassword: !prevState.showPassword }))
              }
            />
          )}
        </InputBox>
      </Container>
    )
  }
}

export default InputLogin

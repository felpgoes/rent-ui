import styled, { css, keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;

  ${({ button, small }) =>
    button && small
      ? css`
          height: 20px;
        `
      : button
      ? css`
          height: 30px;
        `
      : ''}

  @media (max-width: 768px) {
    ${({ button }) =>
      !button
        ? css`
            height: 30px;
          `
        : ''}
  }
`

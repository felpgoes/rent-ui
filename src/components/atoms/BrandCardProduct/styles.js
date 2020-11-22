import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.p`
  font-size: 10px;
  font-weight: ${theme.fontRegular};
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  color: ${theme.greyText};
  text-overflow: ellipsis;

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 10px;
    `}

  ${({ alignCenter }) =>
    alignCenter
      ? css`
          text-align: center;
        `
      : ''}
`

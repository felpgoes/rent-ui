import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.p`
  font-size: 16px;
  font-weight: ${theme.fontSemibold};
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ alignCenter }) =>
    alignCenter
      ? css`
          text-align: center;
        `
      : ''}
`

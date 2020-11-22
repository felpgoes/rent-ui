import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import theme from '../../../styles/theme'

export const Container = styled(({ alignRight, marginSides, ...props }) => <Link {...props} />)`
  display: flex;
  text-decoration: none;
  color: ${theme.bgWhite};
  font-size: 14px;
  font-weight: normal;

  ${({ alignRight }) =>
    alignRight
      ? css`
          text-align: right;
        `
      : ''}

  ${({ alignLeft }) =>
    alignLeft
      ? css`
          text-align: left;
        `
      : ''}

  ${({ marginSides }) =>
    marginSides
      ? css`
          margin: 0 25px;
        `
      : ''}

  :active,
  :focus {
    color: ${theme.greenPressed};
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  ${({ flex }) =>
    flex
      ? css`
          flex: 1;
        `
      : ''}

  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: ${theme.blueDefault};
  background-color: ${theme.bgWhite};
  text-transform: capitalize;

  span {
    font-weight: ${theme.fontSemibold};
    margin-bottom: 3px;
    ${({ noCapitalize }) =>
      noCapitalize &&
      css`
        text-transform: none;
      `}
  }

  p {
    color: ${theme.textGray};
    ${({ noCapitalize }) =>
      noCapitalize &&
      css`
        text-transform: none;
      `}
  }

  @media (max-width: 768px) {
    ${({ desktopOnly }) =>
      desktopOnly
        ? css`
            display: none;
          `
        : ''}

    font-size: 10px;
  }
`

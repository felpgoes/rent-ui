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
    font-size: 10px;
    line-height: 14px;
    font-weight: normal;
    color: ${theme.movBlack70};
    ${({ noCapitalize }) =>
      noCapitalize &&
      css`
        text-transform: none;
      `}
  }

  p {
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
    color: ${theme.movBlack90};
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

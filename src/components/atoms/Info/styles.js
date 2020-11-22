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
  justify-content: center;
  margin: 0 25px;
  line-height: 20px;
  width: 100%;

  ${({ textCenter }) =>
    textCenter
      ? css`
          text-align: center;
        `
      : ''}

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: 5px;
        `
      : ''}

  span {
    font-size: ${({ size }) => (size ? '12px' : '14px')};
    font-weight: ${theme.fontSemibold};
    text-transform: ${({ noCapitalize }) => (noCapitalize ? 'none' : 'capitalize')};
    /* overflow: hidden; */
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */

    @media (max-width: 768px) {
      font-size: ${({ size }) => (size ? '10px' : '11px')};
    }
  }

  strong {
    font-size: ${({ size }) => (size ? '10px' : '12px')};
    font-weight: ${theme.fontRegular};
    text-transform: ${({ noCapitalize }) => (noCapitalize ? 'none' : 'capitalize')};

    &:first-of-type {
      width: ${({ size }) => (size ? 'unset' : 'fit-content')};

      ${({ highlightSubtitle }) =>
        highlightSubtitle
          ? css`
              font-weight: ${theme.fontSemibold};
              background-color: ${theme.bgHighlight};
            `
          : ''}
    }

    @media (max-width: 768px) {
      font-size: 8px;
    }
  }

  p {
    font-size: ${({ size }) => (size ? '10px' : '12px')};
    font-style: italic;
    line-height: normal;
    color: ${theme.textGray};
    text-transform: ${({ noCapitalize }) => (noCapitalize ? 'none' : 'capitalize')};

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  @media (max-width: 768px) {
    display: ${({ desktopOnly }) => (desktopOnly ? 'none' : 'flex')};
    margin: 0 15px;
    line-height: 17px;
  }
`

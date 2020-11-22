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
    font-size: 10px;
    line-height: 14px;
    font-weight: normal;
    text-transform: ${({ noCapitalize }) => (noCapitalize ? 'none' : 'capitalize')};
    color: ${theme.movBlack70};
    /* overflow: hidden; */
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */

    @media (max-width: 768px) {
      font-size: ${({ size }) => (size ? '10px' : '12px')};
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
      font-size: 10px;
    }
  }

  p {
    font-size: 12px;
    width: ${({ minWidthText }) => (minWidthText ? '50px' : '')};
    line-height: 14px;
    font-weight: bold;
    color: ${theme.movBlack90};
    text-transform: ${({ noCapitalize }) => (noCapitalize ? 'none' : 'capitalize')};

    svg {
      float: right;
      height: 22px;
      width: 18px;
    }

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

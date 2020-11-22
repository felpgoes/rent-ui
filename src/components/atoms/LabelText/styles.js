import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  color: ${({ red }) => (red ? theme.greenDefault : theme.textGrayDisabled)};
  font-weight: ${({ bold }) => (bold ? theme.fontBold : theme.fontRegular)};
  font-size: 12px;

  span {
    color: ${({ blackLabel }) => (blackLabel ? '#000' : theme.blueDefault)};
    font-weight: ${({ red }) => (red ? theme.fontRegular : theme.fontSemibold)};
  }

  ${({ capitalize }) =>
    capitalize
      ? css`
          text-transform: capitalize;
        `
      : ''}

  ${({ flex }) =>
    flex
      ? css`
          flex: 1;
        `
      : ''}

  ${({ noWrap }) =>
    noWrap
      ? css`
          white-space: nowrap;
        `
      : ''}

  ${({ main }) =>
    main
      ? css`
          justify-content: flex-end;
          margin-top: 50px;
          font-size: 18px;
        `
      : ''}

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: 15px;
        `
      : ''}

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: 10px;
        `
      : ''}

  @media (max-width: 768px) {
    ${({ desktopOnly }) =>
      desktopOnly
        ? css`
            display: none;
          `
        : ''}

    ${({ main }) =>
      main
        ? css`
            margin-top: 24px;
            font-size: 14px;
          `
        : css`
            font-size: 11px;
          `}

    ${({ marginBottom }) =>
      marginBottom
        ? css`
            margin-bottom: 10px;
          `
        : ''}
  }
`

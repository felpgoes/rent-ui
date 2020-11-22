import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.p`
  font-size: 14px;
  font-weight: ${theme.fontSemibold};
  text-transform: capitalize;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* margin-bottom:7px; */

  img {
    margin-right: 10px;
  }

  ${({ justifyEnd }) =>
    justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : ''}


  ${({ alignRight }) =>
    alignRight
      ? css`
          text-align: right;
        `
      : ''}

  ${({ flex }) =>
    flex
      ? css`
          flex: 1;
        `
      : ''}

  ${({ green }) =>
    green
      ? css`
          color: ${theme.greenDefault};
        `
      : ''}

  ${({ cursor }) =>
    cursor
      ? css`
          cursor: pointer;
        `
      : ''}

  ${({ translucent }) =>
    translucent
      ? css`
          opacity: 0.5;
        `
      : ''}

  ${({ desktopWidth }) =>
    desktopWidth
      ? css`
          width: ${desktopWidth + 'px'};
        `
      : ''}

  @media (max-width: 768px) {
    font-size: 12px;

    ${({ mobileWidth }) =>
      mobileWidth
        ? css`
            width: ${mobileWidth + 'px'};
          `
        : ''}
  }
`

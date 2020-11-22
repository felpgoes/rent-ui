import styled, { css } from 'styled-components'

import { Container as Button } from '../../atoms/Button/styles'

export const Container = styled.div`
  ${Button} {
    margin-left: 33px;

    ${({ smallMargin }) =>
      smallMargin
        ? css`
            margin-left: 16px;
          `
        : css`
            margin-left: 33px;
          `}

    :first-child {
      margin-left: 0;
    }
  }

  ${({ isLoading }) =>
    isLoading
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}

  ${({ center }) =>
    center
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: flex-end;
        `}

        ${({ fullWidth }) =>
          fullWidth
            ? css`
                width: 100%;
              `
            : ''}

  ${({ modal }) =>
    modal
      ? css`
          margin-top: 24px;
        `
      : css`
          margin-top: 50px;
        `}

  @media (max-width: 768px) {
    width: 100%;

    ${({ desktopOnly }) =>
      desktopOnly
        ? css`
            display: none;
          `
        : ''}

    ${({ mobileHorizontal }) =>
      mobileHorizontal
        ? css`
            margin-top: 12px;

            ${Button} {
              min-height: 40px;
              min-width: 0;
              flex: 1;
              margin-left: 23px;

              :first-child {
                margin-left: 0;
              }
            }
          `
        : css`
            flex-direction: column-reverse;
            margin-top: 24px;

            ${Button} {
              margin-left: 0px;
              margin-top: 12px;

              :last-child {
                margin-top: 0;
              }
            }
          `}
  }
`

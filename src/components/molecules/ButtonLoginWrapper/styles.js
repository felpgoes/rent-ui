import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ isLoading }) =>
    isLoading
      ? css`
          display: none;
        `
      : css`
          display: flex;
          align-items: center;
        `}

  ${({ column }) =>
    column
      ? css`
          flex-direction: column;

          > * {
            margin-top: 16px;

            :first-child {
              margin-top: 0;
            }
          }
        `
      : css`
          flex-direction: row;

          > * {
            margin-left: 16px;

            :first-child {
              margin-left: 0;
            }
          }
        `}

  ${({ center, spaceBetween }) =>
    center
      ? css`
          justify-content: center;
        `
      : spaceBetween
      ? css`
          justify-content: space-between;
        `
      : css`
          justify-content: flex-end;
        `}

  ${({ modal }) =>
    modal
      ? css`
          margin-top: 24px;
        `
      : css`
          margin-top: 32px;
        `}

  @media (max-width: 768px) {
    width: 100%;

    ${({ desktopOnly }) =>
      desktopOnly
        ? css`
            display: none;
          `
        : ''}
  }
`

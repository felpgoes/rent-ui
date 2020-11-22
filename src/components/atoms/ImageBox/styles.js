import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  background-color: ${theme.bgWhite};
  flex-direction:column;
  color: #F00;
  text-align:center;

  h1 {
    margin-top: 10px;
    margin-left: 5px;
  }

  img {
    object-fit: contain;
    margin: auto;
  }

  ${({ big, small, tiny }) =>
    big
      ? css`
          img {
            max-height: 135px;
            min-height: 135px;
            max-width: 135px;
            min-width: 135px;
          }
        `
      : small
      ? css`
          img {
            max-height: 40px;
            min-height: 40px;
            max-width: 40px;
            min-width: 40px;
          }
        `
      : tiny
      ? css`
          img {
            max-height: 20px;
            min-height: 20px;
            max-width: 20px;
            min-width: 20px;
          }
        `
      : css`
          img {
            max-height: 90px;
            min-height: 90px;
            max-width: 90px;
            min-width: 90px;
          }
        `}

  ${({ flex }) =>
    flex
      ? css`
          flex: 1;
        `
      : ''}

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: 25px;
        `
      : ''}

  @media (max-width: 768px) {
    ${({ big }) =>
      big
        ? css`
            img {
              max-height: 90px;
              min-height: 90px;
              max-width: 90px;
              min-width: 90px;
            }
          `
        : css`
            img {
              max-height: 60px;
              min-height: 60px;
              max-width: 60px;
              min-width: 60px;
            }
          `}

    ${({ marginRight }) =>
      marginRight
        ? css`
            margin-right: 15px;
          `
        : ''}
  }
`

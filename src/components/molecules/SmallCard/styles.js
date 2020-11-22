import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  background-color: ${theme.bgWhite};
  flex-direction: columncss;
  text-align: end;

  img {
    object-fit: contain;
    margin: auto;
    position: 'absolute'
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
            max-height: 50px;
            min-height: 50px;
            max-width: 50px;
            min-width: 50px;
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

  ${({ column }) =>
    column
      ? css`
          flex-direction: row;
        `
      : ''};
`

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 505px 1fr;
  /* margin: 0; */
  /* min-width: 610px; */
`
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 40px;
  padding: 11px 16px;
  background: ${theme.bgWhite};
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px 4px 0px 0px;
  border-top: ${({ header }) => !header && 'none'};
  cursor: ${({ action }) => action && 'pointer'};

  &:hover {
    background: ${({ action }) => action && theme.bgGray};
  }
`

export const FlexItem = styled.div`
  flex: ${({ flex }) => flex || 1};
`

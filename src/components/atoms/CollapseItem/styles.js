import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 40px;
  width: 100%;
  padding: 0 55px;
  background-color: ${({ white }) => (white ? theme.bgWhite : theme.bgGrayFooter)};
  overflow: hidden;

  :last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    @media (max-width: 768px) {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  ${({ borderBottom }) =>
    borderBottom
      ? css`
          border-bottom: 1px solid ${theme.borderGrayCollapse};
        `
      : css`
          border-top: 1px solid ${theme.borderGrayCollapse};
        `}

  ${({ noJustify }) =>
    noJustify
      ? css`
          justify-content: flex-start;
        `
      : css`
          justify-content: space-between;
        `}

  ${({ confirmationModal }) =>
    confirmationModal &&
    css`
      ::before {
      }
    `}

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

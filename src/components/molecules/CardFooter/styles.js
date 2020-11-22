import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 0 55px;
  background-color: ${theme.bgWhite}
    ${({ whiteBackground }) =>
      whiteBackground
        ? css`
            background-color: ${theme.bgWhite};
          `
        : css`
            background-color: ${theme.bgGrayFooter};
          `}
    ${({ isHeader }) =>
      isHeader
        ? css`
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            @media (max-width: 768px) {
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
            }
          `
        : ''}
    ${({ isCollapsed }) =>
      !isCollapsed
        ? css`
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;

            @media (max-width: 768px) {
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
            }
          `
        : ''}
    ${({ collapse }) =>
      collapse
        ? css`
            &:hover {
              cursor: pointer;
            }
          `
        : ''}
    ${({ noPaddingRight }) =>
      noPaddingRight
        ? css`
            padding-right: 0;
          `
        : ''}
    @media (max-width: 768px) {
    ${({ desktopOnly }) =>
      desktopOnly
        ? css`
            display: none;
          `
        : ''}

    padding: 0 16px;

    ${({ noPaddingRight }) =>
      noPaddingRight
        ? css`
            padding-right: 0;
          `
        : ''}
  }
`

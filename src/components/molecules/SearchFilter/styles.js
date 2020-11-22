import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ noBg }) => (noBg ? 'none' : theme.bgWhite)};
  ${({ marginTop }) =>
    marginTop
      ? css`
          margin: 20px 0;
        `
      : css`
          margin: 0;
        `};
  box-shadow: 0 1px 3px ${({ noBg }) => (noBg ? 'none' : theme.shadowDefault)};
  ${({ notFullWidth }) =>
    notFullWidth
      ? css`
          width: 90%;
        `
      : css``};
  ${({ rectBorder }) =>
    rectBorder
      ? css``
      : css`
          border-radius: 4px;
        `};
`

export const SearchBox = styled.div`
  flex: 1;
  display: flex;
  ${({ rectBorder }) =>
    rectBorder
      ? css``
      : css`
          border-radius: 4px;
        `};
  height: 36px;
  padding-right: 40px;

  svg {
    transition: all 0.2s ease;
  }

  :focus-within {
    svg {
      fill: ${theme.movPrimary};
    }
  }

  input {
    flex: 1;
    font-size: 12px;
    color: ${theme.blueDefault};
    background: none;
    border: none;

    :disabled {
      background: none;
    }

    ::placeholder {
      color: ${theme.textGrayDisabled};
    }
  }
`

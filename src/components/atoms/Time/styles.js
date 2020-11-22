import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: ${theme.blueDefault};
  background-color: ${theme.bgWhite};

  img {
    height: 15px;
    width: 15px;
  }

  span {
    font-style: italic;
    margin-left: 3px;
  }

  @media (max-width: 768px) {
    ${({ desktopOnly }) =>
      desktopOnly
        ? css`
            display: none;
          `
        : ''}

    font-size: 10px;

    img {
      height: 13px;
      width: 13px;
    }

    span {
      margin-left: 2px;
    }
  }
`

import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.a`
  font: normal normal normal 13px 'unimed_slabregular';
  letter-spacing: 0.26px;
  color: ${theme.greenDefault};
  cursor: pointer;

  &:hover {
    color: ${theme.greenHover} !important;
  }

  &:active {
    color: ${theme.greenPressed} !important;
  }

  ${({ login }) =>
    login
      ? css`
          color: ${theme.grey} !important;
          font-family: unimed_slabbold;
          &:hover {
            text-decoration: none;
            color: ${theme.greenLink} !important;
          }
        `
      : ''};
  }

`;

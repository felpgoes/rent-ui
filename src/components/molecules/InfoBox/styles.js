import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
  margin-left: 56px;

  ${({ error }) =>
    !error
      ? css`
          background-color: ${theme.yellowInfo};
        `
      : css`
          background-color: ${theme.lightPink};
        `}

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop};
        `
      : ''}

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : css`
          display: flex;
        `}

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          width: 414px;
        `}
  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : css`
          height: 60px;
        `}
`;

export const IconContainer = styled.div`
  margin: 9px 0px 10px 10px;
`;

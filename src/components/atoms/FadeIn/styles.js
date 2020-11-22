import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {

        opacity: 0;
    }

    to {

        opacity: 1;
    }
`;

export const Container = styled.div`
  visibility: 'visible';
  animation: ${fadeIn} 0.5s linear;
  transition: visibility 0.5s linear;

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : css`
          height: 100%;
        `}
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css``}
`;

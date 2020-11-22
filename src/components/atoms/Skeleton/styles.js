import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(-90deg, #c8c8c8 0%, #e0e0e0 50%, #f8f8f8 100%);
  background-size: 350% 400%;
  animation: pulse 1.2s ease-in-out infinite;

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : css`
          height: 100%;
        `};

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          width: 100%;
        `};

  ${({ marginSides }) =>
    marginSides
      ? css`
          margin-left: ${marginSides}px;
          margin-right: ${marginSides}px;
        `
      : css``};
  ${({ marginUpDown }) =>
    marginUpDown
      ? css`
          margin-top: ${marginUpDown}px;
          margin-bottom: ${marginUpDown}px;
        `
      : css``};
  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${marginBottom}px;
        `
      : css``};

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const LoadingContent = styled.div``;

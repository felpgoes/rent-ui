import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  img {
    ${({ borderRadius }) =>
      borderRadius &&
      css`
        border-radius: ${borderRadius};
      `};
  }

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop};
        `
      : ''}
  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''}
`;

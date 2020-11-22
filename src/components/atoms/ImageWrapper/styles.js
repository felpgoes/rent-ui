import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  img {
    object-fit: contain;
    margin: auto;
    height: 100%;
    width: 100%;
    ${({ borderRadius }) =>
      borderRadius &&
      css`
        border-radius: ${borderRadius};
      `};
  }
`

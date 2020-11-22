import styled, { css, keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const ContainerEmptyContent = styled.div`
    svg {
        animation: ${rotate360} 2s linear infinite;
    }
`;
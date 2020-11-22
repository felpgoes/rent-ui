import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div``;

export const FirstTelefoneWrapper = styled.div`
  align-items: center;

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : `display: flex`};
`;

export const SecondTelefoneWrapper = styled.div`
  margin-top: 20px;

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : `display: flex`};
`;

export const NewTelefoneContainer = styled.div`
  padding: 12px 0 0 5px;
  width: 180px;
  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : `display: flex`};

  &:hover {
    cursor: pointer;
  }
`;

export const CloseIconContainer = styled.div`
  margin: 15px;
  margin-top: 35px;
  &:hover {
    cursor: pointer;
  }
`;

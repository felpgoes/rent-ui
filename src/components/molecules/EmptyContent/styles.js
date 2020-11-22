import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const ContainerEmptyContent = styled.div`
  text-align: left;
  font: 600 16px 'Calibri';
  letter-spacing: 1.12px;
  color: ${theme.colorGray};
  background-color: ${theme.bgWhite};
  width: 100%;

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ''}

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop};
        `
      : ''}
`;
export const EmptyContentText = styled.div`
  display: flex;
  color: ${theme.colorGray};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 104px;
  background-color: ${theme.grey100};
  margin-bottom: 16px;
`;
export const EmptyRow = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;

  background-color: ${theme.grey100};
`;

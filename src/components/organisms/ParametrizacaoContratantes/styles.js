import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div``;

export const ParametrosContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: end;
  width: 100%;
`;

export const EmptyContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colorGray};
  font: normal normal bold 16px 'Calibri';

  span {
    font: normal normal normal 14px 'Calibri';
    letter-spacing: 0.56px;
    margin-top: 6px;
  }
`;

export const ModalidadesSelecionadasContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
`;

export const TermosSelecionadosContainer = styled.div`
  margin-top: 13px;
  display: flex;

  &:last-child {
    margin-bottom: 5px;
  }
`;

export const AlertList = styled.ul`
  list-style: none;
  margin: 0;

  li {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    margin-top: 4px;
    margin-bottom: 4px;

    b {
      font-size: 12px;
    }
  }
`;

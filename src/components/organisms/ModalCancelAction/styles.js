import styled from 'styled-components';

import { Text } from '../../atoms/Text';
import Button from '../../atoms/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const ContentText = styled.div`
  &:first-letter {
    text-transform: capitalize;
  }
  font: normal normal normal 16px/20px Calibri;
  color: #60656c;
  margin-top: 25px;
  margin-bottom: 31px;
  align-self: center;

  strong {
    font: bold 16px Calibri;
  }

  a,
  a:hover {
    font: bold 16px Calibri;
    color: #8bac2a;
    text-decoration: none;
  }
`;

export const TextSucesso = styled(Text)`
  text-align: left;
  font: 34px unimed_slabbold;
  letter-spacing: 0px;
  color: #5a5a5a;
  opacity: 1;
  margin-top: 0px !important;
`;

export const ButtonFooter = styled(Button)`
    width: 121px;
    height: 40px;
    display block;
`;

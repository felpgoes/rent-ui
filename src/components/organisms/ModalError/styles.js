import styled from 'styled-components';

import { Text } from '../../atoms/Text';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContentText = styled.div`
  &:first-letter {
    text-transform: capitalize;
  }
  font: 300 14px 'work_sans';
  color: #5a5a5a;
  margin-top: 28px;
  margin-bottom: 37px;
  align-self: center;
  text-align: center;

  strong {
    font: bold 15px 'work_sans';
  }

  a,
  a:hover {
    font: bold 14px 'work_sans';
    color: #8bac2a;
    text-decoration: none;
  }
`;

export const Message = styled(Text)`
  text-align: left;
  font: 34px unimed_slabbold;
  letter-spacing: 0px;
  color: #5a5a5a;
  opacity: 1;
`;

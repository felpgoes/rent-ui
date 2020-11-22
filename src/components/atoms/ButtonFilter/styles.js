import styled from 'styled-components';

import Button from '../Button/index';

export const Container = styled.button`
  width: 95px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;

  font: 14px unimed_slabregular;
  letter-spacing: 0px;
  color: #808080;
  margin-left: 3px;
`;

export const PressedContainer = styled(Container)`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  font: 14px unimed_slabbold;
`;

export const IconContainer = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

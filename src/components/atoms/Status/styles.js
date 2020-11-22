import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  font-size: ${({ smallFont }) => (smallFont ? '12px' : '14px')};
  line-height: 17px;
  text-align: right;
  width: 125px;
  color: ${theme.blueDefault};
  background-color: ${theme.bgWhite};
  text-transform: capitalize;

  span {
    font-weight: ${theme.fontSemibold};
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex: 0 1 ${({ percentage }) => (percentage ? `${percentage}%` : '40%')};
  flex-direction: column;
  margin-bottom: 30px;

  select {
    margin: 0;
    border: none;
    background-color: ${theme.bgInput};
    height: 48px;
    width: 329px;
    padding: 13px 16px;
    color: ${theme.textGrayDisabled};
    width: 100%;
    margin-top: 12px;
    border-bottom: 2px solid lightgrey;
  }

  @media (max-width: 768px) {
    flex: 0 1 ${({ percentageMobile }) => (percentageMobile ? `${percentageMobile}%` : '100%')};
  }
`

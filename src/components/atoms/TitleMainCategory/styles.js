import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.p`
  text-transform: capitalize;
  color: ${theme.blueDefault};
  font-size: 18px;
  font-weight: ${theme.fontRegular};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

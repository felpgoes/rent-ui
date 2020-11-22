import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.p`
  color: ${theme.textSidebarDisabled};
  font-size: 22px;
  font-weight: ${theme.fontBold};
  text-align: center;
  text-transform: ${({ noCapitalize }) => (noCapitalize ? 'none' : 'capitalize')};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

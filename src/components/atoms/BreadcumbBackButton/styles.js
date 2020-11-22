import styled from 'styled-components'
import { Link } from 'react-router-dom'

import theme from '../../../styles/theme'

export const Container = styled(Link)`
  display: none;
  align-items: center;
  margin-bottom: 16px;
  width: fit-content;
  text-decoration: none;
  cursor: pointer !important;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-left: 8px;
  color: ${theme.greyBack};
`

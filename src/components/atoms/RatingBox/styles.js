import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.toastWarning};
  font-size: 10px;
  line-height: 14px;
  font-weight: bold;
  text-align: center;

  svg {
    margin-right: 5.5px;
  }
`

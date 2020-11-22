import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const ContainerDescription = styled.div`
    display:flex;
    align-self:center;
    align-items:center;
    height:60px;
    margin-bottom:15px;

    p {
        font-size:14px;
        font-weight:${theme.fontSemibold};
    }
`

export const Container = styled.section`
  border-top: 1px solid rgba(154, 154, 154, 0.5);
`

export const ContainerFields = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content:space-between;
`

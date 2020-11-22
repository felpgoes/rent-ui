import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.button`
color: ${theme.grayDefault};
border: none;
background: none;

svg {
    cursor: pointer;
}
`
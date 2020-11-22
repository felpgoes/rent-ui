import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  width: 26.05px;
  height: auto;
  position: relative;
  margin: 0 5px;
  img.divergencieBox {
    width: 100%;
  }
  span.divergencieType {
    width: 100%;
    text-align: center;
    position: absolute;
    color: ${theme.greenDefault};
    left: 0;
    font-size: 11px;
  }
  img.divergencieValid {
    display: block;
    margin: 0 auto;
    margin-top: 3px;
    width: 15px;
    height: 15px;
  }
`

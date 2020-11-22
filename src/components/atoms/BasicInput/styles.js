import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  flex: 0 1 ${({ percentage }) => (percentage ? `${percentage}%` : '40%')};

  input {
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid #d7d7d7;
    font-size: 16px;
    transition: all 0.3s ease-out;
    background-color: ${({ whiteBackground }) => (whiteBackground ? theme.bgWhite : theme.bgInput)};
    border-radius: 0;
    padding: 13px 16px 13px ${({ logo }) => (logo ? '32px' : '16px')};

    ::placeholder {
      color: ${theme.movGrey60};
    }
  }
`

import styled from 'styled-components'
import theme from '../../../styles/theme'

import { isMobile } from '../../../utils/mobile'

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  border: 1px solid ${theme.greyBorder};
  border-radius: 2px;
  height: 34px;
  padding: 0 10px;
  background-color: ${theme.bgWhite};
  transition: all 0.2s ease;

  :focus-within {
    border-color: ${theme.movPrimary};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px ${theme.bgWhite} inset;
    -webkit-text-fill-color: ${theme.movBlack};
  }

  input {
    flex: 1;
    height: 100%;
    width: ${isMobile() ? '80px' : '145px'};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    border: none;
    background-color: ${theme.bgWhite};
  }
`

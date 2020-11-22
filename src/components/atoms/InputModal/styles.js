import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex: 0 1 ${({ percentage }) => (percentage ? `${percentage}%` : '40%')};
  flex-direction: column;
  position: relative;
  padding-top: 0px;

  input {
    border: 1px solid #f8f8f8;
    outline: none;
    width: 95%;
    font-size: 12px;
    transition: all 0.3s ease-out;
    height: 34px;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    background-color: ${theme.bgWhite};
    border-radius: 4px;
    padding: 13px 16px 13px 16px;
    margin-bottom: 2px;
  }

  label {
    font-size: 16px;
    color: ${theme.textGrayDisabled};
    margin-left: ${({ logo }) => (logo ? '40px' : '16px')};
  }

  input:focus {
    border: 2px solid #f8f8f8;
  }

  input::placeholder {
    color: #8B8B8B;
  }
/*
  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  } */

  /* input:required:invalid + label {
    color: red;
  } */
  input:focus:required:invalid {
    border-bottom: 2px solid red;
  }
  /* input:required:invalid + label:before {
    content: '*';
  } */
  /* input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: -20px;
    color: #000;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    flex: 0 1 ${({ percentageMobile }) => (percentageMobile ? `${percentageMobile}%` : '100%')};
  } */
`

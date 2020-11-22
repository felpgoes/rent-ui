import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.label`
  position: relative;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  margin: ${({ noDefaultMargin }) => (noDefaultMargin ? null : '22px')};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : null)};
  ${({ disable }) => (disable ? 'display:none;' : '')}

  .label {
    position: relative;
    margin-right: 4px;
    display: block;
    float: left;
    width: 20px;
    height: 20px;
    border: 2px solid ${theme.bgGrayDisabled};
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  .label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${theme.greenDefault};
    transform: scale(0);
    transition: all 0.2s ease;
    opacity: 0.08;
    pointer-events: none;
  }
  :hover .label:after {
    transform: scale(3.6);
  }
  input[type='radio']:checked + .label {
    border-color: ${theme.greenDefault};
  }
  input[type='radio']:checked + .label:after {
    transform: scale(1);
    transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
    opacity: 1;
  }
  .cntr {
    position: absolute;
    top: calc(50% - 10px);
    left: 0;
    width: 100%;
    text-align: center;
  }
  .hidden {
    display: none;
  }
  .credit {
    position: fixed;
    right: 20px;
    bottom: 20px;
    transition: all 0.2s ease;
    -webkit-user-select: none;
    user-select: none;
    opacity: 0.6;
  }
  .credit img {
    width: 72px;
  }
  .credit:hover {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    margin-right: 0px;

    .label {
      margin-left: 0px;
      margin-right: 7px;
    }
  }
`

import styled from 'styled-components';

import theme from '../../../styles/theme';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  font-size: 0;
`;
export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Text = styled.p`
  margin-left: 8px;
  margin-right: 32px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: ${(props) => (props.width ? props.width : '20px')};
  height: ${(props) => (props.height ? props.height : '20px')};
  background: ${(props) => (props.checked ? theme.greenDefault : '#fff')};
  background: ${(props) => (props.disabled ? theme.colorGray : '')};

  border-radius: 3px;
  transition: all 150ms;
  border: ${(props) =>
    props.checked
      ? `1px solid ${theme.greenDefault}`
      : `1px solid ${theme.grayDefault}`};
  border: ${(props) => (props.disabled ? theme.colorGray : '')};
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

import Input from '../../atoms/Input';

import DropDown from '../DropDown';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight}px;
        `
      : ''}
`;
export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 49px;
  border: 1px solid ${theme.grayDefault};
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;

  cursor: pointer;
`;

export const InputSearch = styled(Input).attrs((props) => ({
  value: props.value,
  handleChange: props.onChange,
  onBlur: props.onBlur,
  handleInputKeyDown: props.handleInputKeyDown,
}))`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;
export const DropDownSearch = styled(DropDown).attrs((props) => ({
  height: props.height,
  minHeight: props.height,
  width: props.width,
  name: props.name,
  onClick: props.onClick,
}))`
  div {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    height: ${(props) => props.height && `${props.height}px`};
    min-height: ${(props) => props.height && `${props.height}px`};
  }

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ''}
`;

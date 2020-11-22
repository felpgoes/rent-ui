import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

import Input from '../../atoms/Input';

export const Container = styled.div`
  display: flex;

  ${({ margin }) =>
    margin
      ? css`
          margin: ${margin};
        `
      : ''}

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ''}


    ${({ padding }) =>
    padding
      ? css`
          padding: ${padding};
        `
      : ''}


    ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : ''}

    ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
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
`;

export const InputSearch = styled(Input).attrs((props) => ({
  value: props.value,
  handleChange: props.onChange,
}))`
  background: ${theme.bgWhite} 0% 0% no-repeat padding-box;
  border: 1px solid ${theme.grey};
  border-radius: 5px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  opacity: 1;
  width: 100%;
`;

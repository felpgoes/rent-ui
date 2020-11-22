import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

import Button from '../Button';

export const Container = styled(Button).attrs((props) => ({
  type: props.type,
}))`
  border: 0;
  color: ${theme.greenDefault};
  font-size: 16px;
  font-family: 'unimed_slabregular';
  background-color: #f2f2f2;
  width: 100px;
  height: 40px;
  display: flex;

  &:hover:enabled {
    background-color: ${theme.green250};
    font-weight: 600;
    color: ${theme.greenDefault};
  }

  &:active:enabled {
    background-color: ${theme.greenDefault};
    font-weight: 600;
    color: ${theme.white};
  }

  ${({ alignStart, alignCenter, alignEnd }) =>
    alignStart
      ? css`
          align-items: flex-start;
        `
      : alignCenter
      ? css`
          align-items: center;
        `
      : alignEnd
      ? css`
          align-items: flex-end;
        `
      : ''};

  ${({ padding }) =>
    typeof padding === 'number'
      ? css`
          padding: ${padding}px;
        `
      : padding
      ? css`
          padding: 3px;
        `
      : ''}

  ${({
    justifyCenter,
    justifySpaceBetween,
    justifyEnd,
    justifyStart,
    justifySpaceAround,
    justifySpaceEvenly,
  }) =>
    justifyCenter
      ? css`
          justify-content: center;
        `
      : justifySpaceBetween
      ? css`
          justify-content: space-between;
        `
      : justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : justifySpaceAround
      ? css`
          justify-content: space-around;
        `
      : justifySpaceEvenly
      ? css`
          justify-content: space-evenly;
        `
      : justifyStart
      ? css`
          justify-content: flex-start;
        `
      : ''};
`;

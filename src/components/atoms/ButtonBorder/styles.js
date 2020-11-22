import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

import Button from '../Button';

export const Container = styled(Button)`
  border-radius: 5px;
  font-size: 16px;
  font-family: 'unimed_slabregular';
  background-repeat: no-repeat;
  letter-spacing: 0.32px;
  display: flex;

  &:hover:enabled {
    ${({ typeAction }) =>
      typeAction === 'PendenteLiberacao'
        ? css`
            background-color: #fbfdf6;
            border: 2px solid ${theme.yellowDefault};
            font-weight: 600;
          `
        : css`
            background-color: ${theme.green250};
            border: 2px solid ${theme.greenDefault};
            font-weight: 600;
          `}
  }
  &:active:enabled {
    ${({ typeAction }) =>
      typeAction === 'PendenteLiberacao'
        ? css`
            background-color: ${theme.yellowDefault};
            color: ${theme.white};
            font-weight: 600;
          `
        : css`
            background-color: ${theme.greenDefault};
            color: ${theme.white};
            font-weight: 600;
          `}

    svg {
      color: ${theme.white} !important;
      fill: ${theme.white} !important;
      stroke: ${theme.white} !important;
      path {
        fill: ${theme.white} !important;
      }
    }
  }

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: ${theme.white};
          border: none;
          color: ${theme.green221};
          cursor: not-allowed;
        `
      : css``}
  ${({ display }) =>
    display === 'none'
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}

    ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop};
        `
      : ''};

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: 25px;
        `
      : ''};

  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''};
  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ''};
  ${({ marginSides }) =>
    typeof marginSides === 'number'
      ? css`
          margin-left: ${marginSides}px;
          margin-right: ${marginSides}px;
        `
      : marginSides
      ? css`
          margin-left: 8px;
          margin-right: 8px;
        `
      : ''}

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 100px;
        `}


    ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 40px;
        `}

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
  ${({ typeAction }) =>
    typeAction === 'PendenteLiberacao'
      ? css`
          border: 1px solid ${theme.yellowDefault};
          color: ${theme.yellowDefault};
        `
      : typeAction === 'Ativo'
      ? css`
          border: 1px solid ${theme.greenDefault};
          color: ${theme.greenDefault};
        `
      : css``};
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : `color: ${theme.greenDefault};`};
  ${({ background }) =>
    background
      ? css`
          background-color: ${background};
        `
      : `background-color: #ffff;`};
`;

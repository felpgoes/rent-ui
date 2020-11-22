import styled, { css } from 'styled-components';

import Button from '../Button';
import theme from '../../../styles/theme';

export const PrimaryButton = styled(Button).attrs((props) => ({
  disabled: props.disabled,
  type: props.type,
}))`
  font-size: 16px;
  height: 40px;
  border-radius: 0px !important;
  border-radius: 5px 0px 0px 5px !important;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  ${({ fontFamily }) =>
    fontFamily
      ? css`
          font-family: ${fontFamily};
        `
      : `font-family: unimed_slabregular`};

  ${({ background }) =>
    background
      ? css`
          background-color: ${background};
        `
      : `background-color: ${theme.greenDefault}`};

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : `color: ${theme.bgWhite}`};

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 40px;
        `}

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 40px;
        `}

  ${({ marginTop }) =>
    typeof marginTop === 'number'
      ? css`
          margin-top: ${marginTop}px;
        `
      : marginTop
      ? css`
          margin-top: 25px;
        `
      : ''}

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: 25px;
        `
      : ''};

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ''};
  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''};

  ${({ opacity }) =>
    opacity
      ? css`
          opacity: ${opacity};
        `
      : 'opacity: 1'};

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
`;

export const SecondaryButton = styled(Button).attrs((props) => ({
  disabled: props.disabled,
  type: props.type,
}))`
  border-radius: 0px 5px 5px 0px !important;
  width: 40px;
  height: 40px;
  align-items: center;
  border-left: 1px solid #007245;
  opacity: 1;

  ${({ background }) =>
    background
      ? css`
          background-color: ${background};
        `
      : `background-color: ${theme.greenDefault}`};

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : `color: ${theme.bgWhite}`};
`;

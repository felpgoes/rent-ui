import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import theme from '../../../styles/theme';

export const DropdownContainer = styled.div`
  position: absolute;
  z-index: 999;
  border-radius: 5px;
  max-height: 232px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  ${({ showDropdown }) =>
    showDropdown
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  ${({ top }) =>
    top
      ? css`
          top: ${top};
        `
      : ''}

  ${({ left }) =>
    left
      ? css`
          left: ${left};
        `
      : ''}


  ${({ border }) =>
    border
      ? css`
          border: ${border};
        `
      : css`
          border: 2px solid #00995d;
        `}
`;

export const DropdownItens = styled.a`
  font: 13px Calibri Regular;
  color: #808080;
  max-height: 58px;
  letter-spacing: 0.56px;
  text-decoration: none;
  display: block;
  padding: 20px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f2faf7;
    color: #1daa7d !important;
  }

  &:active {
    background-color: #00995d;
    color: #fff !important;
  }
  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : css`
          background-color: #fff;
        `}

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ''}
`;

export const DropDownListContainer = styled.div`
  min-height: 1.875rem;
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  z-index: 10;
  margin-top: 73px;

  &:first-child {
    padding-top: 0.8em;
  }

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ``};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius};
        `
      : `border-radius: 5px;`};

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : `width: 13.75rem;`};

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : `height: 1.875rem`};

  ${({ minWidth }) =>
    minWidth
      ? css`
          min-width: ${minWidth};
        `
      : ''}
  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''}
  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ''}
`;

export const Dropdown = styled.ul`
  overflow: auto;
  list-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : ``};

  ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight};
        `
      : `max-height: 200px;`};
  ${({ border }) =>
    border
      ? css`
          border: ${border} solid ${theme.greenDefault};
        `
      : `border: 2px solid ${theme.greenDefault}`};

  ${({ background }) =>
    background
      ? css`
          background: ${background};
        `
      : `background: ${theme.white} 0% 0% no-repeat padding-box`};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius};
        `
      : `border-radius: 5px`};

  ${({ opacity }) =>
    opacity
      ? css`
          opacity: ${opacity};
        `
      : `opacity: 1`};

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : `color: ${theme.dropdownColorGray}`};

  ${({ font }) =>
    font
      ? css`
          font: ${font};
        `
      : `font: 15px Calibri Regular`};

  ${({ textAlign }) =>
    textAlign
      ? css`
          text-align: ${textAlign};
        `
      : `text-align: left`};

  ${({ letterSpacing }) =>
    letterSpacing
      ? css`
          letter-spacing: ${letterSpacing};
        `
      : `letter-spacing: 0.52px`};
`;
export const Option = styled.li`
  list-style-position: inside;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : ``};

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: default;
        `
      : css`
          cursor: pointer;
          &:hover,
          &:focus {
            color: ${theme.greenDefault};
            background-color: ${lighten(0.65, theme.greenDefault)};
            font-weight: bold;
          }
          &:active {
            border: 1px solid ${theme.greenDefault};
            background-color: ${theme.greenDefault};
            color: ${theme.white};
            border-radius: 0px;
          }
        `};

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : ``};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius};
        `
      : `border-radius: 5px;`};
`;

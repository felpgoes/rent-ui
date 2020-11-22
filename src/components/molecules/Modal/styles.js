import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const ModalContainer = styled.div`
  margin: 1rem;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 12;
  background-color: #ffffff;
  border-radius: 10px;

  ${({ position }) =>
    position
      ? css`
          position: ${position};
        `
      : `  position: fixed;`};

  ${({ left }) =>
    left
      ? css`
          left: ${left}%;
        `
      : ` left: 50%;`};

  ${({ top }) =>
    top
      ? css`
          top: ${top}%;
        `
      : `top: 50%;`};
  /*
    ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight}px;
        `
      : `    max-height: 480px;`};

    ${({ maxWidth }) =>
    maxWidth
      ? css`
          max-width: ${maxWidth}px;
        `
      : `    max-width: 600px;`}; */

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : `height: 473px`};

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : `width: 600px`};
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  background-color: #48484826;
  z-index: 1;
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  align-items: left;
  padding: 20px;
  letter-spacing: 0.32px;
  font: normal normal 600 16px 'unimed_slabregular';
  position: relative;
  /* border-bottom: solid;
    border-bottom-width: thin;
    border-bottom-style: ridge; */
  color: ${theme.grey410};
  border-radius: 10px 10px 0 0;

  svg {
    cursor: pointer;
  }

  ${({ background }) =>
    background
      ? css`
          background: ${background};
        `
      : ''};

  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : `justify-content: space-between`};
  ${({ padding }) =>
    padding
      ? css`
          padding: ${padding};
        `
      : `padding: 20px`};
`;

export const ModalContentWrapperContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  min-width: 300px;

  ${({ background }) =>
    background
      ? css`
          background: ${background};
        `
      : ''};

  ${({ paddingTop }) =>
    paddingTop
      ? css`
          padding-top: ${paddingTop};
        `
      : ``};

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : `display: flex`};

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : ``};
`;
export const ModalContentContainer = styled.div`
  ${({ isModalWithWarning }) =>
    isModalWithWarning === true
      ? css`
          max-height: 370px;
        `
      : css`
          max-height: 300px;
        `}
  ${({ overflow }) =>
    overflow
      ? css`
          overflow: ${overflow};
        `
      : css`
          overflow: auto;
        `}
    ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight};
        `
      : css`
          max-height: 300px;
        `}
`;

export const ModalFooterContainer = styled.div`
  display: flex;

  border-radius: 0px 0px 10px 10px;

  ${({ background }) =>
    background
      ? css`
          background: ${background};
        `
      : ''};
  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : `justify-content: center`};

  // * {
  //   margin: 5px;
  // }

  ${({ padding }) =>
    padding
      ? css`
          padding: ${padding};
        `
      : `padding: 20px`};

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${marginBottom};
        `
      : ''};

  ${({ paddingBottom }) =>
    paddingBottom
      ? css`
          padding-bottom: ${paddingBottom};
        `
      : ''};
`;
